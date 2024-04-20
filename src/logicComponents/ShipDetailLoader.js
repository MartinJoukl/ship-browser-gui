import DataContext from "../context/dataContext";
import {useEffect, useState} from "react";
import Calls from "../calls";
import {Button} from "@mui/material";
import AlertSnackbar from "../visualComponents/AlertSnackbar";

function ShipDetailLoader({children, id, failAlertMessage}) {
    const [data, setData] = useState(null);
    const [loadFailed, setLoadFailed] = useState(false);
    // Not rendered unless fail, so open
    const [failAlertOpen, setFailAlertOpen] = useState(true);
    const [loadInProgress, setLoadInProgress] = useState(false);


    useEffect(() => {
        if (loadFailed) {
            return;
        }
        setData(null);
        let ignore = false;
        setLoadInProgress(true);
        if (!ignore) {
            Calls.getShip(id).then(result => {
                if (!ignore) {
                    setData(result);
                    setLoadInProgress(false);
                }
            }).catch((reason) => {
                if (!ignore) {
                    setLoadInProgress(() => false);
                    setFailAlertOpen(true);
                    setLoadFailed(true);
                    setData(null);
                }
            });
        }
        return () => {
            ignore = true;
        };
    }, [id, loadFailed]);

    if (loadFailed) {
        return (
            <div style={{display:"block", marginTop:"10px"}}>
                <Button disabled={loadInProgress} onClick={() => {
                    setLoadFailed(false)
                }} size="large" variant="contained">Reload</Button>
                <AlertSnackbar open={failAlertOpen} message={failAlertMessage} setOpen={setFailAlertOpen} severity={"error"}/>
            </div>
        );
    }

    return (data == null ? <h1>Loading...</h1> :
            <DataContext.Provider value={data}>
                {children}
            </DataContext.Provider>
    );
}

export default ShipDetailLoader