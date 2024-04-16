import ShipFilterMenu from "../visualComponents/shipFilterMenu";
import ListDataLoader from "../logicComponents/ListDataLoader";
import Grid2 from "@mui/material/Unstable_Grid2";
import {Card, CardContent} from "@mui/material";
import {useState} from "react";
import ShipList from "../visualComponents/shipList";
import Calls from "../calls";
import DataContext from "../context/dataContext";
import AlertSnackbar from "../visualComponents/AlertSnackbar";

function ShipOverview() {
    const [filters, setFilters] = useState({});

    function updateFilters(newFilterValue) {
        setFilters((prevState => {
            const newState = {...prevState, ...newFilterValue}
            for (const key in newState) {
                if (!newState[key]) {
                    delete newState[key];
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
                            <ShipFilterMenu filterUpdateFunction={updateFilters} filters={filters}/>
                        </CardContent>
                    </Card>
                </Grid2>
                <Grid2 xs={true} style={{marginRight: "10px"}} sx={{marginRight: {xs: "0px", sm: "10px", md: "10px"}}}>
                    <ListDataLoader filters={{searchCriteria: filters}} initialPaging={{pageIndex: 0, pageSize: 20}}
                                    callDelay={1000}
                                    calledCall={Calls.listShips} ContextProvider={DataContext.Provider}
                                    failAlertMessage={"Listing of ships failed due to unexpected error."}
                    >
                        <ShipList key={"ShipList"}/>
                    </ListDataLoader>
                </Grid2>
            </Grid2>

        </div>
    )
}

export default ShipOverview