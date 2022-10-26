import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import { RecipeAddForm } from "./RecipeAddForm";
import { RecipeEdit } from "./RecipeEdit";
import { RecipeList } from "./RecipeList";
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
                        path="recipe" element={isLoggedIn ? <RecipeList /> : <Navigate to="/login" />} />
                    <Route path="recipe/add" element={<RecipeAddForm />} />
                    <Route path="recipe/edit/:recipeId" element={<RecipeEdit />} />
                    <Route path="*" element={<p>Whoops, nothing here...</p>} />
                </Route>
            </Routes>
        </main>
    );
};