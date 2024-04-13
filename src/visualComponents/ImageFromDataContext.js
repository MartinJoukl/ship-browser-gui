import {useContext} from "react";
import ImageContext from "../context/imageContext";

function ImageFromDataContext({alt, className}) {
    const image = useContext(ImageContext);
    return (<img src={image} className={className} alt={alt}/>)
}

export default ImageFromDataContext;