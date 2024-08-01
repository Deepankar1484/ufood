import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import User from "./components/User";
import Ufood from "./components/Ufood";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index element={<Ufood />} />
            <Route path="/:fname" element={<User />}>
                <Route path="/:fname/:gname" element={<User />} />
            </Route>
        </Route>
    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <RouterProvider router={router} />
    </>
);
