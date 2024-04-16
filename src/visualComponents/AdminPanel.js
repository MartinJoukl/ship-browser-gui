import {Button, Card, CardContent, Typography} from "@mui/material";
import React from "react";

function AdminPanel() {
    return (
        <Card className={"form"} variant={"outlined"}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Administration panel
                </Typography>
                <Button disabled={false} onClick={() => {
                    //loadMoreFunction()
                }} size="large" variant="contained">Synchronize ships with AzurAPI</Button>
            </CardContent>
        </Card>)
}

export default AdminPanel