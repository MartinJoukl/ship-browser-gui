import {useEffect, useRef, useState} from "react";

function ListDataLoader({children, filters, initialPaging, callDelay, calledCall, ContextProvider}) {
    const [data, setData] = useState(null);
    const [paging, setPaging] = useState(initialPaging || {});
    const searchTimer = useRef(null);
    const [loadMoreCalled, setLoadMoreCalled] = useState(false);
    const [loadInProgress, setLoadInProgress] = useState(false);

    function loadMore() {
        setLoadMoreCalled(() =>
            true
        );
        setPaging((currentPaging) => {
            return {...currentPaging, pageIndex: currentPaging.pageIndex + 1};
        });
    }

    useEffect(() => {
        function callApi(appendToExisting) {
            if (!appendToExisting) {
                setData(null);
            }
            setLoadInProgress(true);
            const dtoIn = filters;

            let ignore = false;
            if (!ignore) {
                calledCall(dtoIn, paging).then(result => {
                    if (!ignore) {
                        setLoadInProgress(() => false);
                        if (appendToExisting) {
                            setLoadMoreCalled(() => false);
                            result = {...result, itemList: [...(data.itemList), ...(result.itemList)]}
                        } else if (paging.pageInfo !== initialPaging.pageInfo || paging.pageSize !== initialPaging.pageSize) {
                            // something else than "more" was pressed, load new list
                            setPaging(initialPaging);
                        }
                        setData(result);
                    }
                });
            }
            return () => {
                ignore = true;
            };
        }

        if (data == null) {
            // Initial load
            callApi(false);
        } else {
            if (loadMoreCalled) {
                return callApi(true);
            } else {
                clearTimeout(searchTimer.current);
                searchTimer.current = setTimeout(() => {
                    return callApi(false);
                }, callDelay)
            }
        }
    }, [filters, paging, callDelay, calledCall]);

    return (data == null ? <h1>Loading...</h1> :
            <ContextProvider value={{data, pageInfo: data.pageInfo, loadMore, loadInProgress}}>
                {children}
            </ContextProvider>
    );
}

export default ListDataLoader