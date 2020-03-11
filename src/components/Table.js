import React from 'react';
import { render } from '@testing-library/react';


const TableHeader = () => {
  
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>URL</th>
                <th>Remove</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {
    // we use Array.map to create table rows from LinkData passed via props
   
    const rows = props.linkData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td><a href={row.URL}>{row.URL}</a></td>
                <td><button onClick={() => props.removeLink}>Delete</button></td>
                                    
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

const Table = (props) => {
    const { linkData, removeLink } = props;
    
    return(
        <table>

            <TableHeader />
            <TableBody linkData={linkData}  removeLink = {removeLink}/>

        </table>
    );
}



export default Table;