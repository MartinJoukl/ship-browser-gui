import {CardMedia} from "@mui/material";
import {useContext} from "react";
import ShipImageContext from "../context/shipImageContext";

function CardMediaFromContext({altText, height, sx}) {
    const image = useContext(ShipImageContext);
    return (<CardMedia
        component="img"
        height={height}
        image={image}
        alt={altText}
        sx={sx}
    />)
}

export default CardMediaFromContext