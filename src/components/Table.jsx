import React from "react";

export const TableComponent = () => {
    const styles = {
        marginTop: '2em',
        marginLeft: '10em'
    }

    return (
        <table style={styles} className="table table-striped">
            <thead>
                <tr>
                    <th>A</th>
                    <th>B</th>
                    <th>C</th>
                    <th>D</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Columna a</td>
                    <td>Columna B</td>
                    <td>C</td>
                    <td>D</td>
                </tr>
                <tr>
                    <td>Columna 1</td>
                    <td>Columna 2</td>
                    <td>E</td>
                    <td>F</td>
                </tr>
                <tr>
                    <td>Columna a2</td>
                    <td>Columna B2</td>
                    <td>G</td>
                    <td>H</td>
                </tr>
            </tbody>
        </table>
    )
}

export default TableComponent
