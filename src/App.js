import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";

import MainPage from "./pages/MainPage/MainPage";
import MainPageLayout from "./layouts/MainPageLayout";

import "./App.css";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

import { ThemeContext } from "./context/Theme/ThemeContext";

const App = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <div className={`app ${theme}`}>
            <h2>Test</h2>
            <Routes>
                <Route element={<MainPageLayout />}>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/products" element={<ProductsPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <button onClick={toggleTheme}>TOGGLE THEME</button>
        </div>
    );
};

export default App;
