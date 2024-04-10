import {useContext} from "react";
import DataContext from "../context/dataContext";
import {Stack} from "@mui/material";
import ShipCard from "./ShipCard";
import Grid2 from "@mui/material/Unstable_Grid2";

function ShipList({shipsToList, loadMoreFunction}) {
    const ships = useContext(DataContext);
    const shipListItems = [];
    if (Array.isArray(ships)) {
        for (const ship of ships) {
            shipListItems.push(<ShipCard key={ship.id} entity={ship}/>)
        }
    }
    return (
        <Grid2 direction="row" item spacing={2}>
            {shipListItems}
        </Grid2>
    );
}

export default ShipList