import ListDataLoader from "../logicComponents/ListDataLoader";
import Grid2 from "@mui/material/Unstable_Grid2";
import {Card, CardContent} from "@mui/material";
import {useState} from "react";
import Calls from "../calls";
import DataContext from "../context/dataContext";
import SkinList from "../visualComponents/skinList";
import SkinFilterMenu from "../visualComponents/SkinFilterMenu";

function SkinOverview() {
    const [filters, setFilters] = useState({});


    function isObject(item) {
        return (item && typeof item === 'object' && !Array.isArray(item));
    }

    function mergeDeep(target, ...sources) {
        if (!sources.length) return target;
        const source = sources.shift();

        if (isObject(target) && isObject(source)) {
            for (const key in source) {
                if (isObject(source[key])) {
                    if (!target[key]) Object.assign(target, {[key]: {}});
                    mergeDeep(target[key], source[key]);
                } else {
                    Object.assign(target, {[key]: source[key]});
                }
            }
        }

        return mergeDeep(target, ...sources);
    }

    function updateFilters(newFilterValue) {
        setFilters((prevState => {
            const newState = mergeDeep({}, prevState, newFilterValue);
            for (const key in newState) {
                if (!newState[key]) {
                    delete newState[key];
                }
            }
            for (const key in newState) {
                if (!newState[key]) {
                    delete newState[key];
                }
            }
            // TODO better but no :)
            if (newState?.ship) {
                for (const key in newState.ship) {
                    if (!newState.ship[key]) {
                        delete newState.ship[key];
                    }
                }
            }

            return newState;
        }));
    }

    return (<div className={"margined centered"}>
            <Grid2 container xs={true} direction="row" spacing={3}
                   sx={{flexDirection: {xs: "column", sm: "column", md: "row"}}}>
                <Grid2 xs={"auto"} style={{marginRight: "10px"}}
                       sx={{marginRight: {xs: "0px", sm: "10px", md: "10px"}}}>
                    <Card variant="outlined" style={{position: "sticky", top: "15px"}}>
                        <CardContent>
                            <SkinFilterMenu filterUpdateFunction={updateFilters} filters={filters}/>
                        </CardContent>
                    </Card>
                </Grid2>
                <Grid2 xs={true} style={{marginRight: "10px"}} sx={{marginRight: {xs: "0px", sm: "10px", md: "10px"}}}>
                    <ListDataLoader filters={{searchCriteria: filters}} initialPaging={{pageIndex: 0, pageSize: 20}}
                                    callDelay={1000}
                                    calledCall={Calls.listSkins} ContextProvider={DataContext.Provider}
                                    failAlertMessage={"Listing of skins failed due to unexpected error."}
                    >
                        <SkinList key={"SkinList"}/>
                    </ListDataLoader>
                </Grid2>
            </Grid2>

        </div>
    )
}

export default SkinOverview