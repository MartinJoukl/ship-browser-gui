import StringFilter from "./stringFilter";
import OptionBoxFilter from "./optionBoxFilter";
import {List, ListItem, MenuItem, Typography} from "@mui/material";

function SkinFilterMenu({filterUpdateFunction, filters}) {
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
                <StringFilter filterField={"name"} label={"Skin name"} onChange={onChange}/>
            </ListItem>
            <ListItem>
                <StringFilter filterField={"ship.name"} label={"Ship name"} onChange={onChange}/>
            </ListItem>
            <ListItem>
                <StringFilter filterField={"ship.code"} label={"Ship code"} onChange={onChange}/>
            </ListItem>
            <ListItem>
                <StringFilter filterField={"ship.shipClass"} label={"Ship class"} onChange={onChange}/>
            </ListItem>
            <ListItem>
                <StringFilter filterField={"ship.nationality"} label={"Ship nationality"} onChange={onChange}/>
            </ListItem>
            <ListItem>
                <OptionBoxFilter filterField={"ship.hullType"} label={"Ship hull type"} onChange={onChange}
                                 value={filters?.ship?.hullType}>
                    <MenuItem value="">
                        <em>All</em>
                    </MenuItem>
                    <MenuItem value={"Destroyer"}>Destroyer</MenuItem>
                    <MenuItem value={"Battleship"}>Battleship</MenuItem>
                    <MenuItem value={"Light Cruiser"}>Light Cruiser</MenuItem>
                    <MenuItem value={"Heavy Cruiser"}>Heavy Cruiser</MenuItem>
                    <MenuItem value={"Large Cruiser"}>Large Cruiser</MenuItem>
                    <MenuItem value={"Monitor"}>Monitor</MenuItem>
                    <MenuItem value={"Battlecruiser"}>Battlecruiser</MenuItem>
                    <MenuItem value={"Aviation Battleship"}>Aviation Battleship</MenuItem>
                    <MenuItem value={"Light Carrier"}>Light Carrier</MenuItem>
                    <MenuItem value={"Aircraft Carrier"}>Aircraft Carrier</MenuItem>
                    <MenuItem value={"Repair"}>Repair ship</MenuItem>
                    <MenuItem value={"Munition Ship"}>Munition Ship</MenuItem>
                    <MenuItem value={"Submarine"}>Submarine</MenuItem>
                    <MenuItem value={"Sailing Frigate"}>Sailing Frigate</MenuItem>
                    <MenuItem value={"Submarine Carrier"}>Submarine Carrier</MenuItem>

                </OptionBoxFilter>
            </ListItem>
            <ListItem>
                <OptionBoxFilter filterField={"ship.rarity"} label={"Ship rarity"} onChange={onChange} value={filters?.ship?.rarity}>
                    <MenuItem value="">
                        <em>All</em>
                    </MenuItem>
                    <MenuItem value={"Normal"}>Normal</MenuItem>
                    <MenuItem value={"Rare"}>Rare</MenuItem>
                    <MenuItem value={"Elite"}>Elite</MenuItem>
                    <MenuItem value={"Priority"}>Priority</MenuItem>
                    <MenuItem value={"Super Rare"}>Super Rare</MenuItem>
                    <MenuItem value={"Decisive"}>Decisive</MenuItem>
                    <MenuItem value={"Ultra Rare"}>Ultra Rare</MenuItem>
                </OptionBoxFilter>
            </ListItem>
        </List>
    )
}

export default SkinFilterMenu;