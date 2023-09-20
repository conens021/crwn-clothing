import {
    TableBody, TableCell,
    TableContainer, TableFooter,
    TableHeader, TableRow
} from './Table.styles';

function Table({ tableHeading = [], tableData = [], tableFooter = [], style = {} }) {

    const renderTableCells = (row) => {
        const data = []
        for (const key in row) {
            const cellData = row[key]
            const tableCell = <TableCell key={`${key} -${row.id} `} >{cellData}</TableCell>
            data.push(tableCell)
        }
        return data
    }

    return (
        <TableContainer style={style}>
            <TableHeader>
                <TableRow>
                    {tableHeading.map(item =>
                        <TableCell key={item.id} as='th'>
                            {item.title}
                        </TableCell>)}
                </TableRow>
            </TableHeader>
            <TableBody>
                {tableData.map(row => (
                    <TableRow key={row.id}>
                        {renderTableCells(row)}
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                {tableFooter.map(row => (
                    <TableRow key={row.id}>
                        {renderTableCells(row)}
                    </TableRow>
                ))}
            </TableFooter>
        </TableContainer>
    );
}

export default Table;