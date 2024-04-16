import React, {useContext, useState} from "react";
import LoginForm from "../visualComponents/LoginForm";
import LoginFormCaller from "../LoginFormCaller/TokenProvider";

function Login({onSubmit}) {
    return (
        <div className={"growing"}>
            <LoginFormCaller>
                <LoginForm/>
            </LoginFormCaller>
        </div>
    )
}

export default Login