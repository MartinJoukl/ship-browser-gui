import DataContext from "../context/dataContext";
import {useState} from "react";
import Calls from "./calls";

function ListDataLoader({children}) {
    const [data, setData] = useState(null);
    Calls.listShips({}).then((data) => {
            setData(data);
        }
    );

    return (data == null ? <h1>Loading</h1> :
            <DataContext.Provider value={data}>
                {children}
            </DataContext.Provider>
    );
}
export default ListDataLoader