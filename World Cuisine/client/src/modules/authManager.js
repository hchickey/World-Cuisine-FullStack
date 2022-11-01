import firebase from "firebase/app";
import "firebase/auth";

const _apiUrl = "/api/user";

const _doesUserExist = (firebaseUserId) => {
    return getToken().then((token) =>
        fetch(`${_apiUrl}/DoesUserExist/${firebaseUserId}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(resp => resp.ok));
};

const _saveUser = (userUser) => {
    return getToken().then((token) =>
        fetch(_apiUrl, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userUser)
        }).then(resp => resp.json()));
};

export const getToken = () => firebase.auth().currentUser.getIdToken();


export const login = (email, pw) => {
    return firebase.auth().signInWithEmailAndPassword(email, pw)
        .then((signInResponse) => _doesUserExist(signInResponse.user.uid))
        .then((doesUserExist) => {
            if (!doesUserExist) {
                logout();

                throw new Error("Something's wrong. The user exists in firebase, but not in the application database.");
            }
        }).catch(err => {
            console.error(err);
            throw err;
        });
};

export const logout = () => {
    firebase.auth().signOut()
};

export const register = (userUser, password) => {
    return firebase.auth().createUserWithEmailAndPassword(userUser.email, password)
        .then((createResponse) => _saveUser({
            ...userUser,
            firebaseUserId: createResponse.user.uid
        }));
};

export const onLoginStatusChange = (onLoginStatusChangeHandler) => {
    firebase.auth().onAuthStateChanged((user) => {
        onLoginStatusChangeHandler(!!user);
    })
};

export const getCurrentUser = () => {
    return getToken().then((token) =>
        fetch(`${_apiUrl}/GetCurrentUser`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(resp => resp.json()))
};