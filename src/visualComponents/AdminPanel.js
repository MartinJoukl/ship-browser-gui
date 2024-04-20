import {Button, Card, CardContent, Typography} from "@mui/material";
import React, {useContext} from "react";
import FormContext from "../context/FormContext";

function AdminPanel() {
    const {onSynchronize, onGeneratePreviews, callInProgress} = useContext(FormContext);
    return (
        <Card className={"form"} variant={"outlined"}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Administration panel
                </Typography>
                <Button style={{marginBottom: "20px"}} disabled={callInProgress} fullWidth={true} onClick={() => {
                    onSynchronize();
                }} size="large" variant="contained">Synchronize ships with AzurAPI</Button>
                <br/>
                <Button disabled={callInProgress} fullWidth={true} onClick={() => {
                    onGeneratePreviews();
                }} size="large" variant="contained">Generate skin previews</Button>
            </CardContent>
        </Card>)
}

export default AdminPanel