import ShipDetailLoader from "../logicComponents/ShipDetailLoader";
import {useParams} from "react-router-dom";
import ShipDetailBody from "../visualComponents/ShipDetailBody";

function ShipDetails() {
    const {shipId} = useParams();
    return (
        <ShipDetailLoader id={shipId} failAlertMessage={"Loading of ship detail failed. If you got there by url, make sure the ship with given id exists."}>
            <ShipDetailBody></ShipDetailBody>
        </ShipDetailLoader>
    )
}

export default ShipDetails