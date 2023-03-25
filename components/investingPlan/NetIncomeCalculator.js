import React, { useState, useEffect, memo } from "react";
import TableCalculator from "../TableCalculator";
import { uuid } from "uuidv4";
import TableMultiCalculator from "../TableMultiCalculator";

function TotalAssetCalculator({ setMonthlyNetincome, setYearlyNetincome }) {
  const [monthlyFields, setMonthlyFields] = useState([
    {
      //0
      id: uuid(),
      label: "Salary",
      //   tooltip: "cash on hand, checking, saving account",
      type: "input",
      value: "",
    },
    {
      //1
      id: uuid(),
      label: "Business income",
      tooltip: "revenue generated from side economic activities",
      type: "input",
      value: "",
    },
    {
      //2
      id: uuid(),
      label: "Financial income",
      tooltip: "interest or dividend from investment, received rent",
      type: "input",
      value: "",
    },
    {
      //3
      id: uuid(),
      label: "Other income",
      tooltip: "(Royalties, Pensions, Inheritance, tax credit, others)",
      type: "display",
      type: "input",
      value: "",
    },
    {
      //4
      id: uuid(),
      label: "Total gross income",
      tooltip: "",
      type: "display",
      value: "",
      valueOf: [0, 1, 2, 3],
      subFrom: [],
    },
    {
      //5
      id: uuid(),
      label: "Taxes",
      tooltip: "Real estate tax, Payroll tax, income tax, other taxes",
      type: "input",
      value: "",
    },
    {
      //6
      id: uuid(),
      label: "Real Estate",
      tooltip: "Rent",
      type: "input",
      value: "",
    },
    {
      //7
      id: uuid(),
      label: "Utilities",
      tooltip: "Electricity, Gas, Water",
      type: "input",
      value: "",
    },
    {
      //8
      id: uuid(),
      label: "Consumer Staples",
      tooltip: "Food, Cosmetics, Household products",
      type: "input",
      value: "",
    },
    {
      //9
      id: uuid(),
      label: "Healthcare",
      tooltip: "Drugs, Medical Equipment and Services, Insurance",
      type: "display",
      type: "input",
      value: "",
    },
    {
      //10
      id: uuid(),
      label: "Consumer Discretionary",
      tooltip: "Home furnishing, Clothing, ",
      type: "display",
      type: "input",
      value: "",
    },
    {
      //11
      id: uuid(),
      label: "Communication and Services",
      tooltip: "Internet, Telephone,",
      type: "display",
      type: "input",
      value: "",
    },
    {
      //12
      id: uuid(),
      label: "Transportation",
      tooltip: "Public transportation, Car expenses",
      type: "display",
      type: "input",
      value: "",
    },
    {
      //13
      id: uuid(),
      label: "Total Cost of Living",
      tooltip: "",
      type: "display",
      value: "",
      valueOf: [5, 6, 7, 8, 9, 10, 11, 12],
      subFrom: [],
    },

    {
      //14
      id: uuid(),
      label: "Interest expenses",
      tooltip: "interest  and Annuity paid from Loans",
      type: "display",
      type: "input",
      value: "",
    },
    {
      //15
      id: uuid(),
      label: "Saving capacity",
      tooltip: "Saving capacity",
      type: "display",
      value: "",
      valueOf: [13, 14],
      subFrom: [4],
    },
    {
      //16
      id: uuid(),
      label: "Other expenses",
      tooltip: "Entertainment, Leisure, Travel, Restaurants",
      type: "display",
      type: "input",
      value: "",
    },
    {
      //17
      id: uuid(),
      label: "Total Cost and Expenses",
      tooltip: "",
      type: "display",
      value: "",
      valueOf: [13, 14, 16],
      subFrom: [],
    },
    {
      //18
      id: uuid(),
      label: "Net income",
      tooltip:
        "The amount from Salary, Wages or Business income remaining after all expenses",
      type: "display",
      value: "",
      valueOf: [17],
      subFrom: [4],
    },
  ]);

  useEffect(() => {
    setMonthlyNetincome({
      totalIncome: monthlyFields[4].value,
      totalExpenses: monthlyFields[17].value,
      netIncome: monthlyFields[18].value,
      savingCapacity: monthlyFields[15].value,
    });
    setYearlyNetincome({
      totalIncome: monthlyFields[4].value * 12,
      totalExpenses: monthlyFields[17].value * 12,
      netIncome: monthlyFields[18].value * 12,
      savingCapacity: monthlyFields[15].value * 12,
    });
  }, [monthlyFields]);

  const fieldChanges = (e, type) => {
    let newFields = type.map((f, index) => {
      if (f.id === e.target.name) {
        f.value = e.target.value;
      }
      return f;
    });

    newFields = newFields.map((f, index) => {
      if (f.type === "display") {
        f.value = f.valueOf
          .map((l) => (newFields[l].value ? parseInt(newFields[l].value) : 0))
          .reduce((a, b) => a + b, 0);

        if (f.subFrom.length > 0) {
          f.value =
            f.subFrom
              .map((l) =>
                newFields[l].value ? parseInt(newFields[l].value) : 0
              )
              .reduce((a, b) => a + b, 0) - f.value;
        }
      }
      return f;
    });

    return newFields;
  };
  const handleOnChange = (e) => {
    const fields = fieldChanges(e, monthlyFields);
    setMonthlyFields(fields);
  };

  return (
    <div
      style={{
        marginTop: "20px",
        display: "grid",
        gridTemplateColumns: "1fr 120px 120px",
      }}
    >
      <TableMultiCalculator
        heading={"Item"}
        heading2={"Monthly"}
        fields={monthlyFields}
        valueSign={"$"}
        handleFieldOnChange={handleOnChange}
      />
      <TableMultiCalculator
        heading={"Yearly"}
        fields={monthlyFields.map((v) => ({
          id: v.id,
          type: v.type,
          value: v.value * 12,
        }))}
        valueSign={"$"}
        handleFieldOnChange={() => {}}
        disableFields={true}
      />
      <TableMultiCalculator
        heading={"Margin"}
        fields={monthlyFields.map((v) => ({
          id: v.id,
          type: v.type,
          value: (
            ((v.value * 12) / (monthlyFields[4].value * 12)) *
            100
          ).toFixed(1),
        }))}
        valueSign={"%"}
        handleFieldOnChange={() => {}}
        disableFields={true}
      />
    </div>
  );
}

export default memo(TotalAssetCalculator);
