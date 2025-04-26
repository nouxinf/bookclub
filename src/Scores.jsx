import React, { useState } from 'react';

const Scores = () => {
    const [columns, setColumns] = useState([]);
    const [newColumnName, setNewColumnName] = useState('');
    const [rows, setRows] = useState([{}]);
    const addColumn = () => {
        if (newColumnName.trim() !== '') {
            setColumns([...columns, newColumnName]);
            setNewColumnName('');
        }
    };

    const addRow = () => {
        setRows([...rows, {}]);
    };

    const handleCellChange = (rowIndex, columnKey, value) => {
        const updatedRows = rows.map((row, index) => {
            if (index === rowIndex) {
                return { ...row, [columnKey]: value };
            }
            return row;
        });
        setRows(updatedRows);
    };

    const calculateColumnSums = () => {
        const sums = columns.map((column) => {
            return rows.reduce((sum, row) => sum + (parseFloat(row[column]) || 0), 0);
        });
        return sums;
    };

    const getSortedPlayers = () => {
        return rows
            .filter((row) => row['Name']) // Ensure only rows with a 'Name' are included
            .map((row) => {
                const totalScore = parseFloat(row['Total']) || 0; // Use the 'Total' column for scores
                return { name: row['Name'], totalScore };
            })
            .sort((a, b) => b.totalScore - a.totalScore);
    };

    return (
        <div>
            <h1>Scoreboard</h1>
            <div>
                <input
                    type="text"
                    placeholder="Enter column name"
                    value={newColumnName}
                    onChange={(e) => setNewColumnName(e.target.value)}
                />
                <button onClick={addColumn}>Add Column</button>
            </div>
            <table border="1" style={{ marginTop: '20px', width: '100%', tableLayout: 'fixed' }}>
                <thead>
                    <tr>
                        {columns.map((column, index) => (
                            <th key={index}>{column}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {columns.map((column, columnIndex) => (
                                <td key={columnIndex}>
                                    <input
                                        type="text"
                                        value={row[column] || ''}
                                        onChange={(e) => handleCellChange(rowIndex, column, e.target.value)}
                                        style={{ width: '100%' }}
                                    />
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        {columns.map((column, columnIndex) => (
                            <td key={columnIndex} style={{ fontWeight: 'bold', fontSize: 50 }}>
                                {calculateColumnSums()[columnIndex]}
                            </td>
                        ))}
                    </tr>
                </tfoot>
            </table>
            <button onClick={addRow} style={{ marginTop: '10px' }}>Add Row</button>
        </div>
    );
};

export default Scores;