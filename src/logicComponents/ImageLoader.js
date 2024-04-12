import DataContext from "../context/dataContext";
import {useEffect, useRef, useState} from "react";
import Calls from "./calls";
import ShipImageContext from "../context/shipImageContext";

function ShipImageLoader({children, id}) {
    const [data, setData] = useState(null);

    useEffect(() => {
        setData(null);
        let ignore = false;
        if (!ignore) {
            Calls.getShipImage(id).then(result => {
                if (!ignore) {
                    setData(result);
                }
            });
        }
        return () => {
            ignore = true;
        };
    }, [id]);

    return (data == null ? <h1>Loading...</h1> :
            <ShipImageContext.Provider value={data}>
                {children}
            </ShipImageContext.Provider>
    );
}

export default ShipImageLoader