function TableCell({ content, component = 'td' }) {
    return (
        <>
            {component === 'th'
                ?
                <th>{content}</th>
                :
                <td>{content}</td>
            }
        </>
    );
}

export default TableCell;