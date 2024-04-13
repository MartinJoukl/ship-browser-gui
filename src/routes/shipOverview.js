import ShipFilterMenu from "../visualComponents/shipFilterMenu";
import ListDataLoader from "../logicComponents/ListDataLoader";
import Grid2 from "@mui/material/Unstable_Grid2";
import {Card, CardContent} from "@mui/material";
import {useState} from "react";
import ShipList from "../visualComponents/shipList";
import Calls from "../logicComponents/calls";
import DataContext from "../context/dataContext";

function ShipOverview() {
    const [filters, setFilters] = useState();
    const [paging, setPaging] = useState({});

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

    function updatePaging(pageIndex, pageSize) {

    }

    return (<div className={"margined"}>
            <Grid2 container xs={true} direction="row" spacing={3} columns={60}>
                <Grid2>
                    <Card variant="outlined" style={{position: "sticky", top: "15px"}}>
                        <CardContent>
                            <ShipFilterMenu filterUpdateFunction={updateFilters}/>
                        </CardContent>
                    </Card>
                </Grid2>
                <Grid2 container xs={true} direction="row">
                    <ListDataLoader filters={{searchCriteria: filters}} paging={updatePaging} callDelay={1000}
                                    calledCall={Calls.listShips} ContextProvider={DataContext.Provider}>
                        <ShipList loadMoreFunction={updatePaging}/>
                    </ListDataLoader>
                </Grid2>
            </Grid2>
        </div>
    )
}

export default ShipOverview