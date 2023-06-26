import InvestingPlanSideNav from "@/components/investingPlan/InvestingPlanSideNav";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import TableOfContent from "@/components/TableOfContent";
import React, { useState } from "react";
import styles from "@/styles/BasicPage.module.css";
import {
  Alert,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import styled from "@emotion/styled";
import CustomButton from "@/components/Button";
import AlertPopup from "@/components/AlertPopup";
import * as formulajs from "@formulajs/formulajs";
import DataTable from "@/components/investingPlan/DataTable";
import LineChart from "@/components/LineChart";
import InfoModal from "@/components/InfoModal";
import { formatNumber } from "@/helpers/index";
import NumberWithLabel from "@/components/NumberWithLabel";
import Link from "next/link";
import SavingLengthTable from "@/components/investingPlan/SavingLengthTable";

const links = [
  {
    value: "Establish your current situation.",
    link: "#current-situation",
  },
  {
    value: "Do you have an emergency fund?",
    link: "#emergency-fund",
  },
  {
    value: "What do you own (assets)?",
    link: "#asset-owned",
  },
  {
    value: "What do you owe (liabilities)?",
    link: "#liabilities-owed",
  },
  {
    value: "What is your net worth?",
    link: "#networth",
  },
  {
    value: "Could you make any change to increase your net worth?",
    link: "#increase-networth",
  },
];

function Page() {
  const [openModal, setOpenModal] = useState(false);
  const [fields, setFields] = useState([
    {
      id: 1,
      label:
        "What is the amount expected from your investment (Future Value FV)?",
      value: "",
      inputProps: {
        startAdornment: <InputAdornment position="start">$</InputAdornment>,
      },
    },
    {
      id: 2,
      label: "When will you need the expected amount  (Compounding period)?",
      value: "",
      inputProps: {
        endAdornment: <InputAdornment position="end">years</InputAdornment>,
      },
    },
    {
      id: 3,
      label: "Do you have a starting amount to invest (Present Value)?",
      value: "",
      inputProps: {
        startAdornment: <InputAdornment position="start">$</InputAdornment>,
      },
    },
    // {
    //   id: 4,
    //   label: "At which frequency will you invest (Compounding frequency)?",
    //   value: "Y",
    //   options: [
    //     { key: "Y", value: "Yearly" },
    //     { key: "M", value: "Monthly" },
    //   ],
    // },
    // {
    //   id: 5,
    //   label: "Period of contribution",
    //   value: "E",
    //   options: [
    //     { key: "B", value: "Beginning" },
    //     { key: "E", value: "Ending" },
    //   ],
    // },
    {
      id: 6,
      label: "How much could you invest regularly (cashflow)?",
      value: "",
      inputProps: {
        startAdornment: <InputAdornment position="start">$</InputAdornment>,
      },
    },
  ]);
  const [showAlert, setShowAlert] = useState({ show: false, message: "" });
  const [data, setData] = useState({ byMonths: [], byYear: [] });
  const [rr, setRR] = useState(0);
  const [displaySidebar, setDisplaySidebar] = useState(true);

  const toggleSidebarOnPhone = () => {
    setDisplaySidebar(!displaySidebar);
  };

  const handleFieldOnChange = (e) => {
    let newFields = fields.map((f) => {
      if (f.id === parseInt(e.target.name)) {
        f.value = e.target.value;
      }
      return f;
    });
    console.log(newFields);
    setFields(newFields);
  };
  function excelRate(nper, pmt, pv, fv, type, guess, tol) {
    // Set default values for optional arguments
    type = type || 0;
    guess = guess || 0.1;
    tol = tol || 0.0000001;

    // Define the rate function to be solved
    function rateFunc(rate) {
      var f =
        pv * Math.pow(1 + rate, nper) +
        (pmt * (1 + rate * type) * (Math.pow(1 + rate, nper) - 1)) / rate +
        fv;
      return f;
    }

    // Use the Newton-Raphson method to find the rate
    var rate = guess;
    var i = 0;
    do {
      i++;
      var f = rateFunc(rate);
      var df = (rateFunc(rate + tol) - f) / tol;
      var delta = f / df;
      rate -= delta;
    } while (Math.abs(delta) > tol && i < 100);

    return rate;
  }

  const handleOnCalculateClick = () => {
    let check = fields.map((f) => f.value).includes("");
    if (check) {
      setShowAlert({ show: true, message: "Please fill all the fields." });
      return;
    }
    let targetAmount = parseFloat(fields[0].value);
    let startingAmount = parseFloat(fields[2].value);
    let periodYear = parseInt(fields[1].value);
    // let frequency = fields[3].value;
    let cF = parseFloat(fields[3].value);

    let RR =
      excelRate(periodYear * 12, -cF, -startingAmount, targetAmount) * 12;
    // formulajs.RATE(periodYear * 12, -cF, -startingAmount, targetAmount) * 12;

    // RR = RR > 1 ? 1 : RR;
    console.log("ammar", RR, periodYear, -cF, -startingAmount, targetAmount);
    // return;
    setRR(RR);
    // calculating montly data
    let monthlyData = [];
    let yearlyData = [];
    let monthlyDataIndex = 0;

    for (let i = 0; i < periodYear; i++) {
      for (let j = 0; j < 12; j++) {
        let currentStartingAmount = monthlyData[monthlyDataIndex - 1]
          ? monthlyData[monthlyDataIndex - 1].endBalance
          : startingAmount;

        let currentMonthlyInterest = currentStartingAmount * (RR / 12);
        monthlyData.push({
          yearNo: i + 1,
          month: j + 1,
          additionalContribution: cF,
          startingPrincipal: currentStartingAmount,
          monthlyInterest: currentMonthlyInterest,
          endBalance: currentStartingAmount + currentMonthlyInterest + cF,
          endPrincipal: currentStartingAmount + cF,
        });
        monthlyDataIndex++;
        j === 11 &&
          yearlyData.push({
            yearNo: i,
            month: j,
            additionalContribution: cF,
            startingPrincipal: currentStartingAmount,
            monthlyInterest: currentMonthlyInterest,
            endBalance: currentStartingAmount + currentMonthlyInterest + cF,
            endPrincipal: currentStartingAmount + cF,
          });
      }
    }

    // console.log(monthlyData, yearlyData);
    setData({
      byMonths: monthlyData,
      byYear: yearlyData,
    });
  };
  return (
    <Layout
      nextUrl={"/investing-plan/financial-goals/investment-vehicle"}
      toggleSidebarOnPhone={toggleSidebarOnPhone}
      phoneSidebarOpen={displaySidebar}
    >
      <PageHeader
        parentHeading={
          <Link href="/investing-plan/financial-goals/set-financial-goals">
            Investing plan
          </Link>
        }
        childHeading="Time Horizon"
        setOpenModal={setOpenModal}
        showMoreInfo={false}
      />
      <AlertPopup
        open={showAlert.show}
        message={showAlert.message}
        handleClose={() => setShowAlert({ show: false, message: "" })}
        severity="error"
      />

      <div className={styles.container}>
        <InvestingPlanSideNav
          activeHeadingId={3}
          activeSubheadingId={3.1}
          sidebarStyle={{
            left: displaySidebar ? "0px" : "-1000px",
          }}
        />
        <div>
          <div className={styles.contentContainer}>
            <div className={styles.content}>
              <h1>
                Saving length: How long will you save to reach your target
                amount?
              </h1>
              <div
                style={{
                  backgroundColor: "#f2f2f2",
                  padding: "10px 25px",
                }}
              >
                <p>
                  You will need to save during <b>417 years</b> with your
                  current{" "}
                  <b>
                    investing capacity (200 monthly, 2400 yearly). To reach your
                    time horizon you will need:
                  </b>
                </p>
                <ul>
                  <li>Either increase your investing capacity</li>
                  <li>Either to invest your money</li>
                </ul>
              </div>
            </div>
            <div className={styles.content}>
              <SavingLengthTable />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Page;
