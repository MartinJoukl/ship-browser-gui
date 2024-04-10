import {Card, CardContent, Typography} from "@mui/material";

function ShipCard({entity}) {
    return <Card>
        <CardContent variant="outlined">
            <Typography gutterBottom variant="h5" component="div">
                entity.name
            </Typography>
        </CardContent>
    </Card>
}

export default ShipCard