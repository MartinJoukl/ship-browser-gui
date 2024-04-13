import {CardMedia} from "@mui/material";
import {useContext} from "react";
import ImageContext from "../context/imageContext";

function CardMediaFromContext({altText, height, sx}) {
    const image = useContext(ImageContext);
    return (<CardMedia
        component="img"
        height={height}
        image={image}
        alt={altText}
        sx={sx}
    />)
}

export default CardMediaFromContext