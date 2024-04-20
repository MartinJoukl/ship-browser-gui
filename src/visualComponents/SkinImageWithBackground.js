import ModalPopUp from "./ModalPopUp";
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import Calls from "../calls";
import {useState} from "react";
import {ImageListItemBar} from "@mui/material";

function SkinImageWithBackground({skin, fullQualityPreview, itemBar}) {
    const [open, setOpen] = useState(false);

    function toggleOpen(shouldOpen) {
        setOpen(() => {
            return shouldOpen;
        })
    }

    const previewForeSrc = fullQualityPreview ? Calls.getSkinBackgroundUrl(skin.id) : Calls.getSkinBackgroundUrlPreview(skin.id);
    const previewBackSrc = fullQualityPreview ? Calls.getSkinImageUrl(skin.id) : Calls.getSkinImageUrlPreview(skin.id);
    let zoomMenu;
    if (itemBar) {
        zoomMenu = (<ImageListItemBar
            title={skin.name}
            subtitle={`Ship name: ${skin.ship.name}`}
            actionIcon={
                <ZoomInIcon onClick={() => {
                    toggleOpen(true)
                }
                } className={"labelZoomIcon"} style={{width: "30px", height: "30px"}}/>
            }
        />);
    } else {
        zoomMenu = (<ZoomInIcon onClick={() => {
            toggleOpen(true)
        }
        } className={"zoomIcon"} style={{width: "40px", height: "40px"}}/>);
    }

    return (
        <>
            <div className="overlay">
                <img className="imageBack" src={previewForeSrc}
                     alt={`Background of skin: ${skin.name}`}/>
                <img className="imageFore" src={previewBackSrc} alt={`Image of skin: ${skin.name}`}/>
                {zoomMenu}
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