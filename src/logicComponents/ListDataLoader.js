import DataContext from "../context/dataContext";
import {useEffect, useRef, useState} from "react";
import Calls from "./calls";

function ListDataLoader({children, filters, paging, callDelay}) {
    const [data, setData] = useState(null);
    const searchTimer = useRef(null);
    const [initialLoadPerformed, setInitialLoadPerformed] = useState(false);

    useEffect(() => {

        function callApi() {
            setData(null);
            const dtoIn = {
                searchCriteria: {...filters}
            }
            let ignore = false;
            if (!ignore) {
                Calls.listShips(dtoIn).then(result => {
                    if (!ignore) {
                        setData(result);
                    }
                });
            }
            return () => {
                ignore = true;
            };
        }

        if (!initialLoadPerformed) {
            // Initial load
            callApi();
            setInitialLoadPerformed(true);
        } else {
            clearTimeout(searchTimer.current);

            searchTimer.current = setTimeout(() => {
                return callApi();
            }, callDelay)
        }
    }, [filters]);

    return (data == null ? <h1>Loading...</h1> :
            <DataContext.Provider value={data?.itemList}>
                {children}
            </DataContext.Provider>
    );
}

export default ListDataLoader