import {
  Button,
  Checkbox,
  InputAdornment,
  MenuItem,
  TextField,
} from "@mui/material";
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

const calculateForcastedAnnualReturnRate = (years) => {
  const t =
    Math.pow(
      1.0 *
        1.0 *
        1.0 *
        1.0 *
        1.0 *
        1.0 *
        1.0 *
        1.0 *
        1.0 *
        1.0227 *
        1.0268 *
        1.0339 *
        1.0323 *
        1.0285 *
        1.0384 *
        0.9964 *
        1.0164 *
        1.0316 *
        1.0207 *
        1.0146 *
        1.0162 *
        1.0012 *
        1.0126 *
        1.0213 *
        1.0244 *
        1.0181 *
        1.0123 *
        1.047 *
        1.08 *
        1.0272,
      1 / years
    ) - 1;

  return t.toFixed(2);
};
const containerStyle = {
  display: "flex",
  alignItems: "center",
  marginTop: "20px",
};
const textStyle = {
  fontSize: "18px",
  marginRight: "20px",
};
const defaultValues = {
  adjustedForInflation: false,
  adjustedForInflationValue: "",
  forcastedAnnualReturnRate: "",
  goal: "",
  need: 0,
  needMonthy: 0,
  monthlyLongIncome: new Date(),
  when: null,
  saving: 0,
  currentGap: "",
};
function FinancialGoalsCalculator({ scrollRef }) {
  const [values, setValues] = useState(defaultValues);
  const [showChart, setShowChart] = useState(false);

  const getNeedForRegularIncome = () => {
    if (values.monthlyLongIncome && values.needMonthy) {
      return 12 * values.needMonthy * values.monthlyLongIncome;
    }
  };
  return (
    <div style={{ padding: "30px 0" }}>
      {/* {console.log(
        "ammar",
        values.when,
        new Date(),
        dayjs.duration(dayjs(values.when).diff(new Date()))
      )} */}
      <div style={containerStyle}>
        <p style={textStyle}>What is your investment goal ?</p>
        <TextField
          name={`investment-goal`}
          select
          size="large"
          value={values.goal}
          onChange={(e) => {
            setValues((prv) => ({ ...defaultValues, goal: e.target.value }));
            setShowChart(false);
          }}
          style={{ width: "300px", padding: "0px" }}
        >
          {[
            { key: "accumulate-wealth", value: "Accumulate wealth" },
            { key: "regular-income", value: "Regular income" },
            { key: "build-wealth", value: "Build wealth" },
          ].map((option) => (
            <MenuItem key={option.key} value={option.key}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
      </div>
      {values.goal === "regular-income" && (
        <div style={containerStyle}>
          <p style={textStyle}>How much will you need monthly ?</p>
          <TextField
            value={values.needMonthy}
            sx={{
              width: "300px",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
            type="number"
            onChange={(e) =>
              setValues((prv) => ({ ...prv, needMonthy: e.target.value }))
            }
          />
        </div>
      )}
      {values.goal === "regular-income" && (
        <div style={containerStyle}>
          <p style={textStyle}>How long will you need monthly income</p>
          {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              onChange={(e) =>
                setValues((prv) => ({ ...prv, monthlyLongIncome: e.$d }))
              }
              // value={values.when}
              sx={{
                width: "300px",
              }}
            />
          </LocalizationProvider>

          <TextField
            value={`${
              dayjs.duration(dayjs(values.monthlyLongIncome).diff(new Date()))
                .$d.years
            } year ${
              dayjs.duration(dayjs(values.monthlyLongIncome).diff(new Date()))
                .$d.days
            } days `}
            disabled={true}
            sx={{
              width: "150px",
              marginLeft: "20px",
            }}
          /> */}

          <TextField
            value={values.monthlyLongIncome}
            onChange={(e) =>
              setValues((prv) => ({
                ...prv,
                monthlyLongIncome: e.target.value,
              }))
            }
            type="number"
            disabled={false}
            sx={{
              width: "150px",
              marginLeft: "20px",
            }}
          />
        </div>
      )}
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ ...containerStyle, marginRight: "20px" }}>
          <p style={textStyle}>How much will you need ?</p>
          <TextField
            value={
              values.goal === "regular-income"
                ? getNeedForRegularIncome()
                : values.need
            }
            sx={{
              width: "300px",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
            type="number"
            disabled={values.goal === "regular-income"}
            onChange={(e) =>
              setValues((prv) => ({ ...prv, need: `${e.target.value}` }))
            }
          />
        </div>
        <div style={containerStyle}>
          <p style={textStyle}>Adjust for inflation?</p>
          <Checkbox
            checked={values.adjustedForInflation}
            onChange={(e) =>
              setValues((prv) => ({
                ...prv,
                adjustedForInflation: !prv.adjustedForInflation,
              }))
            }
          />
          {values.adjustedForInflation && (
            <TextField
              value={values.adjustedForInflationValue}
              sx={{
                width: "300px",
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
              type="number"
              onChange={(e) =>
                setValues((prv) => ({
                  ...prv,
                  adjustedForInflationValue: `${e.target.value}`,
                }))
              }
            />
          )}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ ...containerStyle, marginRight: "20px" }}>
          <p style={textStyle}>When will you need the money ?</p>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              onChange={(e) => setValues((prv) => ({ ...prv, when: e.$d }))}
              // value={values.when}
              sx={{
                width: "150px",
              }}
            />
          </LocalizationProvider>

          {/* <TextField
            value={values.when}
            onChange={(e) =>
              setValues((prv) => ({ ...prv, when: e.target.value }))
            }
            type="number"
            disabled={false}
            sx={{
              width: "150px",
              marginLeft: "20px",
            }}
          /> */}
        </div>
        <div style={containerStyle}>
          <p style={textStyle}>Forecasted annualized Inflation rate</p>
          <TextField
            value={calculateForcastedAnnualReturnRate(
              dayjs.duration(dayjs(values.when).diff(new Date())).$d.years
            )}
            disabled={true}
            type="number"
            sx={{
              width: "150px",
              marginLeft: "20px",
            }}
            onChange={(e) =>
              setValues((prv) => ({
                ...prv,
                forcastedAnnualReturnRate: `${e.target.value}`,
              }))
            }
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ ...containerStyle, marginRight: "20px" }}>
          <p style={textStyle}>Have you saved anything yet ? If no enter 0</p>
          <TextField
            value={values.saving}
            sx={{
              width: "300px",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
            type="number"
            onChange={(e) =>
              setValues((prv) => ({ ...prv, saving: `${e.target.value}` }))
            }
          />
        </div>
        <div style={containerStyle}>
          <p style={textStyle}>Current Gap</p>
          <TextField
            value={
              values.goal === "regular-income"
                ? values.saving - getNeedForRegularIncome()
                : values.saving - values.need
            }
            sx={{
              width: "150px",
            }}
            disabledt={true}
            type="number"
            onChange={(e) =>
              setValues((prv) => ({ ...prv, currentGap: `${e.target.value}` }))
            }
          />
        </div>
      </div>
      <div style={{ marginTop: "30px" }}>
        <Button
          style={{
            backgroundColor: "white !important",
            color: "var(--primary-blue) !important",
            fontSize: "700 !important",
            marginRight: "20px",
            textTransform: "capitalize",
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
          onClick={() => {}}
          style={{
            marginRight: "20px",
          }}
        >
          Save
        </CustomButton>
        <CustomButton
          onClick={() => {
            if (
              values.goal === "regular-income"
                ? getNeedForRegularIncome() && values.saving.length > 0
                : values.need.length > 0 && values.saving.length > 0
            ) {
              setShowChart(true);
              scrollRef.current.scrollIntoView({ behavior: "smooth" });
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
          paddingTop: "80px",
        }}
        ref={scrollRef}
      >
        <div style={{ width: "800px" }}>
          {showChart && values.goal === "regular-income"
            ? getNeedForRegularIncome() &&
              values.saving.length > 0 && (
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
                        data: [values.saving - getNeedForRegularIncome()],
                        backgroundColor: "#cb6843",
                      },
                    ],
                  }}
                />
              )
            : showChart &&
              values.need.length > 0 &&
              values.saving.length > 0 && (
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
                        data: [values.saving - values.need],
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
