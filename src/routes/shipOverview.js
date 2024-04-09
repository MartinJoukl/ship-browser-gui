import LeftFilterMenu from "../visualComponents/leftFilterMenu";
import ShipFilteringContext from "../context/shipFilteringContext";
import ListDataLoader from "../logicComponents/ListDataLoader";

function ShipOverview() {
    return (<ShipFilteringContext.Provider value={{filters: {}}}>
        <LeftFilterMenu/>
        <ListDataLoader>
            <div></div>
        </ListDataLoader>
    </ShipFilteringContext.Provider>)
}

export default ShipOverview