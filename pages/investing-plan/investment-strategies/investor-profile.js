import React, { useState } from "react";

import AlertPopup from "@/components/AlertPopup";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import InvestingPlanSideNav from "@/components/investingPlan/InvestingPlanSideNav";
import styles from "@/styles/BasicPage.module.css";
import Link from "next/link";
import { MenuItem, Select, TextField } from "@mui/material";
import GroupedColumnsTable from "@/components/GroupedColumnsTable";
import CustomAccordion from "@/components/Accordion";
import LineChart from "@/components/LineChart";
import CapitalGrowthChart from "@/components/investingPlan/risk-and-return/CapitalGrowthChart";
import CustomTable from "@/components/Table";
import RiskVReturnChart from "@/components/investingPlan/risk-and-return/RiskVReturnChart";
import { faker } from "@faker-js/faker";
import BarChart from "@/components/BarChart";
import GlobalMarketAnnualizedChart from "@/components/investingPlan/investment-strategies/GlobalMarketAnnualizedChart";
import ManageInvestmentCard from "@/components/investingPlan/risk-and-return/ManageInvestmentCard";
import TableOfContent from "@/components/TableOfContent";
import { RollingReturnChart } from "@/components/investingPlan/investment-strategies/RollingReturnChart";
import RiskVReturnChat from "@/components/investingPlan/investment-strategies/RiskReturnChart";
import PieChart from "@/components/PieChart";
import { BreakdownChart } from "@/components/investingPlan/investment-strategies/BreakdownChart";
import YelloStar from "../../../public/images/yellow-star.png";
import GrayStar from "../../../public/images/gray-star.png";
import Image from "next/image";

const mockYears = ["2019", "2020", "2021", "2022", "2023"];
const links = [
  { value: "Investor Profile", link: "#profile" },
  { value: "Strategy Model", link: "#strategy-model" },
  { value: "Buffet Hagstrom screen", link: "#buffet-hagstrom-screen" },
  {
    value: "Selection criterias Measures and Categories breakdown",
    link: "#breakdown",
  },
  { value: "Screen", link: "#screen" },
  { value: "Companies passing criterias", link: "#companies-passing-criteria" },
  {
    value: "Companies passing criterias breakdown",
    link: "#criteria-breakdown",
  },
  {
    value: "Companies passing criterias return and risk overview",
    link: "#return-risk-overview",
  },
  { value: "Strategy models Annualized Returns", link: "#annualized-return" },
  { value: "Strategy models Capital Growth -Backtest", link: "#backtest" },
  { value: "Strategy models Rolling return", link: "#rolling-return" },
  { value: "Strategy models Risk vs Returns", link: "#risk-v-return" },
  { value: "Strategy models Risk adjusted return", link: "#adjusted-return" },
];
const types = [
  "Carrefour",
  "BNP Paribas",
  "Danone SA",
  "Alstorm SA",
  "Airbus SE",
  "Air Liquids SA",
  "Credit Agricole",
];
const breakdowns = [
  "Cashflow",
  "Return",
  "Profitability",
  "Valuation",
  "Solvency",
];
const rvrData = [
  "0.00%",
  "1.00%",
  "2.00%",
  "3.00%",
  "4.00%",
  "5.00%",
  "6.00%",
  "7.00%",
  "8.00%",
  "9.00%",
  "10.00%",
];

function getStars(numYellowStars) {
  if (numYellowStars === undefined) {
    return ""; // Return empty string if no argument is provided
  }

  if (numYellowStars < 0 || numYellowStars > 3) {
    throw new Error("Number of yellow stars must be between 0 and 3.");
  }

  const maxStars = 3;
  let starArrays = [];

  for (let i = 0; i < maxStars; i++) {
    if (i < numYellowStars) {
      starArrays.push(YelloStar); // Yellow star
    } else {
      starArrays.push(GrayStar);
    }
  }
  console.log(starArrays);

  return starArrays.map((star, i) => (
    <Image src={star} key={i} alt="star" height={20} width={20} />
  ));
}

