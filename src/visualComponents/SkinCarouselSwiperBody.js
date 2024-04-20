import SkinImageWithBackground from "./SkinImageWithBackground";
import SkinNameHeader from "./SkinNameHeader";

function SkinCarouselBody({skin}) {

    return (
        <div>
            <SkinNameHeader skin={skin}/>
            <SkinImageWithBackground skin={skin} fullQualityPreview={true}/>
        </div>
    )
}

export default SkinCarouselBody