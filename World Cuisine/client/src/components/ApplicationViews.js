import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./Home";
import Login from "./Login";
import { RecipeAddForm } from "./recipe/RecipeAddForm";
import { RecipeDetails } from "./recipe/RecipeDetails";
import { RecipeEdit } from "./recipe/RecipeEdit";
import { RecipeList } from "./recipe/RecipeList";
import { Register } from "./Register";

export const ApplicationViews = ({ isLoggedIn }) => {
    return (
        <main>
            <Routes>
                <Route path="/">
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route
                        index
                        path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
                    <Route
                        index
                        path="recipe" element={isLoggedIn ? <RecipeList /> : <Navigate to="/login" />} />
                    <Route
                        path="recipe/:recipeId" element={isLoggedIn ? <RecipeDetails /> : <Navigate to="/login" />} />
                    <Route path="recipe/add" element={isLoggedIn ? <RecipeAddForm /> : <Navigate to="/login" />} />
                    <Route path="recipe/edit/:recipeId" element={<RecipeEdit />} />
                    <Route path="*" element={<p>Whoops, nothing here...</p>} />
                </Route>
            </Routes>
        </main>
    );
};