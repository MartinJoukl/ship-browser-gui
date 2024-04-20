import {useContext, useEffect, useState} from "react";
import Calls from "../calls";
import FormContext from "../context/FormContext";
import * as React from "react";
import AlertSnackbar from "../visualComponents/AlertSnackbar";
import UserContext from "../context/userContext";

function AdminPanelCaller({children}) {
    const {token} = useContext(UserContext);
    const [callInProgress, setCallInProgress] = useState(false);
    const [callFailed, setCallFailed] = useState(false);
    const [responseMessage, setResponseMessage] = useState("");
    // Not rendered unless fail, so open
    const [alertOpen, setAlertOpen] = useState(false);

    function onSynchronize() {
        setCallInProgress(true);
        Calls.synchronizeShips(token).then((data) => {
                setCallInProgress(false);
                setCallFailed(false)
                setResponseMessage("Ship synchronization has been completed successfully. Images will be downloaded as background task.");
                setAlertOpen(true);
            }
        ).catch((error) => {
            setCallInProgress(false);
            setCallFailed(true)
            setResponseMessage("Ship synchronization failed due to unknown reason.");
            setAlertOpen(true);
        });
    }

    function onGeneratePreviews() {
        setCallInProgress(true);
        Calls.createSkinImagesPreviews(token).then((data) => {
                setCallInProgress(false);
                setCallFailed(false)
                setResponseMessage("Creating of skin image previews has been initiated successfully. Previews will be generated as background task.");
                setAlertOpen(true);

            }
        ).catch((error) => {
            setCallInProgress(false);
            setCallFailed(true)
            setResponseMessage("Generating of skin image previews failed due to unknown reason.");
            setAlertOpen(true);
        });
    }

    const severity = callFailed ? "error" : "success"

    return (
        <>
            <AlertSnackbar open={alertOpen} message={responseMessage} setOpen={setAlertOpen} severity={severity}/>
            <FormContext.Provider value={{onSynchronize, onGeneratePreviews, callInProgress}}>
                {children}
            </FormContext.Provider>
        </>
    );
}

export default AdminPanelCaller