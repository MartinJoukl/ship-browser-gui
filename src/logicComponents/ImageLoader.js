import {useEffect, useState} from "react";
import ImageContext from "../context/imageContext";

function ImageLoader({children, id, callFunction}) {
    const [data, setData] = useState(null);

    useEffect(() => {
        setData(null);
        let ignore = false;
        if (!ignore) {
            callFunction(id).then(result => {
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
            <ImageContext.Provider value={data}>
                {children}
            </ImageContext.Provider>
    );
}

export default ImageLoader