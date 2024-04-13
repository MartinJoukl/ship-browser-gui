import DataContext from "../context/dataContext";
import {useEffect, useRef, useState} from "react";
import Calls from "./calls";
import ShipImageContext from "../context/shipImageContext";
import SkinWithImagesContext from "../context/skinWithImageContext";

function ShipSkinImagesLoader({children, id}) {
    const [image, setImage] = useState(null);
    const [background, setBackground] = useState(null);
    const [chibi, setChibi] = useState(null);
    useEffect(() => {
        setImage(null);
        let ignore = false;
        if (!ignore) {
            Calls.getSkinImage(id).then(result => {
                if (!ignore) {
                    setImage(result);
                }
            });
        }
        return () => {
            ignore = true;
        };
    }, [id]);

    useEffect(() => {
        setBackground(null);
        let ignore = false;
        if (!ignore) {
            Calls.getSkinBackground(id).then(result => {
                if (!ignore) {
                    setBackground(result);
                }
            });
        }
        return () => {
            ignore = true;
        };
    }, [id]);

    useEffect(() => {
        setChibi(null);
        let ignore = false;
        if (!ignore) {
            Calls.getSkinChibi(id).then(result => {
                if (!ignore) {
                    setChibi(result);
                }
            });
        }
        return () => {
            ignore = true;
        };
    }, [id]);

    return (image == null || background == null || chibi == null ? <h1>Loading...</h1> :
            <SkinWithImagesContext.Provider value={{image, background, chibi}}>
                {children}
            </SkinWithImagesContext.Provider>
    );
}

export default ShipSkinImagesLoader