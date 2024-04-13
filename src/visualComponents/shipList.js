import {useContext} from "react";
import DataContext from "../context/dataContext";
import ShipCard from "./ShipCard";
import Grid2 from "@mui/material/Unstable_Grid2";

function ShipList({shipsToList, loadMoreFunction}) {
    const context = useContext(DataContext);
    const ships = context;
    const shipListItems = [];
    if (Array.isArray(ships)) {
        for (const ship of ships) {
            shipListItems.push(
                <Grid2 key={ship.id} xs={30} sm={20} md={20} lg={15} xl={10}>
                    <ShipCard entity={ship}/>
                </Grid2>)
        }
    }
    return (
        <>
            {shipListItems}
        </>
    );
}

export default ShipList