import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const CustomTable = ({ primary, columns, rows }) => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: primary ? "white" : "var(--primary-orange)",
      color: primary ? "var(--primary-orange)" : theme.palette.common.white,
      fontWeight: primary ? "700" : "500",
      // padding: "10px",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      // backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const StyledTableHead = styled(TableHead)(({ theme }) => ({
    [`.MuiTableHead-root`]: {
      backgroundColor: "var(--primary-orange)",
    },
  }));

  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table" stickyHeader>
        <StyledTableHead sx={{ background: "var(--primary-tan)" }}>
          <TableRow>
            {columns.map((col, i) => (
              <StyledTableCell key={i}>{col}</StyledTableCell>
            ))}
          </TableRow>
        </StyledTableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={index}>
              {Object.keys(row).map((key, i) => (
                <StyledTableCell key={i}>{row[key]}</StyledTableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
