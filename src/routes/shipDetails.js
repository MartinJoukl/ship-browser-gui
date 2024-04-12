import ShipDetailLoader from "../logicComponents/ShipDetailLoader";
import {useParams} from "react-router-dom";
import ShipDetailBody from "../visualComponents/ShipDetailBody";

console.log("still same page");

function ShipDetails() {
    const {shipId} = useParams();
    return (
        <ShipDetailLoader id={shipId}>
            <ShipDetailBody></ShipDetailBody>
        </ShipDetailLoader>
    )
}

export default ShipDetails