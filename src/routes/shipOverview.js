import ShipFilterMenu from "../visualComponents/shipFilterMenu";
import ShipFilteringContext from "../context/shipFilteringContext";
import ListDataLoader from "../logicComponents/ListDataLoader";
import Grid2 from "@mui/material/Unstable_Grid2";
import {Card, CardContent, CardHeader, Container, Typography} from "@mui/material";
import {useState} from "react";
import ShipList from "../visualComponents/shipList";

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

    return (

        <Grid2 container xs={"auto"} direction="row">
            <Grid2 item>
                <Card variant="outlined" className={"margined"}>
                    <CardContent>
                        <ShipFilterMenu filterUpdateFunction={updateFilters}/>
                    </CardContent>
                </Card>
            </Grid2>
            <Grid2 item xs={"auto"} direction="row" className={"margined"}>
                <ListDataLoader filters={filters} paging={updatePaging} callDelay={1000}>
                    <ShipList loadMoreFunction={updatePaging}/>
                </ListDataLoader>
            </Grid2>
        </Grid2>

    )
}

export default ShipOverview