import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import React from "react";
import { styled } from "@mui/material/styles";

function GroupedColumnsTable({
  primary = true,
  columns,
  rows,
  parentCols,
  style,
}) {
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
    <TableContainer sx={{ maxHeight: 440, ...style }} component={Paper}>
      <Table stickyHeader aria-label="customized table">
        <StyledTableHead>
          <StyledTableRow>
            {parentCols.map((p, key) => (
              <StyledTableCell align="center" colSpan={p.span} key={key}>
                {p.value}
              </StyledTableCell>
            ))}
          </StyledTableRow>
          <StyledTableRow>
            {columns.map((column) => (
              <StyledTableCell
                key={column.id}
                align={column.align}
                style={{ top: 57 }}
              >
                {column.label}
              </StyledTableCell>
            ))}
          </StyledTableRow>
        </StyledTableHead>
        <TableBody>
          {rows.map((row) => {
            return (
              <StyledTableRow
                hover
                role="checkbox"
                tabIndex={-1}
                key={row.code}
              >
                {columns.map((column) => {
                  const value = row[column.id];
                  return (
                    <StyledTableCell key={column.id} align={column.align}>
                      {column.format && typeof value === "number"
                        ? column.format(value)
                        : value}
                    </StyledTableCell>
                  );
                })}
              </StyledTableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default GroupedColumnsTable;
