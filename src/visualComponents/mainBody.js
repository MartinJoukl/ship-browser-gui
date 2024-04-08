import {createBrowserRouter, RouterProvider} from "react-router-dom";
import UserContext from "../context/userContext";
import React from "react";
import {useState} from "react";
import ShipOverview from "../routes/shipOverview";
import ShipDetails from "../routes/shipDetails";
import ErrorPage from "./errorPage";
import Login from "../routes/login";
import NavigationMenu from "./navigationMenu";
import FooterMenu from "./footerMenu";

const router = createBrowserRouter([
    {
        path: "/",
        element: <ShipOverview></ShipOverview>,
        errorElement: <ErrorPage></ErrorPage>
    },
    {
        path: "/shipDetails/:shipId",
        element: <ShipDetails></ShipDetails>
    },
    {
        path: "/login",
        element: <Login></Login>
    },
]);

function MainBody() {
    const [user, setUser] = useState({});
    return (
        <UserContext.Provider value={user}>
            <NavigationMenu></NavigationMenu>
            <RouterProvider router={router}/>
            <FooterMenu></FooterMenu>
        </UserContext.Provider>
    )
}

export default MainBody;