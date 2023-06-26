import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import tickIcon from "../../public/icons/icons8-tick-48.png";
import cancelIcon from "../../public/icons/icons8-cancel-48.png";
import Image from "next/image";

function createData(name, saving1, saving2, investing) {
  return { name, saving1, saving2, investing };
}
const imageStyle = {
  height: "18px",
  width: "18px",
  marginLeft: "10px",
};
const cellTextStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const rows = [
  createData("End amount ($)", "1,000,000.00", "1,000,000.00", "1,000,000.00"),
  createData("Starting amount ($)", "2,000.00", "2,000.00", "2,000.00"),
  createData(
    "Monthly contribution ($)",
    <p style={cellTextStyle}>
      200.00
      <Image src={tickIcon} alt="cance-icon" style={imageStyle} />
    </p>,
    <p style={cellTextStyle}>
      200.00
      <Image src={tickIcon} alt="cance-icon" style={imageStyle} />
    </p>,
    <p style={cellTextStyle}>
      200.00
      <Image src={tickIcon} alt="cance-icon" style={imageStyle} />
    </p>
  ),
  createData(
    "Yearly contribution ($)",
    <p style={cellTextStyle}>
      2,400.00
      <Image src={tickIcon} alt="cance-icon" style={imageStyle} />
    </p>,
    <p style={cellTextStyle}>
      2,400.00
      <Image src={cancelIcon} alt="cance-icon" style={imageStyle} />
    </p>,
    <p style={cellTextStyle}>
      2,400.00
      <Image src={tickIcon} alt="cance-icon" style={imageStyle} />
    </p>
  ),
  createData(
    "Duration (years)",
    <p style={cellTextStyle}>
      <b>417</b>
      <Image src={tickIcon} alt="cance-icon" style={imageStyle} />
    </p>,
    <p style={cellTextStyle}>
      <b>20</b>
      <Image src={cancelIcon} alt="cance-icon" style={imageStyle} />
    </p>,
    <p style={cellTextStyle}>
      <b>20</b>
      <Image src={tickIcon} alt="cance-icon" style={imageStyle} />
    </p>
  ),
  createData(
    "Horizon",
    <p style={cellTextStyle}>
      <b>Long term</b>
      <Image src={cancelIcon} alt="cance-icon" style={imageStyle} />
    </p>,
    <p style={cellTextStyle}>
      <b>Long term</b>
      <Image src={tickIcon} alt="cance-icon" style={imageStyle} />
    </p>,
    <p style={cellTextStyle}>
      <b>Long term</b>
      <Image src={tickIcon} alt="cance-icon" style={imageStyle} />
    </p>
  ),
];

function SavingLengthTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left" style={{ fontSize: "24px" }}>
              Accumulate Wealth
            </TableCell>
            <TableCell
              align="center"
              style={{ backgroundColor: "#cb6842", color: "#fff" }}
            >
              Saving
            </TableCell>
            <TableCell
              align="center"
              style={{ backgroundColor: "#407879", color: "#fff" }}
            >
              Saving
            </TableCell>
            <TableCell
              align="center"
              style={{ backgroundColor: "#ccbe8f", color: "#fff" }}
            >
              Investing
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.saving1}</TableCell>
              <TableCell align="center">{row.saving2}</TableCell>
              <TableCell align="center">{row.investing}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default SavingLengthTable;
