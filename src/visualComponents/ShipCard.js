import {Card, CardActionArea, CardContent, Typography} from "@mui/material";
import ImageLoader from "../logicComponents/ImageLoader";
import CardMediaFromContext from "./CardMediaFromContext";
import {Navigate, redirect} from "react-router-dom";
import {useState} from "react";

function ShipCard({entity}) {
    const [shouldRedirect, setShouldRedirect] = useState(false);
    function goToShipDetails(){
        setTimeout(()=>{
            setShouldRedirect (true);
        }, 250);
    }

    return (
        shouldRedirect? <Navigate  to={`/shipDetails/${entity.id}`} /> :<Card raised>
            <CardActionArea onClick={goToShipDetails}>
                <CardContent>
                    <Typography variant="h5" component="div" height={"2em"} align={"center"}
                                textAlign={"center"}>
                        {entity.name}
                    </Typography>
                </CardContent>
                <ImageLoader id={entity.id}>
                    <CardMediaFromContext altText={entity.name} height={"256"}/>
                </ImageLoader>
            </CardActionArea>
        </Card>
    )
}

export default ShipCard