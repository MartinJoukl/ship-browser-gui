import {Card, CardContent, Table, TableBody, TableCell, TableRow} from "@mui/material";
import {Link} from "react-router-dom";

function ShipDetailCard({entity}) {
    function createData(key, value) {
        return {key, value};
    }

    const rows = [
        createData('Name', entity.name),
        createData('Code', entity.code),
        createData('Class', entity.shipClass),
        createData('Nationality', entity.nationality),
        createData('Hull type', entity.hullType),
        createData('Rarity', entity.rarity),
        createData('Wiki url', <a target='_blank' rel='noopener noreferrer' href={entity.wikiUrl}>Link</a>),

    ];

    return (
        <Card>
            <CardContent>
                <Table aria-label="simple table">
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.key}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell component="th" scope="row" align="left" style={{"fontWeight": "bold"}} d>
                                    {row.key + ":"}
                                </TableCell>
                                <TableCell align="left">{row.value}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}

export default ShipDetailCard