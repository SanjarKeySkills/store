import React from "react";
import { Route, Routes } from "react-router-dom";
import { useTheme } from "./hooks/useTheme";
import MainPage from "./pages/MainPage/MainPage";
import MainPageLayout from "./layouts/MainPageLayout";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import AdProductPage from "./pages/AddProductPage/AdProductPage";
import "./App.css";
import AddProductPageLayout from "./layouts/AddProductPageLayout";
import EditProductPage from "./components/Product/Edit/EditProduct";

const App = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={`app ${theme}`}>
            {/* <h2>Test</h2> */}
            <Routes>
                <Route element={<MainPageLayout />}>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/products" element={<ProductsPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                </Route>
                <Route element={<AddProductPageLayout />}>
                    <Route path="/add-product" element={<AdProductPage />} />
                    <Route
                        path="/edit-product/:id"
                        element={<EditProductPage />}
                    />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <button onClick={toggleTheme}>TOGGLE THEME</button>
        </div>
    );
};
export default App;

// здесь в App.js только роутинг
// export & import - это директивы, загружающие модули (это скрипты, файлы)
// через директивы мобули обмениваются функциональностью, обмен функциями
// для этого надо указать в импорте в фигурной скобке наименование передаваемого файла
// return - Оператор может возвращать значение, передавая его вызывающей функции

// useTheme
// это Апи-Хук функция с переменной const с указанием в фигурных скобках
// предопределяет непосредственно его функциональность (например, useState, useEffect и тд)
// позволяет инкапсулировать большие фрагменты кода
// хук обязательно должен возвращать результаты выполнения в виде значений или функций.

// Router
// Прежде всего для работы с маршрутами необходимо добавить ссылки на модули react-router-dom
// В системе маршрутизации каждый маршрут сопоставляется с определенным компонентом
//
// Routes - объект маршрута, который определяет набор маршрутов и, когда к приложению, приходит запрос,
// то Router выполняет сопоставление запроса с маршрутами. И если какой-то маршрут совпадает с URL запроса,
// то этот маршрут выбирается для обработки запроса.

// Route - Каждый маршрут представляет объект Route. Для маршрута устанавливаются два атрибута:
// - path: шаблон адреса, с которым будет сопоставляться запрошенный адрес URL
// - element - тот компонент, который отвечает за обработку запроса по этому маршруту
