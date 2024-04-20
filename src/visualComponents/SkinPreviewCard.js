import SkinImageWithBackground from "./SkinImageWithBackground";
import {ImageListItemBar} from "@mui/material";

function SkinPreviewCard({skin}) {
    return <div>
        <SkinImageWithBackground skin={skin} fullQualityPreview={false} itemBar={true}/>
    </div>
}

export default SkinPreviewCard