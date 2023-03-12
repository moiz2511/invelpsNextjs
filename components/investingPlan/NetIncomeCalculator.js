import React, { useState, useEffect, memo } from "react";
import TableCalculator from "../TableCalculator";
import { uuid } from "uuidv4";
import TableMultiCalculator from "../TableMultiCalculator";

function TotalAssetCalculator({
  setMonthlyNetincome,
  setYearlyNetincome,
  setMarginNetincome,
}) {
  const [monthlyFields, setMonthlyFields] = useState([
    {
      id: uuid(),
      label: "Salary",
      //   tooltip: "cash on hand, checking, saving account",
      type: "input",
      value: "",
    },
    {
      id: uuid(),
      label: "Business income",
      tooltip: "revenue generated from side economic activities",
      type: "input",
      value: "",
    },
    {
      id: uuid(),
      label: "Financial income",
      tooltip: "interest or dividend from investment, received rent",
      type: "input",
      value: "",
    },
    {
      id: uuid(),
      label: "Other income",
      tooltip: "(Royalties, Pensions, Inheritance, tax credit, others)",
      type: "display",
      type: "input",
      value: "",
    },
    {
      id: uuid(),
      label: "Total gross income",
      tooltip: "",
      type: "display",
      value: "",
      valueOf: [0, 1, 2, 3],
      subFrom: [],
    },
    {
      id: uuid(),
      label: "Taxes",
      tooltip: "Real estate tax, Payroll tax, income tax, other taxes",
      type: "input",
      value: "",
    },
    {
      id: uuid(),
      label: "Real Estate",
      tooltip: "Rent",
      type: "input",
      value: "",
    },
    {
      id: uuid(),
      label: "Utilities",
      tooltip: "Electricity, Gas, Water",
      type: "input",
      value: "",
    },
    {
      id: uuid(),
      label: "Consumer Staples",
      tooltip: "Food, Cosmetics, Household products",
      type: "input",
      value: "",
    },
    {
      id: uuid(),
      label: "Healthcare",
      tooltip: "Drugs, Medical Equipment and Services, Insurance",
      type: "display",
      type: "input",
      value: "",
    },
    {
      id: uuid(),
      label: "Consumer Discretionary",
      tooltip: "Home furnishing, Clothing, ",
      type: "display",
      type: "input",
      value: "",
    },
    {
      id: uuid(),
      label: "Communication and Services",
      tooltip: "Internet, Telephone,",
      type: "display",
      type: "input",
      value: "",
    },
    {
      id: uuid(),
      label: "Transportation",
      tooltip: "Public transportation, Car expenses",
      type: "display",
      type: "input",
      value: "",
    },
    {
      id: uuid(),
      label: "Total Cost of Living",
      tooltip: "",
      type: "display",
      value: "",
      valueOf: [5, 6, 7, 8, 9, 10, 11, 12],
      subFrom: [],
    },
    {
      id: uuid(),
      label: "Other expenses",
      tooltip: "Entertainment, Leisure, Travel, Restaurants",
      type: "display",
      type: "input",
      value: "",
    },
    {
      id: uuid(),
      label: "Financial expenses",
      tooltip: "interest  and Annuity paid from Loans",
      type: "display",
      type: "input",
      value: "",
    },

    {
      id: uuid(),
      label: "Total Cost of Living",
      tooltip: "",
      type: "display",
      value: "",
      valueOf: [14, 15],
      subFrom: [],
    },
    {
      id: uuid(),
      label: "Net income",
      tooltip:
        "The amount from Salary, Wages or Business income remaining after all expenses",
      type: "display",
      value: "",
      valueOf: [13, 16],
      subFrom: [4],
    },
  ]);
  const [yearlyFields, setYearlyFields] = useState([
    {
      id: uuid(),
      //   label: "Salary",
      //   tooltip: "cash on hand, checking, saving account",
      type: "input",
      value: "",
    },
    {
      id: uuid(),
      //   label: "Business income",
      //   tooltip: "revenue generated from side economic activities",
      type: "input",
      value: "",
    },
    {
      id: uuid(),
      //   label: "Financial income",
      //   tooltip: "interest or dividend from investment, received rent",
      type: "input",
      value: "",
    },
    {
      id: uuid(),
      //   label: "Other income",
      //   tooltip: "(Royalties, Pensions, Inheritance, tax credit, others)",
      type: "display",
      type: "input",
      value: "",
    },
    {
      id: uuid(),
      //   label: "Total gross income",
      //   tooltip: "",
      type: "display",
      value: "",
      valueOf: [0, 1, 2, 3],
      subFrom: [],
    },
    {
      id: uuid(),
      //   label: "Taxes",
      //   tooltip: "Real estate tax, Payroll tax, income tax, other taxes",
      type: "input",
      value: "",
    },
    {
      id: uuid(),
      //   label: "Real Estate",
      //   tooltip: "Rent",
      type: "input",
      value: "",
    },
    {
      id: uuid(),
      //   label: "Utilities",
      //   tooltip: "Electricity, Gas, Water",
      type: "input",
      value: "",
    },
    {
      id: uuid(),
      //   label: "Consumer Staples",
      //   tooltip: "Food, Cosmetics, Household products",
      type: "input",
      value: "",
    },
    {
      id: uuid(),
      //   label: "Healthcare",
      //   tooltip: "Drugs, Medical Equipment and Services, Insurance",
      type: "display",
      type: "input",
      value: "",
    },
    {
      id: uuid(),
      //   label: "Consumer Discretionary",
      //   tooltip: "Home furnishing, Clothing, ",
      type: "display",
      type: "input",
      value: "",
    },
    {
      id: uuid(),
      //   label: "Communication and Services",
      //   tooltip: "Internet, Telephone,",
      type: "display",
      type: "input",
      value: "",
    },
    {
      id: uuid(),
      //   label: "Transportation",
      //   tooltip: "Public transportation, Car expenses",
      type: "display",
      type: "input",
      value: "",
    },
    {
      id: uuid(),
      //   label: "Total Cost of Living",
      //   tooltip: "",
      type: "display",
      value: "",
      valueOf: [5, 6, 7, 8, 9, 10, 11, 12],
      subFrom: [],
    },
    {
      id: uuid(),
      //   label: "Other expenses",
      //   tooltip: "Entertainment, Leisure, Travel, Restaurants",
      type: "display",
      type: "input",
      value: "",
    },
    {
      id: uuid(),
      //   label: "Financial expenses",
      //   tooltip: "interest  and Annuity paid from Loans",
      type: "display",
      type: "input",
      value: "",
    },

    {
      id: uuid(),
      //   label: "Total Cost of Living",
      //   tooltip: "",
      type: "display",
      value: "",
      valueOf: [14, 15],
      subFrom: [],
    },
    {
      id: uuid(),
      //   label: "Net income",
      //   tooltip:
      // "The amount from Salary, Wages or Business income remaining after all expenses",
      type: "display",
      value: "",
      valueOf: [13, 16],
      subFrom: [4],
    },
  ]);
  const [marginFields, setMarginFields] = useState([
    {
      id: uuid(),
      //   label: "Salary",
      //   tooltip: "cash on hand, checking, saving account",
      type: "input",
      value: "",
    },
    {
      id: uuid(),
      //   label: "Business income",
      //   tooltip: "revenue generated from side economic activities",
      type: "input",
      value: "",
    },
    {
      id: uuid(),
      //   label: "Financial income",
      //   tooltip: "interest or dividend from investment, received rent",
      type: "input",
      value: "",
    },
    {
      id: uuid(),
      //   label: "Other income",
      //   tooltip: "(Royalties, Pensions, Inheritance, tax credit, others)",
      type: "display",
      type: "input",
      value: "",
    },
    {
      id: uuid(),
      //   label: "Total gross income",
      //   tooltip: "",
      type: "display",
      value: "",
      valueOf: [0, 1, 2, 3],
      subFrom: [],
    },
    {
      id: uuid(),
      //   label: "Taxes",
      //   tooltip: "Real estate tax, Payroll tax, income tax, other taxes",
      type: "input",
      value: "",
    },
    {
      id: uuid(),
      //   label: "Real Estate",
      //   tooltip: "Rent",
      type: "input",
      value: "",
    },
    {
      id: uuid(),
      //   label: "Utilities",
      //   tooltip: "Electricity, Gas, Water",
      type: "input",
      value: "",
    },
    {
      id: uuid(),
      //   label: "Consumer Staples",
      //   tooltip: "Food, Cosmetics, Household products",
      type: "input",
      value: "",
    },
    {
      id: uuid(),
      //   label: "Healthcare",
      //   tooltip: "Drugs, Medical Equipment and Services, Insurance",
      type: "display",
      type: "input",
      value: "",
    },
    {
      id: uuid(),
      //   label: "Consumer Discretionary",
      //   tooltip: "Home furnishing, Clothing, ",
      type: "display",
      type: "input",
      value: "",
    },
    {
      id: uuid(),
      //   label: "Communication and Services",
      //   tooltip: "Internet, Telephone,",
      type: "display",
      type: "input",
      value: "",
    },
    {
      id: uuid(),
      //   label: "Transportation",
      //   tooltip: "Public transportation, Car expenses",
      type: "display",
      type: "input",
      value: "",
    },
    {
      id: uuid(),
      //   label: "Total Cost of Living",
      //   tooltip: "",
      type: "display",
      value: "",
      valueOf: [5, 6, 7, 8, 9, 10, 11, 12],
      subFrom: [],
    },
    {
      id: uuid(),
      //   label: "Other expenses",
      //   tooltip: "Entertainment, Leisure, Travel, Restaurants",
      type: "display",
      type: "input",
      value: "",
    },
    {
      id: uuid(),
      //   label: "Financial expenses",
      //   tooltip: "interest  and Annuity paid from Loans",
      type: "display",
      type: "input",
      value: "",
    },

    {
      id: uuid(),
      //   label: "Total Cost of Living",
      //   tooltip: "",
      type: "display",
      value: "",
      valueOf: [14, 15],
      subFrom: [],
    },
    {
      id: uuid(),
      //   label: "Net income",
      //   tooltip:
      // "The amount from Salary, Wages or Business income remaining after all expenses",
      type: "display",
      value: "",
      valueOf: [13, 16],
      subFrom: [4],
    },
  ]);

  useEffect(() => {
    setMonthlyNetincome({
      totalIncome: monthlyFields[4].value,
      totalExpenses: monthlyFields[13].value,
      netIncome: monthlyFields[17].value,
    });
  }, [monthlyFields]);

  useEffect(() => {
    setYearlyNetincome({
      totalIncome: yearlyFields[4].value,
      totalExpenses: yearlyFields[13].value,
      netIncome: yearlyFields[17].value,
    });
  }, [yearlyFields]);

  useEffect(() => {
    setMarginNetincome({
      totalIncome: marginFields[4].value,
      totalExpenses: marginFields[13].value,
      netIncome: marginFields[17].value,
    });
  }, [marginFields]);

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

  const handleMarginyOnChange = (e) => {
    let newFields = marginFields.map((f) => {
      if (f.id === e.target.name) {
        f.value = e.target.value;
      }
      if (f.type === "display") {
        f.value = f.valueOf
          .map((l) =>
            marginFields[l].value ? parseInt(marginFields[l].value) : 0
          )
          .reduce((a, b) => a + b, 0);

        if (f.subFrom.length > 0) {
          f.value =
            f.subFrom
              .map((l) =>
                marginFields[l].value ? parseInt(marginFields[l].value) : 0
              )
              .reduce((a, b) => a + b, 0) - f.value;
        }
      }
      return f;
    });
    setMarginFields(newFields);
  };

  return (
    <div
      style={{
        marginTop: "20px",
        display: "grid",
        gridTemplateColumns: "1fr 0.2fr 0.2fr",
      }}
    >
      <TableMultiCalculator
        heading={"Item"}
        heading2={"Monthly Amount"}
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
      <TableMultiCalculator
        heading={"Margin"}
        fields={marginFields}
        valueSign={"%"}
        handleFieldOnChange={handleMarginyOnChange}
      />
    </div>
  );
}

export default memo(TotalAssetCalculator);
