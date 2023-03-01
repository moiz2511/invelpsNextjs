import React, { useState, useEffect, memo } from "react";
import TableCalculator from "../TableCalculator";
import { uuid } from "uuidv4";

function TotalAssetCalculator({ setTotalLiabilities }) {
  const [fields, setFields] = useState([
    {
      id: uuid(),
      label: "Payable invoices",
      tooltip: "Bills",
      type: "input",
      value: "",
    },
    {
      id: uuid(),
      label: "Short Term Debt",
      tooltip: "Credit card, Consumer loan",
      type: "input",
      value: "",
    },
    {
      id: uuid(),
      label: "Other Short Term Liabilities",
      tooltip: "Income tax, Property tax",
      type: "input",
      value: "",
    },
    {
      id: uuid(),
      label: "Total Short Term Liabilities",
      tooltip: "",
      type: "display",
      value: "",
      valueOf: [0, 1, 2],
    },
    {
      id: uuid(),
      label: "Long Term Liabilities",
      tooltip: "Car lease, other Leasing",
      type: "input",
      value: "",
    },
    {
      id: uuid(),
      label: "Long Term Debt",
      tooltip: "Property Loan, Mortgage",
      type: "input",
      value: "",
    },
    {
      id: uuid(),
      label: "Other Long Term Liabilities",
      tooltip: "Deferred Payable Taxes",
      type: "input",
      value: "",
    },
    {
      id: uuid(),
      label: "Total Long Term  Liabilities",
      tooltip: "",
      type: "display",
      value: "",
      valueOf: [4, 5, 6],
    },
    {
      id: uuid(),
      label: "Total Liabilities",
      tooltip: "",
      type: "display",
      value: "",
      valueOf: [3, 7],
    },
  ]);

  useEffect(() => {
    setTotalLiabilities(fields[fields.length - 1].value);
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
        heading={"LIABILITIES"}
        fields={fields}
        handleFieldOnChange={handleOnChange}
      />
    </div>
  );
}

export default memo(TotalAssetCalculator);
