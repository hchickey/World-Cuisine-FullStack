import { getToken } from "./authManager";

const baseUrl = '/api/recipe';

export const getAllRecipes = () => {
    return getToken().then((token) => {
        return fetch(baseUrl, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((resp) => {
                if (resp.ok) {
                    return resp.json();
                } else {
                    throw new Error(
                        "An unknown error occurred....."
                    )
                }
            })
    })
};

export const addRecipe = (recipe) => {
    return getToken().then((token) => {
        return fetch(baseUrl, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "applications/json",
            },
            body: JSON.stringify(recipe),
        }).then((resp) => {
            if (resp.status === 401) {
                throw new Error("Unauthorized");
            } else if (!resp.ok) {
                throw new Error(
                    "An unknown error occurred while trying to save a new post.",
                );
            }
        });
    });
};