import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./context/Theme/ThemeProvider";

import App from "./App";
import ProductProvider from "./context/Store/Product/ProductProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <ThemeProvider>
            <ProductProvider>
                <App />
            </ProductProvider>
        </ThemeProvider>
    </BrowserRouter>
);
