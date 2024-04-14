import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import {Navigate} from "react-router-dom";
import {useState} from "react";
import Calls from "../logicComponents/calls";

function ShipCard({entity}) {
    const [shouldRedirect, setShouldRedirect] = useState(false);

    function goToShipDetails() {
        setTimeout(() => {
            setShouldRedirect(true);
        }, 250);
    }

    return (
        shouldRedirect ? <Navigate to={`/shipDetails/${entity.id}`}/> : <Card raised>
            <CardActionArea onClick={goToShipDetails}>
                <CardContent>
                    <Typography variant="h5" component="div" height={"2em"} align={"center"}
                                textAlign={"center"}>
                        {entity.name}
                    </Typography>
                </CardContent>
                <CardMedia
                    component="img"
                    height={"256"}
                    image={Calls.getShipImageUrl(entity.id)}
                    alt={entity.name}
                />
            </CardActionArea>
        </Card>
    )
}

export default ShipCard