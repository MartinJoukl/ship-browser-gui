import DataContext from "../context/dataContext";
import {useContext, useEffect, useState} from "react";
import Calls from "../calls";
import FormContext from "../context/FormContext";
import userContext from "../context/userContext";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import * as React from "react";
import AlertSnackbar from "../visualComponents/AlertSnackbar";

function LoginFormCaller({children}) {
    const {setToken, setUsername} = useContext(userContext);
    const [callInProgress, setCallInProgress] = useState(false);
    const [loginFailed, setLoginFailed] = useState(false);
    const [loginFailedMessage, setLoginFailedMessage] = useState();
    // Not rendered unless fail, so open
    const [failAlertOpen, setFailAlertOpen] = useState(false);

    function onSubmit({username, password}) {
        setCallInProgress(true);
        Calls.login(username, password).then((data) => {
                if (data.status === 200) {
                    setCallInProgress(false);
                    setToken(data);
                    setUsername(username);
                    setLoginFailed(false)
                } else {
                    setCallInProgress(false);
                    setLoginFailedMessage("Login failed due to invalid credentials. Check your username and password.");
                    setLoginFailed(true)
                    setFailAlertOpen(true);
                }
            }
        ).catch((error) => {
            setCallInProgress(false);
            setLoginFailed(true)
            setLoginFailedMessage("Login failed due to unknown reason");
            setFailAlertOpen(true);
        });
    }

    return (
        <>
            <AlertSnackbar open={failAlertOpen} message={loginFailedMessage} setOpen={setFailAlertOpen}/>
            <FormContext.Provider value={{onSubmit, callInProgress}}>
                {children}
            </FormContext.Provider>
        </>
    );
}

export default LoginFormCaller