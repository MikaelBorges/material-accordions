import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

type RowType = {
  lat?: number;
  lng?: number;
  alt?: number;
  "2D (m)"?: number;
  "3D (m)"?: number;
};

type DenseTableProps = {
  tableHead: (keyof RowType)[];
  rows: RowType[];
};

export default function DenseTable({ rows, tableHead }: DenseTableProps) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 100 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            {tableHead.map((header) => (
              <TableCell key={header} align="right">
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={`${row}-${index}`}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {tableHead.map((header) => (
                <TableCell key={header} align="right">
                  {row[header]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
