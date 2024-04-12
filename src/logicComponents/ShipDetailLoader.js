import DataContext from "../context/dataContext";
import {useEffect, useRef, useState} from "react";
import Calls from "./calls";
import ShipImageContext from "../context/shipImageContext";

function ShipDetailLoader({children, id}) {
    const [data, setData] = useState(null);

    useEffect(() => {
        setData(null);
        let ignore = false;
        if (!ignore) {
            Calls.getShip(id).then(result => {
                if (!ignore) {
                    setData(result);
                }
            });
        }
        return () => {
            ignore = true;
        };
    }, [id]);

    console.log(data);
    return (data == null ? <h1>Loading...</h1> :
            <DataContext.Provider value={data}>
                {children}
            </DataContext.Provider>
    );
}

export default ShipDetailLoader