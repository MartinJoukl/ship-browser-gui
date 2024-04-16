import {Stack, Typography} from "@mui/material";
import Calls from "../calls";

function SkinNameHeader({skin}) {
    return (
        <Stack direction="row"
               justifyContent="center"
               alignItems="center"
        >
            <div style={{height: "2em"}}>
                <img src={Calls.getSkinChibiUrl(skin.id)} height={"100%"} alt={"chibi"}/>
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
                <img src={Calls.getSkinChibiUrl(skin.id)} height={"100%"} alt={"chibi"}/>
            </div>
        </Stack>
    )
}

export default SkinNameHeader