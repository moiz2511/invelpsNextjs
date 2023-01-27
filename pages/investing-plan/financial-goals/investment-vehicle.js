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

const links = [
  {
    value: "Return.",
    link: "#return",
  },
  {
    value: "What are the different asset classes?",
    link: "#asset-classes",
  },
  {
    value:
      "What is the rate of return of those asset classes over your investment period?",
    link: "#rate-of-return",
  },
  {
    value: "How much could you expect with each asset class (Future value)?",
    link: "#future-value",
  },
  {
    value: "What is the risk level of each asset class?",
    link: "#risk-level",
  },
  {
    value: "Which asset class offers the best risk/return ratio?",
    link: "#risk-return-ratio",
  },
  {
    value:
      "What is the maximum loss you are willing to accept on your portfolio?",
    link: "#max-loss",
  },
];

function Page() {
  const [openModal, setOpenModal] = useState(false);
  const [fields, setFields] = useState([
    {
      id: 1,
      label: "What is the expected return rate from your investment?",
      value: "",
      inputProps: {
        startAdornment: <InputAdornment position="start">%</InputAdornment>,
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
  const handleOnCalculateClick = () => {
    let check = fields.map((f) => f.value).includes("");
    if (check) {
      setShowAlert({ show: true, message: "Please fill all the fields." });
      return;
    }
    let RR = parseFloat(fields[0].value) / 100;
    let startingAmount = parseFloat(fields[2].value);
    let periodYear = parseInt(fields[1].value);
    // let frequency = fields[3].value;
    let cF = parseFloat(fields[3].value);
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
    <Layout>
      <PageHeader
        parentHeading="Investing plan"
        childHeading="Investment vehicles"
        setOpenModal={setOpenModal}
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
        heading="Investment vehicles"
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
        <InvestingPlanSideNav activeHeadingId={3} activeSubheadingId={3.1} />
        <div>
          <TableOfContent links={links} />
          <div className={styles.contentContainer}>
            <div className={styles.content} id="return">
              <h1>Return</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent ultrices id mi a placerat. In efficitur pulvinar justo
                vitae luctus.
              </p>
            </div>
            <div className={styles.content} id="asset-classes">
              <h1>What are the different asset classes?</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent ultrices id mi a placerat. In efficitur pulvinar justo
                vitae luctus.{" "}
              </p>
            </div>
            <div className={styles.content} id="rate-of-return">
              <h1>
                What is the rate of return of the asset classes over your
                investment period?
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent ultrices id mi a placerat. In efficitur pulvinar justo
                vitae luctus.{" "}
              </p>
            </div>
            <div className={styles.content} id="future-value">
              <h1>
                How much could you expect with each asset class (Future value)?
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent ultrices id mi a placerat. In efficitur pulvinar justo
                vitae luctus.{" "}
              </p>
            </div>
            {/* form and chart start */}
            <div className={styles.formContainer} style={{ marginTop: "50px" }}>
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
            {data.byMonths.length > 0 && (
              <>
                {/* for end */}
                <div className={styles.graphContainer}>
                  <LineChart
                    chartTitle="Final Amount chart"
                    principal={data.byYear.map((d) => d.endPrincipal)}
                    interest={data.byYear.map((d) => d.monthlyInterest)}
                    balance={data.byYear.map((d) => d.endBalance)}
                    years={data.byYear.map((d) => `${d.yearNo + 1}yr`)}
                  />
                  <div>
                    <p>
                      <span>End Balance</span>
                      <span>
                        $
                        {data.byMonths &&
                          formatNumber(
                            data.byMonths[data.byMonths.length - 1].endBalance
                          )}
                      </span>
                    </p>
                    <p>
                      <span>Starting Amount</span>
                      <span>
                        $
                        {data.byMonths &&
                          formatNumber(data.byMonths[0].startingPrincipal)}
                      </span>
                    </p>
                    <p>
                      <span>Total Contributions</span>
                      <span>
                        $
                        {data.byMonths &&
                          formatNumber(
                            data.byMonths[data.byMonths.length - 1]
                              .additionalContribution *
                              (data.byMonths.length - 1)
                          )}
                      </span>
                    </p>
                    <p>
                      <span>Total Interest</span>
                      <span>
                        $
                        {data.byMonths &&
                          formatNumber(
                            data.byMonths[data.byMonths.length - 1]
                              .monthlyInterest
                          )}
                      </span>
                    </p>
                  </div>
                </div>
                {/* table */}
                <div>
                  <DataTable
                    columns={[
                      "Year No.",
                      "Month No.",
                      "Start Principal",
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
            <div className={styles.content} id="risk-level">
              <h1>What is the risk level of each asset class?</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent ultrices id mi a placerat. In efficitur pulvinar justo
                vitae luctus.{" "}
              </p>
            </div>
            <div className={styles.content} id="risk-return-ratio">
              <h1>Which asset class offers the best risk/return ratio?</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent ultrices id mi a placerat. In efficitur pulvinar justo
                vitae luctus.{" "}
              </p>
            </div>
            <div className={styles.content} id="max-loss">
              <h1>
                What is the maximum loss you are willing to accept on your
                portfolio?
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent ultrices id mi a placerat. In efficitur pulvinar justo
                vitae luctus.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Page;
