import React, { useState, useEffect, memo } from "react";
import TableCalculator from "../TableCalculator";
import { uuid } from "uuidv4";
import TableMultiCalculator from "../TableMultiCalculator";

function TotalAssetCalculator() {
  const [monthlyFields, setMonthlyFields] = useState([
    {
      id: uuid(),
      label: "Net income",
      tooltip: "before financial expenses",
      type: "input",
      value: "",
    },
    {
      id: uuid(),
      label: "Cash flow income from economic activities",
      tooltip: "",
      type: "display",
      valueOf: [0],
      subFrom: [],
    },
    {
      id: uuid(),
      label: "Investment",
      tooltip: "Stock, Deposits, Funds, Life insurance, Retirement plan",
      type: "input",
      value: "",
    },
    {
      id: uuid(),
      label: "Cash flow income from investing activities",
      tooltip: "",
      type: "display",
      valueOf: [2],
      subFrom: [],
    },
    {
      id: uuid(),
      label: "Free cash flow",
      tooltip: "",
      type: "display",
      valueOf: [3],
      subFrom: [1],
    },
    {
      id: uuid(),
      label: "Debt repayments",
      tooltip:
        "Interest, Annuity on Property Loans, Mortgage, Lease or other debt repayment",
      type: "input",
      value: "",
    },
    {
      id: uuid(),
      label: "Cash flow income from financing activities",
      tooltip: "",
      type: "display",
      valueOf: [5],
      subFrom: [],
    },
    {
      id: uuid(),
      label: "Net Cash flow",
      tooltip: "",
      type: "display",
      valueOf: [6],
      subFrom: [4],
    },
  ]);
  const [yearlyFields, setYearlyFields] = useState([
    {
      id: uuid(),
      // label: "Net income",
      // tooltip: "before financial expenses",
      type: "input",
      value: "",
    },
    {
      id: uuid(),
      // label: "Cash flow income from economic activities",
      // tooltip: "",
      type: "display",
      valueOf: [0],
      subFrom: [],
    },
    {
      id: uuid(),
      // label: "Investment",
      // tooltip: "Stock, Deposits, Funds, Life insurance, Retirement plan",
      type: "input",
      value: "",
    },
    {
      id: uuid(),
      // label: "Cash flow income from investing activities",
      // tooltip: "",
      type: "display",
      valueOf: [2],
      subFrom: [],
    },
    {
      id: uuid(),
      // label: "Free cash flow",
      // tooltip: "",
      type: "display",
      valueOf: [3],
      subFrom: [1],
    },
    {
      id: uuid(),
      // label: "Debt repayments",
      // tooltip:
      //   "Interest, Annuity on Property Loans, Mortgage, Lease or other debt repayment",
      type: "input",
      value: "",
    },
    {
      id: uuid(),
      // label: "Cash flow income from financing activities",
      // tooltip: "",
      type: "display",
      valueOf: [5],
      subFrom: [],
    },
    {
      id: uuid(),
      // label: "Net Cash flow",
      // tooltip: "",
      type: "display",
      valueOf: [6],
      subFrom: [4],
    },
  ]);

  useEffect(() => {
    // setTotalAssets(fields[fields.length - 1].value);
  }, [monthlyFields]);

  useEffect(() => {
    // setTotalAssets(fields[fields.length - 1].value);
  }, [yearlyFields]);

  const handleOnChange = (e) => {
    let newFields = monthlyFields.map((f) => {
      if (f.id === e.target.name) {
        f.value = e.target.value;
      }
      if (f.type === "display") {
        f.value = f.valueOf
          .map((l) =>
            monthlyFields[l].value ? parseInt(monthlyFields[l].value) : 0
          )
          .reduce((a, b) => a + b, 0);

        if (f.subFrom.length > 0) {
          f.value =
            f.subFrom
              .map((l) =>
                monthlyFields[l].value ? parseInt(monthlyFields[l].value) : 0
              )
              .reduce((a, b) => a + b, 0) - f.value;
        }
      }
      return f;
    });
    setMonthlyFields(newFields);
  };

  const handleYearlyOnChange = (e) => {
    let newFields = yearlyFields.map((f) => {
      if (f.id === e.target.name) {
        f.value = e.target.value;
      }
      if (f.type === "display") {
        f.value = f.valueOf
          .map((l) =>
            yearlyFields[l].value ? parseInt(yearlyFields[l].value) : 0
          )
          .reduce((a, b) => a + b, 0);

        if (f.subFrom.length > 0) {
          f.value =
            f.subFrom
              .map((l) =>
                yearlyFields[l].value ? parseInt(yearlyFields[l].value) : 0
              )
              .reduce((a, b) => a + b, 0) - f.value;
        }
      }
      return f;
    });
    setYearlyFields(newFields);
  };

  return (
    <div
      style={{
        marginTop: "20px",
        display: "grid",
        gridTemplateColumns: "1fr 0.4fr",
      }}
    >
      <TableMultiCalculator
        heading={"Item"}
        heading2={<span style={{ marginRight: "60px" }}>Monthly Amount</span>}
        fields={monthlyFields}
        valueSign={"$"}
        handleFieldOnChange={handleOnChange}
      />
      <TableMultiCalculator
        heading={"Yearly Amount"}
        fields={yearlyFields}
        valueSign={"$"}
        handleFieldOnChange={handleYearlyOnChange}
      />
    </div>
  );
}

export default memo(TotalAssetCalculator);
