import {Card, CardContent, Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import ImageLoader from "../logicComponents/ImageLoader";
import ImageFromDataContext from "./ImageFromDataContext";
import Calls from "../logicComponents/calls";

function SkillsCard({skills}) {
    function createData(name, image, description) {
        return {name, image, description};
    }

    console.log(skills);
    const rows = [];
    for (const skill of skills) {
        rows.push(createData(skill.name,
            <ImageLoader id={skill.id} callFunction={Calls.getSkillImage} key={skill.id}>
                <ImageFromDataContext alt={skill.name} className={"inlineImage"}/>
            </ImageLoader>
            , skill.description));
    }

    return (
        <Card>
            <CardContent>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="left">Image</TableCell>
                            <TableCell align="left">Description</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell component="th" scope="row" align="left" style={{"fontWeight": "bold"}} d>
                                    {row.name}
                                </TableCell>
                                <TableCell align="left">{row.image}</TableCell>
                                <TableCell align="left">{row.description}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}

export default SkillsCard