import './App.css';
import UserContext from "./context/userContext";
import React, {useState} from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ShipOverview from "./routes/shipOverview";
import ErrorPage from "./visualComponents/errorPage";
import ShipDetails from "./routes/shipDetails";
import Login from "./routes/login";
import MainBody from "./visualComponents/mainBody";

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
            }]
    }
]);

function App() {
    const [user, setUser] = useState({});
    return (
        <UserContext.Provider value={user}>
            <RouterProvider router={router}/>
        </UserContext.Provider>
    );
}

export default App;
