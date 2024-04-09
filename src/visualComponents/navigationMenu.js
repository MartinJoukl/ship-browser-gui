import React from "react";
import {Link, NavLink} from "react-router-dom";

function NavigationMenu() {
    return (
        <nav>
            <NavLink to={"/shipOverview"} className={({isActive, isPending}) =>
                isPending ? "pending" : isActive ? "active" : ""
            }>Ship overview</NavLink>
            <NavLink className={({isActive, isPending}) =>
                isPending ? "pending" : isActive ? "active" : ""
            } to={"/skinOverview"}>Skin overview</NavLink>
            <NavLink className={({isActive, isPending}) =>
                isPending ? "pending, flexEnd" : isActive ? "active flexEnd" : "flexEnd"
            } to={"/login"}>Login</NavLink>
        </nav>)
}

export default NavigationMenu;