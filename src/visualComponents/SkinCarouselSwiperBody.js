import SkinImagesLoader from "../logicComponents/SkinImagesLoader";
import SkinImageWithBackground from "./SkinImageWithBackground";
import SkinNameHeader from "./SkinNameHeader";

function SkinCarouselBody({skin}) {

    return (
        <div>
            <SkinImagesLoader id={skin.id}>
                <SkinNameHeader skin={skin}/>
                <SkinImageWithBackground skin={skin}/>
            </SkinImagesLoader>
        </div>
    )
}

export default SkinCarouselBody