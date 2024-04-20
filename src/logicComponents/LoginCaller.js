import {useContext, useEffect, useState} from "react";
import Calls from "../calls";
import FormContext from "../context/FormContext";
import userContext from "../context/userContext";
import * as React from "react";
import AlertSnackbar from "../visualComponents/AlertSnackbar";

function LoginFormCaller({children}) {
    const {setToken, setUsername} = useContext(userContext);
    const [callInProgress, setCallInProgress] = useState(false);
    const [loginFailed, setLoginFailed] = useState(false);
    const [loginFailedMessage, setLoginFailedMessage] = useState("");
    // Not rendered unless fail, so open
    const [failAlertOpen, setFailAlertOpen] = useState(false);

    function onSubmit({username, password}) {
        setCallInProgress(true);
        Calls.login(username, password).then((data) => {
                setCallInProgress(false);
                setToken(data);
                setUsername(username);
                setLoginFailed(false)
            }
        ).catch((error) => {
            setCallInProgress(false);
            setLoginFailed(true)
            if (error.message === "unauthorized") {
                setLoginFailedMessage("Login failed due to invalid credentials. Check your username and password.");
            } else {
                setLoginFailedMessage("Login failed due to unknown reason");
            }
            setFailAlertOpen(true);
        });
    }

    return (
        <>
            <AlertSnackbar open={failAlertOpen} message={loginFailedMessage} setOpen={setFailAlertOpen}
                           severity={"error"}/>
            <FormContext.Provider value={{onSubmit, callInProgress}}>
                {children}
            </FormContext.Provider>
        </>
    );
}

export default LoginFormCaller