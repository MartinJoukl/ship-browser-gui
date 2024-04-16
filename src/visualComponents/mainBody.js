import {Outlet} from "react-router-dom";
import React, {useState} from "react";
import NavigationMenu from "./navigationMenu";
import FooterMenu from "./footerMenu";
import UserContext from "../context/userContext";

function MainBody() {
    const [token, setToken] = useState("");
    const [username, setUsername] = useState("");
    return (
        <UserContext.Provider value={{token, setToken, username, setUsername}}>
            <NavigationMenu></NavigationMenu>
            <Outlet></Outlet>
            <FooterMenu></FooterMenu>
        </UserContext.Provider>

    )
}

export default MainBody;