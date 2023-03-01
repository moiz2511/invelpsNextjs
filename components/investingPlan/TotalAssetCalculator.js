import React, { useState, useEffect, memo } from "react";
import TableCalculator from "../TableCalculator";
import { uuid } from "uuidv4";

function TotalAssetCalculator({ setTotalAssets }) {
  const [fields, setFields] = useState([
    {
      id: uuid(),
      label: "Cash and Equivalent",
      tooltip: "cash on hand, checking, saving account",
      type: "input",
      value: "",
    },
    {
      id: uuid(),
      label: "Short Term Investment",
      tooltip: "Stock, T.bills, Funds, Life Insurance",
      type: "input",
      value: "",
    },
    {
      id: uuid(),
      label: "Other short term assets",
      tooltip: "Recoverable debt, Tax credit",
      type: "input",
      value: "",
    },
    {
      id: uuid(),
      label: "Total Short Term Assets",
      tooltip: "",
      type: "display",
      value: "",
      valueOf: [0, 1, 2],
    },
    {
      id: uuid(),
      label: "Property and Equipment",
      tooltip: "House, Flat, Cars",
      type: "input",
      value: "",
    },
    {
      id: uuid(),
      label: "Long Term Investment",
      tooltip: "Retirement plan, REIT, Tax incentive",
      type: "input",
      value: "",
    },
    {
      id: uuid(),
      label: "Other Long Term Assets",
      tooltip: "Art, Antiques, Wine",
      type: "input",
      value: "",
    },
    {
      id: uuid(),
      label: "Total Long Term  Assets",
      tooltip: "",
      type: "display",
      value: "",
      valueOf: [4, 5, 6],
    },
    {
      id: uuid(),
      label: "Total Assets",
      tooltip: "",
      type: "display",
      value: "",
      valueOf: [3, 7],
    },
  ]);

  useEffect(() => {
    setTotalAssets(fields[fields.length - 1].value);
  }, [fields]);

  const handleOnChange = (e) => {
    let newFields = fields.map((f) => {
      if (f.id === e.target.name) {
        f.value = e.target.value;
      }
      if (f.type === "display") {
        f.value = f.valueOf
          .map((l) => (fields[l].value ? parseInt(fields[l].value) : 0))
          .reduce((a, b) => a + b, 0);
      }
      return f;
    });
    setFields(newFields);
  };

  return (
    <div>
      <TableCalculator
        heading={"ASSETS"}
        fields={fields}
        handleFieldOnChange={handleOnChange}
      />
    </div>
  );
}

export default memo(TotalAssetCalculator);
