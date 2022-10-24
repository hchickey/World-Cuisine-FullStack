import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import { Register } from "./Register";

export const ApplicationViews = ({ isLoggedIn }) => {
    return (
        <main>
            <Routes>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="*" element={<p>Whoops, nothing here...</p>} />
            </Routes>
        </main>
    );
};