function Index() {
  const [showAlert, setShowAlert] = useState({ show: false, message: "" });
  const [displaySidebar, setDisplaySidebar] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  const globalMarketFields = () => (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ marginRight: "15px" }}>
        <span style={{ marginRight: "5px" }}>Region: </span>
        <TextField
          name={"region"}
          select
          size="small"
          value={"all"}
          onChange={(v) => console.log(v)}
          className={styles.textField}
          style={{ width: "100%", padding: "0px" }}
        >
          <MenuItem key={1} value={"all"}>
            All
          </MenuItem>
        </TextField>
      </div>
      <div style={{ marginRight: "15px" }}>
        <span style={{ marginRight: "5px" }}>Country: </span>
        <TextField
          name={"country"}
          select
          size="small"
          value={"all"}
          onChange={(v) => console.log(v)}
          className={styles.textField}
          style={{ width: "100%", padding: "0px" }}
        >
          <MenuItem key={1} value={"all"}>
            All
          </MenuItem>
        </TextField>
      </div>
      <div style={{ marginRight: "15px" }}>
        <span style={{ marginRight: "5px" }}>Rate Type: </span>
        <TextField
          name={"rateType"}
          select
          size="small"
          value={"nominal"}
          onChange={(v) => console.log(v)}
          className={styles.textField}
          style={{ width: "100%", padding: "0px" }}
        >
          <MenuItem key={1} value={"nominal"}>
            Nominal
          </MenuItem>
        </TextField>
      </div>
      <div style={{ marginRight: "15px" }}>
        <span style={{ marginRight: "5px" }}>Time Horizon: </span>
        <TextField
          name={"timeHorizon"}
          select
          size="small"
          value={"20"}
          onChange={(v) => console.log(v)}
          className={styles.textField}
          style={{ width: "100%", padding: "0px" }}
        >
          <MenuItem key={1} value={"20"}>
            20
          </MenuItem>
        </TextField>
      </div>
    </div>
  );
  const returnGlobalMarketsFields = () => (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ marginRight: "15px" }}>
        <span style={{ marginRight: "5px" }}>Region: </span>
        <TextField
          name={"region"}
          select
          size="small"
          value={"all"}
          onChange={(v) => console.log(v)}
          className={styles.textField}
          style={{ width: "100%", padding: "0px" }}
        >
          <MenuItem key={1} value={"all"}>
            All
          </MenuItem>
        </TextField>
      </div>
      <div style={{ marginRight: "15px" }}>
        <span style={{ marginRight: "5px" }}>Country: </span>
        <TextField
          name={"country"}
          select
          size="small"
          value={"all"}
          onChange={(v) => console.log(v)}
          className={styles.textField}
          style={{ width: "100%", padding: "0px" }}
        >
          <MenuItem key={1} value={"all"}>
            All
          </MenuItem>
        </TextField>
      </div>
      <div style={{ marginRight: "15px" }}>
        <span style={{ marginRight: "5px" }}>Rate Type: </span>
        <TextField
          name={"rateType"}
          select
          size="small"
          value={"nominal"}
          onChange={(v) => console.log(v)}
          className={styles.textField}
          style={{ width: "100%", padding: "0px" }}
        >
          <MenuItem key={1} value={"nominal"}>
            Nominal
          </MenuItem>
        </TextField>
      </div>
      <div style={{ marginRight: "15px" }}>
        <span style={{ marginRight: "5px" }}>Time Horizon: </span>
        <TextField
          name={"timeHorizon"}
          select
          size="small"
          value={"20"}
          onChange={(v) => console.log(v)}
          className={styles.textField}
          style={{ width: "100%", padding: "0px" }}
        >
          <MenuItem key={1} value={"20"}>
            20
          </MenuItem>
        </TextField>
      </div>
    </div>
  );
  const capitalBacktestFields = () => (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ marginRight: "15px" }}>
        <span style={{ marginRight: "5px" }}>Starting Amount ($): </span>
        <TextField
          name={"startinAmount"}
          select
          size="small"
          value={2000}
          onChange={(v) => console.log(v)}
          className={styles.textField}
          style={{ width: "100%", padding: "0px" }}
        >
          <MenuItem key={1} value={2000}>
            2000
          </MenuItem>
        </TextField>
      </div>
      <div style={{ marginRight: "15px" }}>
        <span style={{ marginRight: "5px" }}>Yearly Investment ($): </span>
        <TextField
          name={"yearlyInvestment"}
          select
          size="small"
          value={2400}
          onChange={(v) => console.log(v)}
          className={styles.textField}
          style={{ width: "100%", padding: "0px" }}
        >
          <MenuItem key={1} value={2400}>
            2400
          </MenuItem>
        </TextField>
      </div>
      <div style={{ marginRight: "15px" }}>
        <span style={{ marginRight: "5px" }}>Time Horizon: </span>
        <TextField
          name={"timeHorizon"}
          select
          size="small"
          value={2}
          onChange={(v) => console.log(v)}
          className={styles.textField}
          style={{ width: "100%", padding: "0px" }}
        >
          <MenuItem key={1} value={2}>
            2
          </MenuItem>
        </TextField>
      </div>
      <div style={{ marginRight: "15px" }}>
        <span style={{ marginRight: "5px" }}>Rate: </span>
        <TextField
          name={"rate"}
          select
          size="small"
          value={"nominal"}
          onChange={(v) => console.log(v)}
          className={styles.textField}
          style={{ width: "100%", padding: "0px" }}
        >
          <MenuItem key={1} value={"nominal"}>
            Nominal
          </MenuItem>
        </TextField>
      </div>
      <div style={{ marginRight: "15px" }}>
        <span style={{ marginRight: "5px" }}>Add Inflation: </span>
        <TextField
          name={"addInflation"}
          select
          size="small"
          value={"no"}
          onChange={(v) => console.log(v)}
          className={styles.textField}
          style={{ width: "100%", padding: "0px" }}
        >
          <MenuItem key={1} value={"no"}>
            No
          </MenuItem>
        </TextField>
      </div>
    </div>
  );
  const riskVsReturnField = () => (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ marginRight: "15px" }}>
        <span style={{ marginRight: "5px" }}>Select a measure: </span>
        <TextField
          name={"measure"}
          select
          size="small"
          value={"maxDrawdown"}
          onChange={(v) => console.log(v)}
          className={styles.textField}
          style={{ width: "100%", padding: "0px" }}
        >
          <MenuItem key={1} value={"maxDrawdown"}>
            Max Drawdown
          </MenuItem>
        </TextField>
      </div>
      <div style={{ marginRight: "15px" }}>
        <span style={{ marginRight: "5px" }}>Time Horizon: </span>
        <TextField
          name={"timeHorizon"}
          select
          size="small"
          value={20}
          onChange={(v) => console.log(v)}
          className={styles.textField}
          style={{ width: "100%", padding: "0px" }}
        >
          <MenuItem key={1} value={20}>
            20 years
          </MenuItem>
        </TextField>
      </div>
      <div style={{ marginRight: "15px" }}>
        <span style={{ marginRight: "5px" }}>Rate Type: </span>
        <TextField
          name={"rateType"}
          select
          size="small"
          value={"nominal"}
          onChange={(v) => console.log(v)}
          className={styles.textField}
          style={{ width: "100%", padding: "0px" }}
        >
          <MenuItem key={1} value={"nominal"}>
            Nominal
          </MenuItem>
        </TextField>
      </div>
    </div>
  );
  const riskAdjustedField = () => (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ marginRight: "15px" }}>
        <span style={{ marginRight: "5px" }}>Select a measure: </span>
        <TextField
          name={"measure"}
          select
          size="small"
          value={"soritinoRatio"}
          onChange={(v) => console.log(v)}
          className={styles.textField}
          style={{ width: "100%", padding: "0px" }}
        >
          <MenuItem key={1} value={"soritinoRatio"}>
            Sortino Ratio
          </MenuItem>
        </TextField>
      </div>
      <div style={{ marginRight: "15px" }}>
        <span style={{ marginRight: "5px" }}>Time Horizon: </span>
        <TextField
          name={"timeHorizon"}
          select
          size="small"
          value={20}
          onChange={(v) => console.log(v)}
          className={styles.textField}
          style={{ width: "100%", padding: "0px" }}
        >
          <MenuItem key={1} value={20}>
            20 years
          </MenuItem>
        </TextField>
      </div>
    </div>
  );
  const toggleSidebarOnPhone = () => {
    setDisplaySidebar(!displaySidebar);
  };
  return (
    <Layout
      nextUrl={"/coming-soon"}
      toggleSidebarOnPhone={toggleSidebarOnPhone}
      phoneSidebarOpen={displaySidebar}
    >
      <PageHeader
        parentHeading={
          <Link href="/investing-plan/investment-strategies/analysis-method-overview-bottomup">
            Strategy Models
          </Link>
        }
        childHeading="Investor Profile"
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
          activeHeadingId={6}
          activeSubheadingId={6.2}
          sidebarStyle={{
            left: displaySidebar ? "0px" : "-1000px",
          }}
        />
        <div>
          <TableOfContent links={links} />
          <div className={styles.contentContainer}>
            <div
              className={styles.content}
              id="profile"
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
              }}
            >
              <div style={{ marginRight: "20px" }}>
                <h1>Warren Buffett profile</h1>
                <p>
                  Warren Buffett is the most respected and successful investor
                  in history, having been called &quot;The Oracle of Omaha&quot;
                  for his impressive investing prowess. Buffett studied under
                  the legendary Benjamin Graham at Columbia University; Graham
                  had a major impact on Buffett&apos;s life and investment
                  strategies. Buffett is Chairman of the miraculous Berkshire
                  Hathaway, which he built from a textile company into a major
                  insurance conglomerate.
                </p>
              </div>
              <div>
                <h1>Warren Buffett philosophy</h1>
                <p>
                  Warren Buffett follows a value investing strategy that is an
                  adaptation of Benjamin Graham&apos;s approach. His investment
                  strategy of discipline, patience and value consistently
                  outperforms the market and his moves are followed by thousands
                  of investors worldwide. Buffett seeks to acquire great
                  companies trading at a discount to their intrinsic value, and
                  to hold them for a long time. Berkshire invests only in
                  businesses that Buffett understands, and always insists on a
                  margin of safety. Regarding the types of businesses Berkshire
                  likes to purchase, Buffett stated, &quot;We want businesses to
                  be one (a) that we can understand; (b) with favorable
                  long-term prospects; (c) operated by honest and competent
                  people; and (d) available at a very attractive price.&quot;
                </p>
              </div>
            </div>
            {/*  */}
            <div className={styles.content} id="strategy-model">
              <h1>Strategy Models</h1>
              <div
                className={styles.content}
                style={{ width: "calc(100vw - 450px)" }}
              >
                <GroupedColumnsTable
                  parentCols={[
                    { value: "Location", span: 2 },
                    { value: "Return %", span: 4 },
                    { value: "Risk %", span: 3 },
                    { value: "Risk adjusted return %", span: 4 },
                  ]}
                  rows={[]}
                  columns={[
                    {
                      id: "region",
                      label: "Region",
                      align: "left",
                    },
                    {
                      id: "country",
                      label: "Country",
                      align: "left",
                    },

                    {
                      id: "annualizeReturn",
                      label: "Annualize Return",
                      align: "left",
                    },
                    {
                      id: "rollingReturn",
                      label: "Rolling Return",
                      align: "left",
                    },
                    {
                      id: "bestReturn",
                      label: "Best Return",
                      align: "left",
                    },
                    {
                      id: "worstReturn",
                      label: "Worst Return",
                      align: "left",
                    },
                    {
                      id: "standardDeviation",
                      label: "Standard Deviation",
                      align: "left",
                    },
                    {
                      id: "downsideDeviation",
                      label: "Downside Deviation",
                      align: "left",
                    },
                    {
                      id: "maxDrawdown",
                      label: "Max Drawdown",
                      align: "left",
                    },

                    {
                      id: "annReturn",
                      label: "Ann.ret/STD",
                      align: "left",
                    },
                    {
                      id: "annReturn2",
                      label: "Ann.ret/MDD",
                      align: "left",
                    },
                    {
                      id: "sharpeRation",
                      label: "Sharpe Ratio",
                      align: "left",
                    },
                    {
                      id: "sordinoRatio",
                      label: "Sortino Ratio",
                      align: "left",
                    },
                  ]}
                />
              </div>
            </div>
            {/*  */}
            <div className={styles.content} id="buffet-hagstrom-screen">
              <h1>Buffett Hagstrom screen</h1>
              <p
                style={{
                  backgroundColor: "#f2f2f2",
                  padding: "10px 25px",
                }}
              >
                Buffett Hagstrom screen represent is an interpretation of the
                Warren Buffett investment approach described by Robert Hagstrom
                in  ’’ The Essential Buffett: Timeless Principles for the New
                Economy’’. Hagstrom argues that it is possible to duplicate
                Buffett’s approach within your personal area of expertise. He
                presents the approach through an accessible series of questions
                that should be explored with any potential investment.
              </p>
            </div>
            {/*  */}
            <div className={styles.content} id="breakdown">
              <h1>Selection criterias Measures and Categories breakdown</h1>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <div style={{ width: "250px", marginRight: "20px" }}>
                  <PieChart
                    data={{
                      labels: [
                        "Company Performance Measures",
                        "Company Risk Measures",
                      ],
                      datasets: [
                        {
                          label: "",
                          data: [100, 200],
                          backgroundColor: ["#ec7d31", "#407879"],
                          hoverOffset: 4,
                        },
                      ],
                    }}
                  />
                </div>
                <div
                  style={{
                    width: "800px",
                  }}
                >
                  <BreakdownChart
                    years={breakdowns}
                    returns={breakdowns.map((t) =>
                      Math.random() > 0.5
                        ? Math.random() * 100
                        : Math.random() * -100
                    )}
                  />
                </div>
              </div>
            </div>
            {/* add here */}
            {/* <CustomTable
                primary={true}
                columns={["Income sources", "Description"]}
                rows={[
                  {
                    first: "Salary, Wages",
                    second:
                      "Salaries, Wages and bonuses received from employment or self-employment, Workers’ Compensation.",
                  },
                  {
                    first: "Business income",
                    second: "Income from side economic activities.",
                  },
                  {
                    first: "Financial income",
                    second:
                      "Interest Income (e.g. Certificate of Deposit, Checking Account, Savings Account), Dividends and distributions received from investments, Rental receipts from real estate investments, Capital gain from investment, Proceeds from Life Insurance, Profit sharing from businesses",
                  },
                  {
                    first: "Other income sources",
                    second:
                      "Royalties, pensions, Inheritance, Workers’ Compensation, Gifts, Voluntary Benefits.",
                  },
                ]}
              /> */}

            <div className={styles.content} id="screen">
              <div
                className={styles.content}
                style={{ width: "calc(100vw - 450px)" }}
              >
                <GroupedColumnsTable
                  style={{
                    maxHeight: "600px",
                  }}
                  parentCols={[
                    {
                      value: "Screen Focus Area / Receipt Expectations",
                      span: 8,
                    },
                  ]}
                  rows={[
                    {
                      receipt: "Banker",
                      solvency: getStars(1),
                      liquidity: getStars(0),
                      profitability: getStars(),
                      independence: getStars(),
                      risk: getStars(1),
                      valuation: getStars(),
                      return: getStars(),
                    },
                    {
                      receipt: "Lender",
                      solvency: getStars(1),
                      liquidity: getStars(0),
                      profitability: getStars(),
                      independence: getStars(),
                      risk: getStars(1),
                      valuation: getStars(),
                      return: getStars(),
                    },
                    {
                      receipt: "Shareholder",
                      solvency: getStars(),
                      liquidity: getStars(),
                      profitability: getStars(3),
                      independence: getStars(),
                      risk: getStars(1),
                      valuation: getStars(1),
                      return: getStars(0),
                    },
                    {
                      receipt: "Investor",
                      solvency: getStars(),
                      liquidity: getStars(),
                      profitability: getStars(3),
                      independence: getStars(0),
                      risk: getStars(1),
                      valuation: getStars(1),
                      return: getStars(0),
                    },
                    {
                      receipt: "Management",
                      solvency: getStars(),
                      liquidity: getStars(),
                      profitability: getStars(3),
                      independence: getStars(),
                      risk: getStars(1),
                      valuation: getStars(1),
                      return: getStars(),
                    },
                    {
                      receipt: "Employee",
                      solvency: getStars(),
                      liquidity: getStars(),
                      profitability: getStars(3),
                      independence: getStars(),
                      risk: getStars(1),
                      valuation: getStars(),
                      return: getStars(),
                    },
                    {
                      receipt: "Peers",
                      solvency: getStars(1),
                      liquidity: getStars(0),
                      profitability: getStars(3),
                      independence: getStars(0),
                      risk: getStars(1),
                      valuation: getStars(1),
                      return: getStars(),
                    },
                    {
                      receipt: "Analyst",
                      solvency: getStars(1),
                      liquidity: getStars(0),
                      profitability: getStars(3),
                      independence: getStars(0),
                      risk: getStars(1),
                      valuation: getStars(1),
                      return: getStars(0),
                    },
                  ]}
                  columns={[
                    {
                      id: "receipt",
                      label: "Receipt",
                      align: "left",
                    },
                    {
                      id: "solvency",
                      label: "Solvency",
                      align: "left",
                    },
                    {
                      id: "liquidity",
                      label: "Liquidity",
                      align: "left",
                    },
                    {
                      id: "profitability",
                      label: "Profitability",
                      align: "left",
                    },
                    {
                      id: "independence",
                      label: "Independence",
                      align: "left",
                    },
                    {
                      id: "risk",
                      label: "Risk",
                      align: "left",
                    },
                    {
                      id: "valuation",
                      label: "Valuation",
                      align: "left",
                    },
                    {
                      id: "return",
                      label: "Return",
                      align: "left",
                    },
                  ]}
                />
              </div>
            </div>

            {/*  */}
            <div className={styles.content} id="screen">
              <h1>Screen</h1>
              <div
                className={styles.content}
                style={{ width: "calc(100vw - 450px)" }}
              >
                <GroupedColumnsTable
                  parentCols={[
                    { value: "Selection criteria", span: 3 },
                    { value: "", span: 3 },
                  ]}
                  rows={[]}
                  columns={[
                    {
                      id: "mesure",
                      label: "Mesure",
                      align: "left",
                    },
                    {
                      id: "category",
                      label: "Category",
                      align: "left",
                    },
                    {
                      id: "metric",
                      label: "Metric",
                      align: "left",
                    },
                    {
                      id: "description",
                      label: "Description",
                      align: "left",
                    },
                    {
                      id: "range",
                      label: "Range",
                      align: "left",
                    },
                    {
                      id: "interpretation",
                      label: "Interpretation",
                      align: "left",
                    },
                  ]}
                />
              </div>
            </div>
            {/*  */}
            <div className={styles.content} id="companies-passing-criteria">
              <h1>Companies passing criterias: 10</h1>
              <div
                className={styles.content}
                style={{ width: "calc(100vw - 450px)" }}
              >
                <GroupedColumnsTable
                  parentCols={[
                    { value: "Company Profile", span: 5 },
                    { value: "Selection Criteria", span: 10 },
                  ]}
                  rows={[
                    {
                      companyName: (
                        <Link
                          href="/investing-plan/investment-strategies/investor-profile-financial-analysis"
                          style={{
                            color: "#1890ff",
                            whiteSpace: "nowrap",
                            cursor: "pointer",
                          }}
                        >
                          Danone SA
                        </Link>
                      ),
                      ticker: "AAPL",
                      exchange: "NASDAQ",
                      sector: "Technology",
                      industry: "Consumer Electronics",
                      roeTtm: "0.92",
                      indRoeY1: "0.92",
                      "5Roy": "0.92",
                      npmTtm: "0.92",
                      indNpmY1: "0.92",
                      "5Npm": "0.92",
                    },
                  ]}
                  columns={[
                    {
                      id: "companyName",
                      label: "Company Name",
                      align: "left",
                    },
                    {
                      id: "ticker",
                      label: "Ticker",
                      align: "left",
                    },
                    {
                      id: "exchange",
                      label: "Exchange",
                      align: "left",
                    },
                    {
                      id: "sector",
                      label: "Sector",
                      align: "left",
                    },
                    {
                      id: "industry",
                      label: "Industry",
                      align: "left",
                    },
                    {
                      id: "roeTtm",
                      label: "ROE TTM",
                      align: "left",
                    },
                    {
                      id: "indRoeY1",
                      label: "Ind. ROE - Y1",
                      align: "left",
                    },
                    {
                      id: "5Roy",
                      label: "5Y ROE",
                      align: "left",
                    },
                    {
                      id: "npmTtm",
                      label: "NPM TTM",
                      align: "left",
                    },
                    {
                      id: "indNpmTtm",
                      label: "Ind. NPM TTM",
                      align: "left",
                    },
                    {
                      id: "pe",
                      label: "PE",
                      align: "left",
                    },
                    {
                      id: "price",
                      label: "Price / FCFPS",
                      align: "left",
                    },
                    {
                      id: "pfcf",
                      label: "PFCF / FCF growth",
                      align: "left",
                    },
                    {
                      id: "cfGrowth",
                      label: "5Y FCF growth",
                      align: "left",
                    },
                  ]}
                />
              </div>
            </div>
            {/*  */}
            <div className={styles.content} id="return-risk-overview">
              <h1>Companies passing criterias breakdown</h1>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ width: "250px", marginRight: "20px" }}>
                  <PieChart
                    data={{
                      labels: ["Paris"],
                      datasets: [
                        {
                          label: "",
                          data: [100],
                          backgroundColor: ["#4472c4"],
                          hoverOffset: 4,
                        },
                      ],
                    }}
                  />
                </div>
                <div style={{ width: "300px", marginRight: "20px" }}>
                  <PieChart
                    data={{
                      labels: [
                        "Financial Services",
                        "Basic Materials",
                        "Industrials",
                        "Consumer Defensive",
                        "Technology",
                      ],
                      datasets: [
                        {
                          label: "",
                          data: [100, 300, 200, 200, 300],
                          backgroundColor: [
                            "#4472c4",
                            "#5b9ad5",
                            "#ffbf00",
                            "#a5a5a5",
                            "#ec7d31",
                          ],
                          hoverOffset: 4,
                        },
                      ],
                    }}
                  />
                </div>
                <div style={{ width: "250px" }}>
                  <PieChart
                    data={{
                      labels: ["Large Cap", "Mid Cap", "Mega Cap"],
                      datasets: [
                        {
                          label: "",
                          data: [100, 300, 200],
                          backgroundColor: ["#4472c4", "#5b9ad5", "#ffbf00"],
                          hoverOffset: 4,
                        },
                      ],
                    }}
                  />
                </div>
              </div>
            </div>
            {/*  */}
            <div className={styles.content} id="return-risk-overview">
              <h1>Companies passing criterias return and risk overview</h1>
              <div
                className={styles.content}
                style={{ width: "calc(100vw - 450px)" }}
              >
                <GroupedColumnsTable
                  parentCols={[
                    { value: "Location", span: 2 },
                    { value: "Return %", span: 4 },
                    { value: "Risk %", span: 3 },
                    { value: "Risk adjusted return %", span: 4 },
                  ]}
                  rows={[]}
                  columns={[
                    {
                      id: "region",
                      label: "Region",
                      align: "left",
                    },
                    {
                      id: "country",
                      label: "Country",
                      align: "left",
                    },

                    {
                      id: "annualizeReturn",
                      label: "Annualize Return",
                      align: "left",
                    },
                    {
                      id: "rollingReturn",
                      label: "Rolling Return",
                      align: "left",
                    },
                    {
                      id: "bestReturn",
                      label: "Best Return",
                      align: "left",
                    },
                    {
                      id: "worstReturn",
                      label: "Worst Return",
                      align: "left",
                    },
                    {
                      id: "standardDeviation",
                      label: "Standard Deviation",
                      align: "left",
                    },
                    {
                      id: "downsideDeviation",
                      label: "Downside Deviation",
                      align: "left",
                    },
                    {
                      id: "maxDrawdown",
                      label: "Max Drawdown",
                      align: "left",
                    },

                    {
                      id: "annReturn",
                      label: "Ann.ret/STD",
                      align: "left",
                    },
                    {
                      id: "annReturn2",
                      label: "Ann.ret/MDD",
                      align: "left",
                    },
                    {
                      id: "sharpeRation",
                      label: "Sharpe Ratio",
                      align: "left",
                    },
                    {
                      id: "sordinoRatio",
                      label: "Sortino Ratio",
                      align: "left",
                    },
                  ]}
                />
              </div>
            </div>
            {/*  */}
            <div className={styles.content} id="annualized-return">
              <h1>Strategy models Annualized Returns</h1>
              <div style={{ margin: "15px 0" }}>{capitalBacktestFields()}</div>
              <GlobalMarketAnnualizedChart
                years={mockYears}
                IVFValues={mockYears.map((t) => Math.random() * 100)}
                IVKValues={mockYears.map((t) => Math.random() * 100)}
                IYWValues={mockYears.map((t) => Math.random() * 100)}
                FYZValues={mockYears.map((t) => Math.random() * 100)}
                GSPCValues={mockYears.map((t) => Math.random() * 100)}
              />
              <div
                className={styles.content}
                style={{ width: "calc(100vw - 450px)" }}
              >
                <GroupedColumnsTable
                  parentCols={[
                    { value: "Location", span: 2 },
                    { value: "Yearly Return %", span: 11 },
                  ]}
                  rows={[]}
                  columns={[
                    {
                      id: "region",
                      label: "Region",
                      align: "left",
                    },
                    {
                      id: "country",
                      label: "Country",
                      align: "left",
                    },
                    {
                      id: "2012",
                      label: "2012",
                      align: "left",
                    },
                    {
                      id: "2013",
                      label: "2013",
                      align: "left",
                    },
                    {
                      id: "2014",
                      label: "2014",
                      align: "left",
                    },
                    {
                      id: "2015",
                      label: "2015",
                      align: "left",
                    },
                    {
                      id: "2016",
                      label: "2016",
                      align: "left",
                    },
                    {
                      id: "2017",
                      label: "2017",
                      align: "left",
                    },
                    {
                      id: "2018",
                      label: "2018",
                      align: "left",
                    },
                    {
                      id: "2019",
                      label: "2019",
                      align: "left",
                    },
                    {
                      id: "2020",
                      label: "2020",
                      align: "left",
                    },
                    {
                      id: "2021",
                      label: "2021",
                      align: "left",
                    },
                    {
                      id: "2022",
                      label: "2022",
                      align: "left",
                    },
                  ]}
                />
              </div>
            </div>
            {/*  */}
            <div className={styles.content} id="backtest">
              <h1>Strategy models Capital Growth -Backtest</h1>
              <div style={{ margin: "15px 0" }}>{capitalBacktestFields()}</div>
              <GlobalMarketAnnualizedChart
                years={mockYears}
                IVFValues={mockYears.map((t) => Math.random() * 100)}
                IVKValues={mockYears.map((t) => Math.random() * 100)}
                IYWValues={mockYears.map((t) => Math.random() * 100)}
                FYZValues={mockYears.map((t) => Math.random() * 100)}
                GSPCValues={mockYears.map((t) => Math.random() * 100)}
              />
              <div
                className={styles.content}
                style={{ width: "calc(100vw - 450px)" }}
              >
                <GroupedColumnsTable
                  parentCols={[
                    { value: "Location", span: 2 },
                    { value: "Yearly Return %", span: 11 },
                  ]}
                  rows={[]}
                  columns={[
                    {
                      id: "region",
                      label: "Region",
                      align: "left",
                    },
                    {
                      id: "country",
                      label: "Country",
                      align: "left",
                    },
                    {
                      id: "2012",
                      label: "2012",
                      align: "left",
                    },
                    {
                      id: "2013",
                      label: "2013",
                      align: "left",
                    },
                    {
                      id: "2014",
                      label: "2014",
                      align: "left",
                    },
                    {
                      id: "2015",
                      label: "2015",
                      align: "left",
                    },
                    {
                      id: "2016",
                      label: "2016",
                      align: "left",
                    },
                    {
                      id: "2017",
                      label: "2017",
                      align: "left",
                    },
                    {
                      id: "2018",
                      label: "2018",
                      align: "left",
                    },
                    {
                      id: "2019",
                      label: "2019",
                      align: "left",
                    },
                    {
                      id: "2020",
                      label: "2020",
                      align: "left",
                    },
                    {
                      id: "2021",
                      label: "2021",
                      align: "left",
                    },
                    {
                      id: "2022",
                      label: "2022",
                      align: "left",
                    },
                  ]}
                />
              </div>
            </div>
            {/*  */}
            <div className={styles.content} id="rolling-return">
              <h1>Strategy models Rolling return</h1>
              <div style={{ margin: "15px 0" }}>{capitalBacktestFields()}</div>
              <RollingReturnChart
                years={types}
                returns={types.map((t) =>
                  Math.random() > 0.5
                    ? Math.random() * 100
                    : Math.random() * -100
                )}
              />
              <div
                className={styles.content}
                style={{ width: "calc(100vw - 450px)" }}
              >
                <GroupedColumnsTable
                  parentCols={[
                    { value: "Location", span: 1 },
                    { value: "Rolling Return %", span: 4 },
                  ]}
                  rows={[]}
                  columns={[
                    {
                      id: "sector",
                      label: "Sector",
                      align: "left",
                    },
                    {
                      id: "average",
                      label: "Average",
                      align: "left",
                    },
                    {
                      id: "best",
                      label: "Best",
                      align: "left",
                    },
                    {
                      id: "worst",
                      label: "Worst",
                      align: "left",
                    },
                    {
                      id: "negativePeriods",
                      label: "Negative Periods",
                      align: "left",
                    },
                  ]}
                />
              </div>
            </div>
            {/*  */}
            <div className={styles.content} id="risk-v-return">
              <h1>Strategy models Risk vs Returns</h1>
              <div style={{ margin: "15px 0" }}>{riskVsReturnField()}</div>
              <div className={styles.content}>
                <RiskVReturnChat
                  years={rvrData}
                  dataset={[
                    {
                      label: "US Stocks",
                      data: Array.from({ length: rvrData.length }, () => ({
                        x: faker.number.int({ min: -100, max: 100 }),
                        y: faker.number.int({ min: -100, max: 100 }),
                        r: faker.number.int({ min: 5, max: 20 }),
                      })),
                      borderColor: "purple",
                      backgroundColor: "purple",
                    },
                    {
                      label: "Bonds",
                      data: Array.from({ length: rvrData.length }, () => ({
                        x: faker.number.int({ min: -100, max: 100 }),
                        y: faker.number.int({ min: -100, max: 100 }),
                        r: faker.number.int({ min: 5, max: 20 }),
                      })),
                      borderColor: "red",
                      backgroundColor: "red",
                    },
                    {
                      label: "T.Bills",
                      data: Array.from({ length: rvrData.length }, () => ({
                        x: faker.number.int({ min: -100, max: 100 }),
                        y: faker.number.int({ min: -100, max: 100 }),
                        r: faker.number.int({ min: 5, max: 20 }),
                      })),
                      borderColor: "yellow",
                      backgroundColor: "yellow",
                    },
                    {
                      label: "REIT",
                      data: Array.from({ length: rvrData.length }, () => ({
                        x: faker.number.int({ min: -100, max: 100 }),
                        y: faker.number.int({ min: -100, max: 100 }),
                        r: faker.number.int({ min: 5, max: 20 }),
                      })),
                      borderColor: "lightblue",
                      backgroundColor: "lightblue",
                    },
                    {
                      label: "Gold",
                      data: Array.from({ length: rvrData.length }, () => ({
                        x: faker.number.int({ min: -100, max: 100 }),
                        y: faker.number.int({ min: -100, max: 100 }),
                        r: faker.number.int({ min: 5, max: 20 }),
                      })),
                      borderColor: "gold",
                      backgroundColor: "gold",
                    },
                    {
                      label: "Cash",
                      data: Array.from({ length: rvrData.length }, () => ({
                        x: faker.number.int({ min: -100, max: 100 }),
                        y: faker.number.int({ min: -100, max: 100 }),
                        r: faker.number.int({ min: 5, max: 20 }),
                      })),
                      borderColor: "green",
                      backgroundColor: "green",
                    },
                  ]}
                />
              </div>
              <CustomTable
                primary={true}
                columns={[
                  "Asset Family",
                  "Asset Category",
                  "Asset Classes",
                  "Annual STD",
                  "Risk Level",
                ]}
                rows={[]}
              />
            </div>
            {/*  */}
            <div className={styles.content} id="adjusted-return">
              <h1>Strategy models Risk adjusted return</h1>
              <div style={{ margin: "15px 0" }}>{riskVsReturnField()}</div>
              <div className={styles.content}>
                <BarChart
                  options={{
                    plugins: {},
                    responsive: true,
                    indexAxis: "x",
                  }}
                  data={{
                    labels: [""],
                    datasets: [
                      {
                        label: "Buffet Hagstrom",
                        data: mockYears.map(() =>
                          faker.number.int({ min: -100, max: 100 })
                        ),
                        backgroundColor: "purple",
                      },

                      {
                        label: "Buffetology",
                        data: mockYears.map(() =>
                          faker.number.int({ min: -100, max: 100 })
                        ),
                        backgroundColor: "red",
                      },
                      {
                        label: "Dreman Screen",
                        data: mockYears.map(() =>
                          faker.number.int({ min: -100, max: 100 })
                        ),
                        backgroundColor: "gray",
                      },
                      {
                        label: "Phillip Fisher Screen",
                        data: mockYears.map(() =>
                          faker.number.int({ min: -100, max: 100 })
                        ),
                        backgroundColor: "lightblue",
                      },
                      {
                        label: "Defensive Investor",
                        data: mockYears.map(() =>
                          faker.number.int({ min: -100, max: 100 })
                        ),
                        backgroundColor: "gold",
                      },
                      {
                        label: "Enterprise Investor",
                        data: mockYears.map(() =>
                          faker.number.int({ min: -100, max: 100 })
                        ),
                        backgroundColor: "green",
                      },
                    ],
                  }}
                />
              </div>
              <CustomTable
                primary={true}
                columns={[
                  "Asset Family",
                  "Asset Category",
                  "Asset Classes",
                  "Sharpe Ratio",
                ]}
                rows={[]}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Index;
