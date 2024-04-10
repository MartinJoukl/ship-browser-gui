import StringFilter from "../context/stringFilter";
import OptionBoxFilter from "../context/optionBoxFilter";
import {List, ListItem, Typography} from "@mui/material";

function ShipFilterMenu({filterUpdateFunction}) {
    //"name", "code", "shipClass", "nationality"
    function onChange(e) {
        filterUpdateFunction(e);
    }

    return (
        <List>
            <ListItem>
                <Typography gutterBottom variant="h5" component="div">
                    Filter
                </Typography>
            </ListItem>
            <ListItem>
                <StringFilter filterField={"name"} label={"Name"} onChange={onChange}/>
            </ListItem>
            <ListItem>
                <StringFilter filterField={"code"} label={"Code"} onChange={onChange}/>
            </ListItem>
            <ListItem>
                <StringFilter filterField={"shipClass"} label={"Class"} onChange={onChange}/>
            </ListItem>
            <ListItem>
                <StringFilter filterField={"nationality"} label={"Nationality"} onChange={onChange}/>
            </ListItem>
            <ListItem>
                <OptionBoxFilter filterField={"hullType"} label={"HullType"} onChange={onChange}/>
            </ListItem>
        </List>
    )
}

export default ShipFilterMenu;