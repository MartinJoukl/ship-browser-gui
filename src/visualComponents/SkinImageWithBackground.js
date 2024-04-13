import {useContext, useState} from "react";
import SkinWithImagesContext from "../context/skinWithImageContext";
import ModalPopUp from "./ModalPopUp";
import ZoomInIcon from '@mui/icons-material/ZoomIn';

function SkinImageWithBackground({skin}) {
    const {image, background} = useContext(SkinWithImagesContext);
    const [open, setOpen] = useState(false);

    function toggleOpen(shouldOpen) {
        setOpen(() => {
            return shouldOpen;
        })
    }

    return (
        <>
            <div className="overlay">
                <img className="imageBack" src={background} alt={`Background of skin: ${skin.name}`}/>
                <img className="imageFore" src={image} alt={`Image of skin: ${skin.name}`}/>
                <ZoomInIcon onClick={() => {
                    toggleOpen(true)
                }
                } className={"zoomIcon"} style={{width: "40px", height: "40px"}}/>
            </div>
            <ModalPopUp open={open} title={skin.name} modalOpenFunction={toggleOpen} Body={
                <div className="overlay">
                    <img width={"10px"} className="imageBack" src={background}
                         alt={`Background of skin: ${skin.name}`}/>
                    <img width={"10px"} className="imageFore" src={image} alt={`Image of skin: ${skin.name}`}/>
                </div>
            }/>
        </>
    )
}

export default SkinImageWithBackground