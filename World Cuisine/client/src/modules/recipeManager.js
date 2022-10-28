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
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(recipe),
    });
};

export const UpdateRecipe = (recipe) => {
    return fetch(baseUrl + `/${recipe.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(recipe),
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