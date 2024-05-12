import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(fat: number, carbs: number, protein: number) {
  return { fat, carbs, protein };
}

const rows = [
  createData(1.0, 24, 4.0),
  createData(2.0, 37, 4.3),
  createData(3.0, 24, 6.0),
  createData(4.7, 67, 4.3),
  createData(5.0, 49, 3.9),
  createData(6.0, 24, 4.0),
  createData(7.0, 37, 4.3),
  createData(8.0, 24, 6.0),
  createData(9.7, 67, 4.3),
  createData(10.0, 49, 3.9),
  createData(11.0, 24, 4.0),
  createData(12.0, 37, 4.3),
  createData(13.0, 24, 6.0),
  createData(14.7, 67, 4.3),
  createData(15.0, 49, 3.9),
  createData(16.0, 24, 4.0),
  createData(17.0, 37, 4.3),
  createData(18.0, 24, 6.0),
  createData(19.7, 67, 4.3),
  createData(20.0, 49, 3.9),
  createData(21.0, 24, 4.0),
  createData(22.0, 37, 4.3),
  createData(23.0, 24, 6.0),
  createData(24.7, 67, 4.3),
  createData(25.0, 49, 3.9),
];

export default function DenseTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 100 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.fat}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
