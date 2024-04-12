import {useContext} from "react";
import DataContext from "../context/dataContext";
import ShipCard from "./ShipCard";
import Grid2 from "@mui/material/Unstable_Grid2";

function ShipList({shipsToList, loadMoreFunction}) {
    const ships = useContext(DataContext);
    const shipListItems = [];
    if (Array.isArray(ships)) {
        for (const ship of ships) {
            shipListItems.push(
                <Grid2 key={ship.id} xs={60} sm={30} md={20} lg={15} xl={10} >
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