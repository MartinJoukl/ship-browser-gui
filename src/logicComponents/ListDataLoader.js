import {useEffect, useRef, useState} from "react";

function ListDataLoader({children, filters, paging, callDelay, calledCall, ContextProvider}) {
    const [data, setData] = useState(null);
    const searchTimer = useRef(null);
    const [initialLoadPerformed, setInitialLoadPerformed] = useState(false);

    useEffect(() => {

        function callApi() {
            setData(null);
            const dtoIn = filters;

            let ignore = false;
            if (!ignore) {
                calledCall(dtoIn, paging).then(result => {
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
            <ContextProvider value={data}>
                {children}
            </ContextProvider>
    );
}

export default ListDataLoader