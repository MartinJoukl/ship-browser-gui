import {Card, CardContent, Typography} from "@mui/material";
import {useContext} from "react";
import dataContext from "../context/dataContext";
import Grid2 from "@mui/material/Unstable_Grid2";
import ShipDetailCard from "./ShipDetailCard";
import ListDataLoader from "../logicComponents/ListDataLoader";
import Calls from "../logicComponents/calls";
import DataContext from "../context/dataContext";
import ShipList from "./shipList";
import ShipSkinCarousel from "./ShipSkinCarousel";

function ShipDetailBody() {
    const ship = useContext(dataContext);
    return (
        <Grid2 container alignItems={"center"} direction={"column"} xs={12}>
            <Grid2 xs={10} className={"topBottomMargined"} spacing={2} mdOffset={1}>
                <Card xs={11}>
                    <Typography variant="h1" component="h1" align={"center"}>
                        {ship.name}
                    </Typography>
                    <Typography variant="h5" component="p" align={"center"}>
                        {ship.code}
                    </Typography>
                </Card>
            </Grid2>
            <Grid2 direction={"row"} xs={10} mdOffset={1} container spacing={3}>
                <Grid2 xs={4}>
                    <ShipDetailCard entity={ship}/>
                </Grid2>
                <Grid2 xs={true}>
                    <Card>
                        <CardContent>
                            <ListDataLoader callDelay={0} calledCall={Calls.listSkinsByShipId}
                                            ContextProvider={DataContext.Provider} filters={ship.id}>
                                <ShipSkinCarousel/>
                            </ListDataLoader>
                        </CardContent>
                    </Card>
                </Grid2>
            </Grid2>
        </Grid2>
    );
}

export default ShipDetailBody