import {Card, CardContent, Typography} from "@mui/material";
import {useContext} from "react";
import dataContext from "../context/dataContext";
import Grid2 from "@mui/material/Unstable_Grid2";
import ShipDetailCard from "./ShipDetailCard";
import ShipSkinCarousel from "./ShipSkinCarousel";
import SkillsCard from "./SkillsCard";

function ShipDetailBody() {
    const ship = useContext(dataContext);

    return (
        <Grid2 container alignItems={"center"} direction={"column"} xs={12}>
            <Grid2></Grid2>
            <Grid2 xs={10} className={"topBottomMargined"} spacing={3}>
                <Card xs={11}>
                    <CardContent>
                        <Typography variant="h2" component="h1" align={"center"}>
                            {ship.name}
                        </Typography>
                        <Typography variant="h5" component="p" align={"center"}>
                            {ship.code}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid2>
            <Grid2></Grid2>
            <Grid2 direction={"row"} xs={10} container spacing={3}>
                <Grid2 direction={"column"} md={6} lg={4} spacing={3} container>
                    <Grid2>
                        <ShipDetailCard entity={ship}/>
                    </Grid2>
                    <Grid2>
                        <SkillsCard skills={ship.skills}/>
                    </Grid2>
                </Grid2>
                <Grid2 xs={true}>
                    <Card>
                        <CardContent>
                            <ShipSkinCarousel skins={ship.skins}/>
                        </CardContent>
                    </Card>
                </Grid2>
            </Grid2>
        </Grid2>
    );
}

export default ShipDetailBody