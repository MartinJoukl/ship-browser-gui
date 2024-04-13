import {useContext} from "react";
import SkinWithImagesContext from "../context/skinWithImageContext";
import {Stack, Typography} from "@mui/material";

function SkinNameHeader({skin}) {
    const {chibi} = useContext(SkinWithImagesContext);
    return (
        <Stack direction="row"
               justifyContent="center"
               alignItems="center"
        >
            <div style={{height: "2em"}}>
                <img src={chibi} height={"100%"} alt={"chibi"}/>
            </div>
            <Typography variant="h5"
                        component="div"
                        height="2em"
                        align="center"
                        textAlign="center"
                        justifyContent="center"
                        alignItems="center"
                        display="flex"
                        margin="0px 10px"
            >
                {skin.name}
            </Typography>
            <div style={{height: "2em"}}>
                <img src={chibi} height={"100%"} alt={"chibi"}/>
            </div>
        </Stack>
    )
}

export default SkinNameHeader