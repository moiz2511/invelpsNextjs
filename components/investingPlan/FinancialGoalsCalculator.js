import { Button, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CustomButton from "../Button";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  marginTop: "20px",
};
const textStyle = {
  fontSize: "18px",
  marginRight: "20px",
};
function FinancialGoalsCalculator() {
  const [values, setValues] = useState({
    need: "",
    when: new Date(),
    saving: "",
  });
  return (
    <div style={{ padding: "30px 0" }}>
      <div style={containerStyle}>
        <p style={textStyle}>How much will you need ?</p>
        <TextField
          value={values.need}
          sx={{
            width: "300px",
          }}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          type="number"
          onChange={(e) =>
            setValues((prv) => ({ ...prv, need: `${e.target.value}` }))
          }
        />
      </div>
      <div style={containerStyle}>
        <p style={textStyle}>When will you need the money ?</p>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            onChange={(e) => setValues((prv) => ({ ...prv, when: e.$d }))}
            // value={values.when}
            sx={{
              width: "300px",
            }}
          />
        </LocalizationProvider>
      </div>
      <div style={containerStyle}>
        <p style={textStyle}>Have you saved anything yet ? If no enter 0</p>
        <TextField
          value={values.need}
          sx={{
            width: "300px",
          }}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          type="number"
          onChange={(e) =>
            setValues((prv) => ({ ...prv, saving: `${e.target.value}` }))
          }
        />
      </div>
      <div style={{ marginTop: "30px" }}>
        <Button
          style={{
            backgroundColor: "white !important",
            color: "var(--primary-blue) !important",
            fontSize: "700 !important",
            marginRight: "20px",
          }}
        >
          Cancel
        </Button>
        <CustomButton>View Results</CustomButton>
      </div>
    </div>
  );
}

export default FinancialGoalsCalculator;
