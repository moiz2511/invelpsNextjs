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

const links = [
  {
    value: "Time value of money.",
    link: "#value",
  },
  {
    value: "What is your required rate of return (Internal rate of return)?",
    link: "#return-rate",
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
      nextUrl={"/investing-plan/risks-and-return/asset"}
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
        showMoreInfo={true}
      />
      <AlertPopup
        open={showAlert.show}
        message={showAlert.message}
        handleClose={() => setShowAlert({ show: false, message: "" })}
        severity="error"
      />
      <InfoModal
        open={openModal}
        setOpen={setOpenModal}
        heading="Time value of money"
        content={
          <div>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              aliquet sapien euismod feugiat consequat. Sed at vulputate urna,
              eu varius lacus. Fusce elementum libero congue augue laoreet,
              vitae laoreet orci faucibus. Etiam tristique nibh elit, a tempus
              ipsum ultricies at. Sed aliquet magna nec nunc lacinia, eu tempor
              purus hendrerit. Nunc vitae bibendum mi, cursus scelerisque
              mauris. Donec at lorem sit amet diam fermentum aliquam a porttitor
              mauris. Suspendisse sapien nibh, placerat ac pharetra vel, lacinia
              ut lacus. Donec ultricies tellus sit amet ultrices vehicula.
              Praesent eu ligula eu urna aliquam tempus eu quis leo. Suspendisse
              commodo nulla turpis, at ultricies urna finibus in. Phasellus quis
              condimentum diam. Sed et laoreet dui. Sed at ante ac purus
              porttitor bibendum at ut enim. Aenean ipsum magna, rutrum id velit
              non, rhoncus semper ipsum.
            </p>
            <p>
              Nam quis purus tincidunt, eleifend risus vitae, sollicitudin
              lorem. Praesent feugiat arcu ac massa ullamcorper iaculis sed eu
              massa. Suspendisse ac cursus nisi, non faucibus leo. Nulla lectus
              mi, tincidunt non libero a, facilisis accumsan odio. Aliquam
              posuere malesuada nulla. Proin nunc diam, tempus eget vehicula
              eget, fermentum nec augue. Vestibulum pharetra, sem et venenatis
              iaculis, dolor libero malesuada purus, ac aliquet odio erat eget
              risus.
            </p>
            <p>
              In quis augue vel dui tempus dignissim ac in urna. Sed commodo
              purus eu consectetur convallis. Fusce porttitor volutpat
              elementum. Nunc velit purus, vehicula at pulvinar accumsan,
              consectetur euismod ex. Vestibulum ante ipsum primis in faucibus
              orci luctus et ultrices posuere cubilia curae; Donec fermentum,
              elit eu semper efficitur, nisl mauris bibendum mauris, ac cursus
              magna eros non elit. Pellentesque sodales dolor vel sollicitudin
              tempus.
            </p>{" "}
          </div>
        }
      />
      <div className={styles.container}>
        <InvestingPlanSideNav
          activeHeadingId={3}
          activeSubheadingId={3.2}
          sidebarStyle={{
            left: displaySidebar ? "0px" : "-1000px",
          }}
        />
        <div>
          <TableOfContent links={links} />
          <div className={styles.contentContainer}>
            {/* for start */}
            <div className={styles.content} id="value">
              <h1>Time Value Of Money</h1>

              <div
                className={styles.formContainer}
                style={{ marginTop: "-10px" }}
              >
                {fields.map((field) => (
                  <div key={field.id} className={styles.formFieldContainer}>
                    <p>{field.label}</p>
                    <div className={styles.textFieldContainer}>
                      {field.options ? (
                        <TextField
                          name={`${field.id}`}
                          select
                          size="small"
                          value={field.value}
                          onChange={handleFieldOnChange}
                          className={styles.textField}
                          style={{ width: "100%", padding: "0px" }}
                        >
                          {field.options.map((option) => (
                            <MenuItem key={option.key} value={option.key}>
                              {option.value}
                            </MenuItem>
                          ))}
                        </TextField>
                      ) : (
                        <TextField
                          name={`${field.id}`}
                          fullWidth
                          size="small"
                          InputProps={field.inputProps}
                          id={`${field.id}`}
                          value={field.value}
                          className={styles.textField}
                          onChange={handleFieldOnChange}
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div
                style={{
                  textAlign: "right",
                  paddingTop: "10px",
                  paddingBottom: "20px",
                }}
              >
                <CustomButton onClick={handleOnCalculateClick}>
                  Calculate
                </CustomButton>
              </div>
            </div>
            <div className={styles.content} id="return-rate">
              <h1>
                What is your required rate of return (Internal rate of return)?
              </h1>
              <p>
                You will need an <b>annual return rate of</b>{" "}
                <span style={{ color: "var(--secondary-color)" }}>
                  {rr > 0 && formatNumber(rr * 100)}%
                </span>{" "}
                to reach{" "}
                <span style={{ color: "var(--secondary-color)" }}>
                  {data.byMonths &&
                    data.byMonths.length > 0 &&
                    formatNumber(
                      data.byMonths[data.byMonths.length - 1].endBalance
                    )}
                </span>{" "}
                in{" "}
                <span style={{ color: "var(--secondary-color)" }}>
                  {data.byMonths &&
                    data.byMonths.length > 0 &&
                    data.byMonths[data.byMonths.length - 1].yearNo}{" "}
                  years
                </span>
              </p>
            </div>
            {data.byMonths.length > 0 && (
              <>
                <div style={{ marginLeft: "10px" }}>
                  <div
                    style={{
                      marginTop: "20px",
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr 1fr 1fr",
                      gridTemplateRows: "1fr 1fr",
                    }}
                  >
                    <NumberWithLabel
                      labelText={"Target Amount"}
                      mainText={`$
                  ${
                    data.byMonths &&
                    formatNumber(
                      data.byMonths[data.byMonths.length - 1].endBalance
                    )
                  }`}
                      mainTextStyle={{
                        color: "var(--primary-orange)",
                      }}
                      style={{ borderRight: "1px solid lightgray" }}
                    />
                    <NumberWithLabel
                      labelText={"Starting Amount"}
                      mainText={`$ 
                  ${
                    data.byMonths &&
                    formatNumber(data.byMonths[0].startingPrincipal)
                  }`}
                      style={{
                        borderRight: "1px solid lightgray",
                        paddingLeft: "20px",
                      }}
                    />
                    <NumberWithLabel
                      labelText={"Monthly Investment"}
                      mainText={`$
                  ${data.byMonths[0].additionalContribution}
                  `}
                      style={{
                        borderRight: "1px solid lightgray",
                        paddingLeft: "20px",
                      }}
                    />
                    <NumberWithLabel
                      labelText={"Time"}
                      mainText={`
                  ${data.byMonths[data.byMonths.length - 1].yearNo} years
                  `}
                      style={{ paddingLeft: "20px" }}
                    />
                  </div>
                  <div
                    style={{
                      marginTop: "20px",
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr 1fr 1fr",
                      gridTemplateRows: "1fr 1fr",
                    }}
                  >
                    <NumberWithLabel
                      labelText={"Total Interest Earned"}
                      mainText={`$
                  ${
                    data.byMonths &&
                    formatNumber(
                      data.byMonths
                        .map((l) => l.monthlyInterest)
                        .reduce((a, b) => a + b)
                    )
                  }`}
                      mainTextStyle={{
                        color: "var(--primary-orange)",
                      }}
                      style={{ borderRight: "1px solid lightgray" }}
                    />
                    <NumberWithLabel
                      labelText={"Total Contribution"}
                      mainText={`$ 
                  ${
                    data.byMonths &&
                    formatNumber(
                      data.byMonths
                        .map((l) => l.additionalContribution)
                        .reduce((a, b) => a + b)
                    )
                  }`}
                      style={{
                        borderRight: "1px solid lightgray",
                        paddingLeft: "20px",
                      }}
                    />
                    <NumberWithLabel
                      labelText={"Compounding"}
                      mainText={`Monthly`}
                      style={{
                        borderRight: "1px solid lightgray",
                        paddingLeft: "20px",
                      }}
                    />
                    <NumberWithLabel
                      labelText={"Annual Of Return Rate"}
                      mainText={`
                    ${rr > 0 && formatNumber(rr * 100)}%
                  `}
                      mainTextStyle={{
                        color: "var(--secondary-color)",
                      }}
                      style={{ paddingLeft: "20px" }}
                    />
                  </div>
                </div>
                {/* for end */}
                <div className={styles.graphContainer}>
                  <LineChart
                    chartTitle="Return rate chart"
                    principal={data.byYear.map((d) => d.endPrincipal)}
                    interest={data.byYear.map((d) => d.monthlyInterest)}
                    balance={data.byYear.map((d) => d.endBalance)}
                    years={data.byYear.map((d) => `${d.yearNo + 1}yr`)}
                  />
                </div>
                {/* table */}
                <div>
                  <DataTable
                    columns={[
                      "Year, Month",
                      "Contribution",
                      "Start Balance",
                      "Interest",
                      "End Balance",
                      "End Principal",
                    ]}
                    rows={data.byMonths}
                  />
                </div>
              </>
            )}
            {/* for and chart end */}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Page;
