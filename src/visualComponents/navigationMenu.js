import React from "react";
import {Link} from "react-router-dom";

function NavigationMenu() {
    return (
        <nav>
            <Link to={"/"}>Ship overview</Link>
            <Link to={"/skinOverview"}>Skin overview</Link>
            <Link to={"/login"}>Skin overview</Link>
        </nav>)
}

export default NavigationMenu;