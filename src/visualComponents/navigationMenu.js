import React, {useContext} from "react";
import {Link, NavLink} from "react-router-dom";
import UserContext from "../context/userContext";
import {Typography} from "@mui/material";

function NavigationMenu() {
    const {token, username, setToken, setUsername} = useContext(UserContext);

    const navLinks = [
        <NavLink key={"ship"} to={"/shipOverview"} className={({isActive, isPending}) =>
            isPending ? "pending" : isActive ? "active" : ""
        }>Ship overview</NavLink>,
        <NavLink key={"skin"} className={({isActive, isPending}) =>
            isPending ? "pending" : isActive ? "active" : ""
        } to={"/skinOverview"}>Skin overview</NavLink>
    ];

    if (token) {
        navLinks.push(
            <div key={"loggedIn"} className="flexEnd">
                <Typography
                    variant="p"
                    color={"white"}
                    component="div"
                    align="center"
                    textAlign="center"
                    justifyContent="center"
                    alignItems="center"
                    display="flex"
                    margin="0px 10px"
                    width="150px"
                    fontFamily={"Arial"}
                >
                    Welcome {username}
                </Typography>
                <NavLink key={"adminPanel"} className={({isActive, isPending}) =>
                    isPending ? "pending" : isActive ? "active" : ""
                } to={"/administration"}>Administration</NavLink>
                <NavLink key={"logout"} className={({isActive, isPending}) =>
                    isPending ? "pending" : isActive ? "active" : ""
                } to={"/shipOverview"} onClick={(() => {
                    //Should also call logout but... ;)
                    setToken("");
                    setUsername("");
                })}> Logout</NavLink>
            </div>
        )

    } else {
        navLinks.push(
            <div className="flexEnd" key={"login"}>
                <NavLink  className={({isActive, isPending}) =>
                    isPending ? "pending" : isActive ? "active" : ""
                } to={"/login"}>Login</NavLink>
            </div>
        );
    }

    return (
        <nav>
            {navLinks}
        </nav>
    )
}

export default NavigationMenu;