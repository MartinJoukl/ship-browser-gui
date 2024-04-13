import {useContext} from "react";
import DataContext from "../context/dataContext";
import ShipCard from "./ShipCard";
import Grid2 from "@mui/material/Unstable_Grid2";
import {Button} from "@mui/material";

function ShipList() {
    const context = useContext(DataContext);
    const ships = context.data.itemList;
    const pageInfo = context.pageInfo;
    const loadInProgress = context.loadInProgress;
    const loadMoreFunction = context.loadMore;
    const shipListItems = [];
    if (Array.isArray(ships)) {
        for (const ship of ships) {
            shipListItems.push(
                <Grid2 key={ship.id} xs={30} sm={20} md={20} lg={15} xl={10}>
                    <ShipCard entity={ship}/>
                </Grid2>)
        }
    }

    if ((pageInfo.pageIndex + 1) * pageInfo.pageSize < pageInfo.total) {
        return (
            <div className={"centerAlign"}>
                <Grid2 container xs={true} direction="row" columns={60} spacing={3}>
                    {shipListItems}
                </Grid2>
                <Button disabled={loadInProgress} onClick={() => {
                    loadMoreFunction()
                }} style={{marginTop: "20px"}} size="large" variant="contained">Show more</Button>
            </div>
        );
    } else {
        return (
            <Grid2 container xs={true} direction="row" columns={60} spacing={3}>
                {shipListItems}
            </Grid2>
        );
    }
}

export default ShipList