import styled from "styled-components";

export const TableHeader = styled.thead`
`
export const TableCell = styled.td`
`
export const TableContainer = styled.table`
    width: 100%;
    border-collapse: collapse;

    ${TableHeader, TableCell}{
        padding: 1.5rem 1rem;
        text-align: left;
    }
`

export const TableBody = styled.tbody`
`
export const TableFooter = styled.tfoot``

export const TableRow = styled.tr`
    width: 100%;
    border-bottom: 1px solid #1a1a1a;
`





