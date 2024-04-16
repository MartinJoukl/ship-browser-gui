import './App.css';
import UserContext from "./context/userContext";
import React, {useState} from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ShipOverview from "./routes/shipOverview";
import ErrorPage from "./visualComponents/errorPage";
import ShipDetails from "./routes/shipDetails";
import Login from "./routes/login";
import MainBody from "./visualComponents/mainBody";
import AdminPanelRoute from "./routes/AdminPanelRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainBody></MainBody>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/shipOverview",
                element: <ShipOverview></ShipOverview>,
            },
            {
                path: "/shipDetails/:shipId",
                element: <ShipDetails></ShipDetails>
            },
            {
                path: "skinOverview",
                element: <h1>Under construction</h1>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/administration",
                element: <AdminPanelRoute></AdminPanelRoute>
            }
        ]
    }
]);

function App() {
    return (
        <RouterProvider router={router}/>
    );
}

export default App;
