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
                "Content-Type": "application/json",
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

export const UpdateRecipe = (recipe) => {
    return getToken().then((token) => {
        return fetch(baseUrl + `/${recipe.id}`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(recipe),
        }).then((resp) => {
            if (resp.status === 401) {
                throw new Error("Unauthorized");
            } else if (!resp.ok) {
                throw new Error(
                    "An unknown error occurred while trying to save a new recipe.",
                );
            }
        });
    });
};


export const getRecipeById = (recipeId) => {
    return fetch(baseUrl + `/${recipeId}`)
        .then((resp) => resp.json())
};

export const deleteRecipe = (recipeId) => {
    return fetch(baseUrl + `/${recipeId}`, {
        method: "DELETE"
    });
};

const baseUrlTwo = `/api/recipe/getWithCountries`;

export const getAllRecipesWithCountries = () => {
    return fetch(baseUrlTwo)
        .then((res) => res.json())
};