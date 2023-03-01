import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { formatNumber } from "@/helpers/index";
import Collapse from "@mui/material/Collapse";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "var(--primary-orange)",
    color: theme.palette.common.white,
    padding: "10px",
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

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Cupcake", 305, 3.7, 67, 4.3),
//   createData("Gingerbread", 356, 16.0, 49, 3.9),
// ];

export default function DataTable({ columns, rows }) {
  return (
    <Accordion>
      <AccordionSummary
        aria-controls="panel1a-content"
        id="panel1a-header"
        style={{ padding: 0 }}
      >
        <StyledTableHead
          sx={{
            background: "var(--primary-orange)",
            width: "100%",
          }}
        >
          <TableRow style={{ width: "100%" }}>
            {columns.map((col, i) => (
              <StyledTableCell
                key={i}
                style={{
                  width: i === 0 ? "135px" : i >= 2 ? "200px" : "190px",
                  // padding: "10px 0",
                  // textAlign: "center",
                  // border: "1px solid red",
                }}
              >
                {col}
              </StyledTableCell>
            ))}
          </TableRow>
        </StyledTableHead>
      </AccordionSummary>
      <AccordionDetails style={{ padding: 0 }}>
        <TableContainer component={Paper} style={{ maxHeight: 750 }}>
          <Table aria-label="customized table" stickyHeader>
            {/* <StyledTableHead sx={{ background: "var(--primary-tan)" }}>
              <TableRow>
                {columns.map((col, i) => (
                  <StyledTableCell key={i}>{col}</StyledTableCell>
                ))}
              </TableRow>
            </StyledTableHead> */}
            <TableBody>
              {rows.map((row, index) => (
                <StyledTableRow key={index}>
                  {Object.keys(row).map((key, i) =>
                    key === "yearNo" ? (
                      <StyledTableCell
                        key={i}
                        style={{
                          width: "110px",
                          padding: "16px 0",
                          paddingLeft: i == 0 ? "10px" : "0px",
                          // textAlign: "center",
                          // border: "1px solid green",
                        }}
                      >
                        {`${row["yearNo"]}, ${row["month"]}`}
                      </StyledTableCell>
                    ) : key === "month" ? (
                      ""
                    ) : (
                      <StyledTableCell
                        key={i}
                        style={{
                          width: "150px",
                          padding: "16px 0",
                          paddingLeft: i < 4 ? "5px" : "10px",
                          // textAlign: "start",
                          // border: "1px solid red",
                        }}
                      >
                        {formatNumber(row[key])}
                      </StyledTableCell>
                    )
                  )}
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </AccordionDetails>
    </Accordion>
  );
}
