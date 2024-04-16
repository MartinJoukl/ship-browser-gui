import React, {useContext, useState} from "react";
import UserContext from "../context/userContext";
import {Button, Card, CardContent, TextField, Typography} from "@mui/material";
import FormContext from "../context/FormContext";
import {Navigate} from "react-router-dom";

function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {onSubmit, callInProgress} = useContext(FormContext);
    const {token} = useContext(UserContext);
    if (token) {
        return (
            <Navigate to={`/shipOverview`}/>
        );
    }

    return (
        <Card className={"form"} variant={"outlined"}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Login to system
                </Typography>
                <TextField className="margined" variant="filled" label="Username" fullWidth={true}
                           onChange={((e) => setUsername(e.target.value))}/>
                <div style={{marginBottom: "20px"}}></div>
                <TextField className="margined" variant="filled" label="Password"
                           onChange={((e) => setPassword(e.target.value))} fullWidth={true}
                           type={"password"}/>
                <div style={{marginBottom: "20px"}}></div>

                <div className={"centered"}>
                    <Button disabled={callInProgress} onClick={(() => onSubmit({password, username}))} size="large"
                            variant="contained">Login</Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default LoginForm