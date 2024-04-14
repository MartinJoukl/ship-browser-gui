import {useEffect, useLayoutEffect, useState} from "react";
import ImageContext from "../context/imageContext";

function ImageLoader({children, id, callFunction}) {
    const [data, setData] = useState(null);

    useEffect(() => {
        if (data !== null) {
            console.log("fired cleanup");
            URL.revokeObjectURL(data);
        }
        setData(null);
        let ignore = false;
        let toCleanUp;
        if (!ignore) {
            callFunction(id).then(result => {
                if (!ignore) {
                    const blob = URL.createObjectURL(result);
                    setData(blob);
                    toCleanUp = blob;
                }
            });
        }
        return () => {
            URL.revokeObjectURL(toCleanUp);
            ignore = true;
        };
    }, [id]);

    return (data == null ? <h1>Loading...</h1> :
            <ImageContext.Provider value={data}>
                {children}
            </ImageContext.Provider>
    );
}

export default ImageLoader