import {useEffect, useRef, useState} from "react";
import AlertSnackbar from "../visualComponents/AlertSnackbar";
import {Button} from "@mui/material";

function ListDataLoader({
                            children,
                            filters,
                            initialPaging,
                            callDelay,
                            calledCall,
                            ContextProvider,
                            failAlertMessage
                        }) {
    const [data, setData] = useState(null);
    const [paging, setPaging] = useState(initialPaging || {});
    const searchTimer = useRef(null);
    const [loadMoreCalled, setLoadMoreCalled] = useState(false);
    const [loadInProgress, setLoadInProgress] = useState(false);
    const [loadFailed, setLoadFailed] = useState(false);
    // Not rendered unless fail, so open
    const [failAlertOpen, setFailAlertOpen] = useState(true);

    function loadMore() {
        setLoadInProgress(true);
        setLoadMoreCalled(() =>
            true
        );
        setPaging((currentPaging) => {
            return {...currentPaging, pageIndex: currentPaging.pageIndex + 1};
        });
    }

    useEffect(() => {
        // Don't call again if load failed
        if (loadFailed) {
            return;
        }

        function callApi(loadingMore) {
            if (!loadingMore) {
                setData(null);
            }
            setLoadInProgress(true);
            const dtoIn = filters;

            if (!loadingMore && (paging.pageIndex !== initialPaging.pageIndex || paging.pageSize !== initialPaging.pageSize)) {
                // something else than "more" was pressed, load new list
                setPaging(() => initialPaging);
            }

            let ignore = false;
            if (!ignore) {
                calledCall(dtoIn, paging).then(result => {
                    if (!ignore) {
                        setLoadInProgress(() => false);
                        if (loadingMore) {
                            setLoadMoreCalled(() => false);
                            result = {...result, itemList: [...(data.itemList), ...(result.itemList)]}
                        }
                        setData(result);
                        setLoadFailed(false);
                    }
                }).catch((reason) => {
                    if (!ignore) {
                        if (loadingMore) {
                            setLoadMoreCalled(() => false);
                            setPaging((currentPaging) => {
                                return {...currentPaging, pageIndex: currentPaging.pageIndex - 1};
                            })
                        }
                        setFailAlertOpen(true);
                        setLoadFailed(true);
                        setLoadInProgress(false);
                        setLoadMoreCalled(false);
                        setData(null);
                    }
                });
            }
            return () => {
                ignore = true;
            };
        }

        if (data == null && !loadFailed) {
            // Initial load
            callApi(false);
        } else {
            setLoadInProgress(true);
            if (loadMoreCalled) {
                return callApi(true);
            } else {
                clearTimeout(searchTimer.current);
                searchTimer.current = setTimeout(() => {
                    return callApi(false);
                }, callDelay)
            }
        }
    }, [filters, paging, callDelay, calledCall, loadFailed]);

    if (loadFailed) {
        return (
            <>
                <Button disabled={loadInProgress} onClick={() => {
                    setLoadFailed(false)
                }} size="large" variant="contained">Reload</Button>
                <AlertSnackbar open={failAlertOpen} message={failAlertMessage} setOpen={setFailAlertOpen}/>
            </>
        );
    }
    return (data == null ? <h1>Loading...</h1> :
            <ContextProvider value={{data, pageInfo: data.pageInfo, loadMore, loadInProgress}}>
                {children}
            </ContextProvider>
    );
}

export default ListDataLoader