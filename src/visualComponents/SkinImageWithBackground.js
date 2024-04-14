import ModalPopUp from "./ModalPopUp";
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import Calls from "../logicComponents/calls";
import {useState} from "react";

function SkinImageWithBackground({skin}) {
    const [open, setOpen] = useState(false);

    function toggleOpen(shouldOpen) {
        setOpen(() => {
            return shouldOpen;
        })
    }

    return (
        <>
            <div className="overlay">
                <img className="imageBack" src={Calls.getSkinBackgroundUrl(skin.id)}
                     alt={`Background of skin: ${skin.name}`}/>
                <img className="imageFore" src={Calls.getSkinImageUrl(skin.id)} alt={`Image of skin: ${skin.name}`}/>
                <ZoomInIcon onClick={() => {
                    toggleOpen(true)
                }
                } className={"zoomIcon"} style={{width: "40px", height: "40px"}}/>
            </div>
            <ModalPopUp open={open} title={skin.name} modalOpenFunction={toggleOpen} Body={
                <div className="overlay">
                    <img width={"10px"} className="imageBack" src={Calls.getSkinBackgroundUrl(skin.id)}
                         alt={`Background of skin: ${skin.name}`}/>
                    <img width={"10px"} className="imageFore" src={Calls.getSkinImageUrl(skin.id)}
                         alt={`Image of skin: ${skin.name}`}/>
                </div>
            }/>
        </>
    )
}

export default SkinImageWithBackground