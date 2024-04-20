import React, {useContext, useState} from "react";
import LoginForm from "../visualComponents/LoginForm";
import LoginFormCaller from "../logicComponents/LoginCaller";

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