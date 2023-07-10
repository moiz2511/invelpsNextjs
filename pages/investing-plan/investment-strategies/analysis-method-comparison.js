import React, { useState } from "react";

import AlertPopup from "@/components/AlertPopup";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import InvestingPlanSideNav from "@/components/investingPlan/InvestingPlanSideNav";
import styles from "@/styles/BasicPage.module.css";
import Link from "next/link";
import { MenuItem, Select, TextField } from "@mui/material";
import GroupedColumnsTable from "@/components/GroupedColumnsTable";
import { faker } from "@faker-js/faker";
import BarChart from "@/components/BarChart";
import GlobalMarketAnnualizedChart from "@/components/investingPlan/investment-strategies/GlobalMarketAnnualizedChart";
import ManageInvestmentCard from "@/components/investingPlan/risk-and-return/ManageInvestmentCard";
import { RollingReturnChart } from "@/components/investingPlan/investment-strategies/RollingReturnChart";
import RiskVReturnChat from "@/components/investingPlan/investment-strategies/RiskReturnChart";
import CustomTable from "@/components/Table";
import TableOfContent from "@/components/TableOfContent";

const mockYears = ["2019", "2020", "2021", "2022", "2023"];
const materials = [
  "Basic Materials",
  "Financial Services",
  "Consumer Discretionary",
  "Consumer Staples",
  "Industrials",
  "Technology",
  "Utilities",
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
const links = [
  { value: "USA Sector Overview", link: "#usa-overview" },
  {
    value: "USA Sectors Annualized return per Market Capitalization",
    link: "#usa-market-overview",
  },
  {
    value: "USA Sectors Annualized Returns",
    link: "#usa-annual-return",
  },
  { value: "USA Sectors Capital Growth -Backtest", link: "#usa-backtest" },
  {
    value: "USA Sectors Rolling return",
    link: "#usa-rolling-return",
  },
  {
    value: "USA Sectors Risk vs Returns",
    link: "#usa-risk-v-return",
  },
  {
    value: "USA Sectors Risk adjusted return",
    link: "#usa-risk-adjusted",
  },
];
const links2 = [
  { value: "USA Technology Sector Overview", link: "#usa-tech-overview" },
  {
    value:
      "USA Technology industries annualized return per Market Capitalization",
    link: "#usa-tech-market-overview",
  },
  {
    value: "USA Technology industries Annualized Returns",
    link: "#usa-tech-annual-return",
  },
  {
    value: "USA Technology industries Capital Growth -Backtest",
    link: "#usa-tech-backtest",
  },
  {
    value: "USA Technology industries Rolling return",
    link: "#usa-tech-rolling-return",
  },
  {
    value: "USA Technology industries Risk vs Returns",
    link: "#usa-tech-risk-v-return",
  },
  {
    value: "USA Technology industries Risk adjusted return",
    link: "#usa=tech-risk-adjusted",
  },
];
const links3 = [
  { value: "Strategy models overview", link: "#model-overview" },
  {
    value: "Strategy models Annualized Returns",
    link: "#model-annualized-returns",
  },
  {
    value: "Strategy models Capital Growth-Backtest",
    link: "#model-backtest",
  },
  {
    value: "Strategy models Rolling return",
    link: "#model-rolling-return",
  },
  {
    value: "Strategy models Risk vs Returns",
    link: "#model-risk-v-return",
  },
  {
    value: "Strategy models Risk adjusted return",
    link: "#model-risk-adjusted",
  },
];
function index() {
  const [showAlert, setShowAlert] = useState({ show: false, message: "" });
  const [displaySidebar, setDisplaySidebar] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  const usaMarketFields = () => (
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
      nextUrl={
        "/investing-plan/investment-strategies/analysis-method-comparsion"
      }
      toggleSidebarOnPhone={toggleSidebarOnPhone}
      phoneSidebarOpen={displaySidebar}
    >
      <PageHeader
        parentHeading={<Link href="#">Analysis Method</Link>}
        childHeading="Overview"
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
            <div className={styles.content} id="usa-overview">
              <h1>USA Sector Overview</h1>
              <div style={{ margin: "15px 0" }}>{usaMarketFields()}</div>

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
            <div className={styles.content} id="usa-market-overview">
              <h1>USA Sectors Annualized return per Market Capitalization</h1>
              <div style={{ margin: "15px 0" }}>
                {returnGlobalMarketsFields()}
              </div>
              <div
                className={styles.content}
                style={{ width: "calc(100vw - 450px)" }}
              >
                <GroupedColumnsTable
                  parentCols={[
                    { value: "Sector Weighting", span: 1 },
                    { value: "Return % per Market  Capitalization", span: 7 },
                  ]}
                  rows={[]}
                  columns={[
                    {
                      id: "sectorWeighting",
                      label: "Sector Weighting",
                      align: "left",
                    },
                    {
                      id: "nano",
                      label: "Nano",
                      align: "left",
                    },
                    {
                      id: "micro",
                      label: "Micro",
                      align: "left",
                    },
                    {
                      id: "small",
                      label: "Small",
                      align: "left",
                    },
                    {
                      id: "mid",
                      label: "Mid",
                      align: "left",
                    },
                    {
                      id: "large",
                      label: "Large",
                      align: "left",
                    },
                    {
                      id: "mega",
                      label: "Mega",
                      align: "left",
                    },
                    {
                      id: "all",
                      label: "All",
                      align: "left",
                    },
                  ]}
                />
              </div>
            </div>
            <div className={styles.content} id="usa-annual-return">
              <h1>USA Sectors Annualized Returns</h1>
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
            <div className={styles.content} id="usa-backtest">
              <h1>USA Sectors Capital Growth -Backtest</h1>
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
            <div className={styles.content} id="usa-rolling-return">
              <h1>USA Sectors Rolling return</h1>
              <div style={{ margin: "15px 0" }}>{capitalBacktestFields()}</div>
              <RollingReturnChart
                years={materials}
                returns={materials.map((t) =>
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
            <div className={styles.content} id="usa-risk-v-return">
              <h1>USA Sectors Risk vs Returns</h1>
              <div style={{ margin: "15px 0" }}>{riskVsReturnField()}</div>
              <div className={styles.content}>
                <RiskVReturnChat
                  years={rvrData}
                  dataset={[
                    {
                      label: "Utilities",
                      data: Array.from({ length: rvrData.length }, () => ({
                        x: faker.number.int({ min: -100, max: 100 }),
                        y: faker.number.int({ min: -100, max: 100 }),
                        r: faker.number.int({ min: 5, max: 20 }),
                      })),
                      borderColor: "purple",
                      backgroundColor: "purple",
                    },
                    {
                      label: "Technology",
                      data: Array.from({ length: rvrData.length }, () => ({
                        x: faker.number.int({ min: -100, max: 100 }),
                        y: faker.number.int({ min: -100, max: 100 }),
                        r: faker.number.int({ min: 5, max: 20 }),
                      })),
                      borderColor: "red",
                      backgroundColor: "red",
                    },
                    {
                      label: "Industrials",
                      data: Array.from({ length: rvrData.length }, () => ({
                        x: faker.number.int({ min: -100, max: 100 }),
                        y: faker.number.int({ min: -100, max: 100 }),
                        r: faker.number.int({ min: 5, max: 20 }),
                      })),
                      borderColor: "yellow",
                      backgroundColor: "yellow",
                    },
                    {
                      label: "Consumer Staples",
                      data: Array.from({ length: rvrData.length }, () => ({
                        x: faker.number.int({ min: -100, max: 100 }),
                        y: faker.number.int({ min: -100, max: 100 }),
                        r: faker.number.int({ min: 5, max: 20 }),
                      })),
                      borderColor: "lightblue",
                      backgroundColor: "lightblue",
                    },
                    {
                      label: "Customer Discretionary",
                      data: Array.from({ length: rvrData.length }, () => ({
                        x: faker.number.int({ min: -100, max: 100 }),
                        y: faker.number.int({ min: -100, max: 100 }),
                        r: faker.number.int({ min: 5, max: 20 }),
                      })),
                      borderColor: "gold",
                      backgroundColor: "gold",
                    },
                    {
                      label: "Financials",
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
            <div className={styles.content} id="usa-risk-adjusted">
              <h1>USA Sectors Risk adjusted return</h1>
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
                        label: "Utilities",
                        data: mockYears.map(() =>
                          faker.number.int({ min: -100, max: 100 })
                        ),
                        backgroundColor: "purple",
                      },

                      {
                        label: "Technology",
                        data: mockYears.map(() =>
                          faker.number.int({ min: -100, max: 100 })
                        ),
                        backgroundColor: "red",
                      },
                      {
                        label: "Industrials",
                        data: mockYears.map(() =>
                          faker.number.int({ min: -100, max: 100 })
                        ),
                        backgroundColor: "gray",
                      },
                      {
                        label: "Consumer staples",
                        data: mockYears.map(() =>
                          faker.number.int({ min: -100, max: 100 })
                        ),
                        backgroundColor: "lightblue",
                      },
                      {
                        label: "Consumer discretionary",
                        data: mockYears.map(() =>
                          faker.number.int({ min: -100, max: 100 })
                        ),
                        backgroundColor: "gold",
                      },
                      {
                        label: "Financials",
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
          {/* usa tech */}
          <TableOfContent links={links2} />
          <div className={styles.contentContainer}>
            <div className={styles.content} id="usa-tech-overview">
              <h1>USA Technology Sector Overview</h1>
              <div style={{ margin: "15px 0" }}>{usaMarketFields()}</div>

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
            <div className={styles.content} id="usa-tech-market-overview">
              <h1>
                USA Technology industries annualized return per Market
                Capitalization
              </h1>
              <div style={{ margin: "15px 0" }}>
                {returnGlobalMarketsFields()}
              </div>
              <div
                className={styles.content}
                style={{ width: "calc(100vw - 450px)" }}
              >
                <GroupedColumnsTable
                  parentCols={[
                    { value: "Sector Weighting", span: 1 },
                    { value: "Return % per Market  Capitalization", span: 7 },
                  ]}
                  rows={[]}
                  columns={[
                    {
                      id: "sectorWeighting",
                      label: "Sector Weighting",
                      align: "left",
                    },
                    {
                      id: "nano",
                      label: "Nano",
                      align: "left",
                    },
                    {
                      id: "micro",
                      label: "Micro",
                      align: "left",
                    },
                    {
                      id: "small",
                      label: "Small",
                      align: "left",
                    },
                    {
                      id: "mid",
                      label: "Mid",
                      align: "left",
                    },
                    {
                      id: "large",
                      label: "Large",
                      align: "left",
                    },
                    {
                      id: "mega",
                      label: "Mega",
                      align: "left",
                    },
                    {
                      id: "all",
                      label: "All",
                      align: "left",
                    },
                  ]}
                />
              </div>
            </div>
            <div className={styles.content} id="usa-tech-annual-return">
              <h1>USA Technology industries Annualized Returns</h1>
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
            <div className={styles.content} id="usa-tech-backtest">
              <h1>USA Technology industries Capital Growth -Backtest</h1>
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
            <div className={styles.content} id="usa-tech-rolling-return">
              <h1>USA Technology industries Rolling return</h1>
              <div style={{ margin: "15px 0" }}>{capitalBacktestFields()}</div>
              <RollingReturnChart
                years={materials}
                returns={materials.map((t) =>
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
            <div className={styles.content} id="usa-tech-risk-v-return">
              <h1>USA Technology industries Risk vs Returns</h1>
              <div style={{ margin: "15px 0" }}>{riskVsReturnField()}</div>
              <div className={styles.content}>
                <RiskVReturnChat
                  years={rvrData}
                  dataset={[
                    {
                      label: "Utilities",
                      data: Array.from({ length: rvrData.length }, () => ({
                        x: faker.number.int({ min: -100, max: 100 }),
                        y: faker.number.int({ min: -100, max: 100 }),
                        r: faker.number.int({ min: 5, max: 20 }),
                      })),
                      borderColor: "purple",
                      backgroundColor: "purple",
                    },
                    {
                      label: "Technology",
                      data: Array.from({ length: rvrData.length }, () => ({
                        x: faker.number.int({ min: -100, max: 100 }),
                        y: faker.number.int({ min: -100, max: 100 }),
                        r: faker.number.int({ min: 5, max: 20 }),
                      })),
                      borderColor: "red",
                      backgroundColor: "red",
                    },
                    {
                      label: "Industrials",
                      data: Array.from({ length: rvrData.length }, () => ({
                        x: faker.number.int({ min: -100, max: 100 }),
                        y: faker.number.int({ min: -100, max: 100 }),
                        r: faker.number.int({ min: 5, max: 20 }),
                      })),
                      borderColor: "yellow",
                      backgroundColor: "yellow",
                    },
                    {
                      label: "Consumer Staples",
                      data: Array.from({ length: rvrData.length }, () => ({
                        x: faker.number.int({ min: -100, max: 100 }),
                        y: faker.number.int({ min: -100, max: 100 }),
                        r: faker.number.int({ min: 5, max: 20 }),
                      })),
                      borderColor: "lightblue",
                      backgroundColor: "lightblue",
                    },
                    {
                      label: "Customer Discretionary",
                      data: Array.from({ length: rvrData.length }, () => ({
                        x: faker.number.int({ min: -100, max: 100 }),
                        y: faker.number.int({ min: -100, max: 100 }),
                        r: faker.number.int({ min: 5, max: 20 }),
                      })),
                      borderColor: "gold",
                      backgroundColor: "gold",
                    },
                    {
                      label: "Financials",
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
            <div className={styles.content} id="usa-tech-risk-adjusted">
              <h1>USA Technology industries Risk adjusted return</h1>
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
                        label: "Utilities",
                        data: mockYears.map(() =>
                          faker.number.int({ min: -100, max: 100 })
                        ),
                        backgroundColor: "purple",
                      },

                      {
                        label: "Technology",
                        data: mockYears.map(() =>
                          faker.number.int({ min: -100, max: 100 })
                        ),
                        backgroundColor: "red",
                      },
                      {
                        label: "Industrials",
                        data: mockYears.map(() =>
                          faker.number.int({ min: -100, max: 100 })
                        ),
                        backgroundColor: "gray",
                      },
                      {
                        label: "Consumer staples",
                        data: mockYears.map(() =>
                          faker.number.int({ min: -100, max: 100 })
                        ),
                        backgroundColor: "lightblue",
                      },
                      {
                        label: "Consumer discretionary",
                        data: mockYears.map(() =>
                          faker.number.int({ min: -100, max: 100 })
                        ),
                        backgroundColor: "gold",
                      },
                      {
                        label: "Financials",
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
          {/* bottom up analysis */}
          <TableOfContent links={links3} />
          <div className={styles.contentContainer}>
            <div className={styles.content} id="model-overview">
              <h1>Strategy models overview</h1>
              <div style={{ margin: "15px 0" }}>{usaMarketFields()}</div>

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
            <div className={styles.content} id="model-annualized-returns">
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
            <div className={styles.content} id="model-backtest">
              <h1>Strategy models Capital Growth-Backtest</h1>
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
            <div className={styles.content} id="model-rolling-return">
              <h1>Strategy models Rolling return</h1>
              <div style={{ margin: "15px 0" }}>{capitalBacktestFields()}</div>
              <RollingReturnChart
                years={materials}
                returns={materials.map((t) =>
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
            <div className={styles.content} id="model-risk-v-return">
              <h1>Strategy models Risk vs Returns</h1>
              <div style={{ margin: "15px 0" }}>{riskVsReturnField()}</div>
              <div className={styles.content}>
                <RiskVReturnChat
                  years={rvrData}
                  dataset={[
                    {
                      label: "Utilities",
                      data: Array.from({ length: rvrData.length }, () => ({
                        x: faker.number.int({ min: -100, max: 100 }),
                        y: faker.number.int({ min: -100, max: 100 }),
                        r: faker.number.int({ min: 5, max: 20 }),
                      })),
                      borderColor: "purple",
                      backgroundColor: "purple",
                    },
                    {
                      label: "Technology",
                      data: Array.from({ length: rvrData.length }, () => ({
                        x: faker.number.int({ min: -100, max: 100 }),
                        y: faker.number.int({ min: -100, max: 100 }),
                        r: faker.number.int({ min: 5, max: 20 }),
                      })),
                      borderColor: "red",
                      backgroundColor: "red",
                    },
                    {
                      label: "Industrials",
                      data: Array.from({ length: rvrData.length }, () => ({
                        x: faker.number.int({ min: -100, max: 100 }),
                        y: faker.number.int({ min: -100, max: 100 }),
                        r: faker.number.int({ min: 5, max: 20 }),
                      })),
                      borderColor: "yellow",
                      backgroundColor: "yellow",
                    },
                    {
                      label: "Consumer Staples",
                      data: Array.from({ length: rvrData.length }, () => ({
                        x: faker.number.int({ min: -100, max: 100 }),
                        y: faker.number.int({ min: -100, max: 100 }),
                        r: faker.number.int({ min: 5, max: 20 }),
                      })),
                      borderColor: "lightblue",
                      backgroundColor: "lightblue",
                    },
                    {
                      label: "Customer Discretionary",
                      data: Array.from({ length: rvrData.length }, () => ({
                        x: faker.number.int({ min: -100, max: 100 }),
                        y: faker.number.int({ min: -100, max: 100 }),
                        r: faker.number.int({ min: 5, max: 20 }),
                      })),
                      borderColor: "gold",
                      backgroundColor: "gold",
                    },
                    {
                      label: "Financials",
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
            <div className={styles.content} id="model-risk-adjusted">
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
                        label: "Utilities",
                        data: mockYears.map(() =>
                          faker.number.int({ min: -100, max: 100 })
                        ),
                        backgroundColor: "purple",
                      },

                      {
                        label: "Technology",
                        data: mockYears.map(() =>
                          faker.number.int({ min: -100, max: 100 })
                        ),
                        backgroundColor: "red",
                      },
                      {
                        label: "Industrials",
                        data: mockYears.map(() =>
                          faker.number.int({ min: -100, max: 100 })
                        ),
                        backgroundColor: "gray",
                      },
                      {
                        label: "Consumer staples",
                        data: mockYears.map(() =>
                          faker.number.int({ min: -100, max: 100 })
                        ),
                        backgroundColor: "lightblue",
                      },
                      {
                        label: "Consumer discretionary",
                        data: mockYears.map(() =>
                          faker.number.int({ min: -100, max: 100 })
                        ),
                        backgroundColor: "gold",
                      },
                      {
                        label: "Financials",
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

export default index;
