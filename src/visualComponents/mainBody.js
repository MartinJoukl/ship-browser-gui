import {Outlet} from "react-router-dom";
import React from "react";
import NavigationMenu from "./navigationMenu";
import FooterMenu from "./footerMenu";

function MainBody() {
    return (
        <>
            <NavigationMenu></NavigationMenu>
            <Outlet></Outlet>
            <FooterMenu></FooterMenu>
        </>

    )
}

export default MainBody;