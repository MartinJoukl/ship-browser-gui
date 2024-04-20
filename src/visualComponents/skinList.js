import {useContext} from "react";
import DataContext from "../context/dataContext";
import Grid2 from "@mui/material/Unstable_Grid2";
import {Button, ImageList, ImageListItem, ImageListItemBar, useMediaQuery, useTheme} from "@mui/material";
import SkinPreviewCard from "./SkinPreviewCard";

function SkinList() {
    const context = useContext(DataContext);
    const theme = useTheme();
    const skins = context.data.itemList;
    const pageInfo = context.pageInfo;
    const loadInProgress = context.loadInProgress;
    const loadMoreFunction = context.loadMore;
    const xl = useMediaQuery(theme.breakpoints.down('xl'));
    const lg = useMediaQuery(theme.breakpoints.down('lg'));
    const sm = useMediaQuery(theme.breakpoints.down('sm'));

    let columnsCount = 4;
    if (sm) {
        columnsCount = 1;
    } else if (lg) {
        columnsCount = 2;
    } else if (xl) {
        columnsCount = 3;
    }

    const skinListItem = [];
    if (Array.isArray(skins)) {
        for (const skin of skins) {
            skinListItem.push(
                <ImageListItem key={skin.id}>
                    <SkinPreviewCard skin={skin}/>
                </ImageListItem>
            )
        }
    }
    if (skins.length === 0) {
        return <h1>No skins found by given criteria.</h1>;
    }
    const imageList = <ImageList cols={columnsCount}>
        {skinListItem}
    </ImageList>
    if ((pageInfo.pageIndex + 1) * pageInfo.pageSize < pageInfo.total) {
        return (
            <Grid2 className="centerAlign" container direction="column" spacing={3} style={{alignItems: "center"}}>
                {imageList}
                <Grid2>
                    <Button disabled={loadInProgress} onClick={() => {
                        loadMoreFunction()
                    }} size="large" variant="contained">Show more</Button>
                </Grid2>
            </Grid2>
        );
    } else {
        return (
            <Grid2 className="centerAlign" container direction="column" spacing={3} style={{alignItems: "center"}}>
                {imageList}
            </Grid2>
        );
    }
}

export default SkinList