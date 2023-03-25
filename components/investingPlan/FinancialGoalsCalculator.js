import { Button, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CustomButton from "../Button";
import PieChart from "../PieChart";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import BarChart from "../BarChart";
var duration = require("dayjs/plugin/duration");
dayjs.extend(duration);

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
  const [showChart, setShowChart] = useState(false);
  return (
    <div style={{ padding: "30px 0" }}>
      {/* {console.log(
        "ammar",
        values.when,
        new Date(),
        dayjs.duration(dayjs(values.when).diff(new Date()))
      )} */}
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
          <DatePicker
            onChange={(e) => setValues((prv) => ({ ...prv, when: e.$d }))}
            // value={values.when}
            sx={{
              width: "300px",
            }}
          />
        </LocalizationProvider>

        <TextField
          value={`${
            dayjs.duration(dayjs(values.when).diff(new Date())).$d.years
          } year ${
            dayjs.duration(dayjs(values.when).diff(new Date())).$d.days
          } days `}
          disabled={true}
          sx={{
            width: "150px",
            marginLeft: "20px",
          }}
        />
      </div>
      <div style={containerStyle}>
        <p style={textStyle}>Have you saved anything yet ? If no enter 0</p>
        <TextField
          value={values.saving}
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
          onClick={() => {
            setValues({
              need: "",
              when: new Date(),
              saving: "",
            });
            setShowChart(false);
          }}
        >
          Cancel
        </Button>
        <CustomButton
          onClick={() => {
            if (values.need.length > 0 && values.saving.length > 0) {
              setShowChart(true);
            }
          }}
        >
          View Results
        </CustomButton>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <div style={{ width: "800px" }}>
          {showChart && values.need && values.saving && (
            // <PieChart
            //   data={{
            //     labels: ["What you have", "What you need", "Current gap"],
            //     datasets: [
            //       {
            //         label: "",
            //         data: [
            //           values.saving,
            //           values.need,
            //           values.need - values.saving,
            //         ],
            //         backgroundColor: ["#ccbf90", "#407879", "#cb6843"],
            //         hoverOffset: 4,
            //       },
            //     ],
            //   }}
            // />

            <BarChart
              options={{
                plugins: {},
                responsive: true,
                indexAxis: "y",
                scales: {
                  x: {
                    stacked: true,
                  },
                  y: {
                    stacked: true,
                  },
                },
              }}
              //           values.saving,
              //           values.need,
              //           values.need - values.saving,
              data={{
                labels: [""],
                datasets: [
                  {
                    label: "What you have",
                    data: [values.saving],
                    backgroundColor: "#ccbf90",
                  },
                  {
                    label: "Current gap",
                    data: [values.need - values.saving],
                    backgroundColor: "#cb6843",
                  },
                ],
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default FinancialGoalsCalculator;
