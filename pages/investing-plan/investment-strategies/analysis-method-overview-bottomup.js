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
function Index() {
  const [showAlert, setShowAlert] = useState({ show: false, message: "" });
  const [displaySidebar, setDisplaySidebar] = useState(true);
  const [openModal, setOpenModal] = useState(false);

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
    </div>
  );

  const toggleSidebarOnPhone = () => {
    setDisplaySidebar(!displaySidebar);
  };

  const usaMarketFields = () => (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ marginRight: "15px" }}>
        <span style={{ marginRight: "5px" }}>Investor: </span>
        <TextField
          name={"investor"}
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
        <span style={{ marginRight: "5px" }}>Strategy: </span>
        <TextField
          name={"strategy"}
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
        <span style={{ marginRight: "5px" }}>Factors: </span>
        <TextField
          name={"factors"}
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
        <span style={{ marginRight: "5px" }}>Time Horizon: </span>
        <TextField
          name={"timeHorizon"}
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
    </div>
  );

  return (
    <Layout
      nextUrl={
        "/investing-plan/investment-strategies/analysis-method-comparison"
      }
      toggleSidebarOnPhone={toggleSidebarOnPhone}
      phoneSidebarOpen={displaySidebar}
    >
      <PageHeader
        parentHeading={
          <Link href="/investing-plan/investment-strategies/analysis-method">
            Analysis Method
          </Link>
        }
        childHeading="Botton Up Analysis"
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
          activeSubheadingId={6.1}
          sidebarStyle={{
            left: displaySidebar ? "0px" : "-1000px",
          }}
        />
        <div>
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
                    { value: "Strategy Models", span: 3 },
                    { value: "Return %", span: 4 },
                    { value: "Risk %", span: 3 },
                    { value: "Risk adjusted return %", span: 4 },
                  ]}
                  rows={[
                    {
                      investor: (
                        <Link
                          href="/investing-plan/investment-strategies/investor-profile"
                          style={{
                            color: "#1890ff",
                            whiteSpace: "nowrap",
                            cursor: "pointer",
                          }}
                        >
                          Warren Buffet
                        </Link>
                      ),
                      strategy: (
                        <Link
                          href="/investing-plan/investment-strategies/investor-profile#strategy-model"
                          style={{
                            color: "#1890ff",
                            whiteSpace: "nowrap",
                            cursor: "pointer",
                          }}
                        >
                          Buffet Hagstrom
                        </Link>
                      ),
                      factors: "V;G;Q",
                      annualizedReturn: "10.00%",
                      rollingReturn: "10.00%",
                      bestReturn: "10.00%",
                      worstReturn: "10.00%",
                      standardDeviation: "10.00%",
                      downsideDeviation: "10.00%",
                      maxDrawDown: "10.00%",
                      sharpeRatio: "10.00%",
                      sortinoRatio: "10.00%",
                      treynorRatio: "10.00%",
                    },
                  ]}
                  columns={[
                    {
                      id: "investor",
                      label: "Investor",
                      align: "left",
                    },
                    {
                      id: "strategy",
                      label: "Strategy",
                      align: "left",
                    },

                    {
                      id: "factors",
                      label: "Factors",
                      align: "left",
                    },
                    {
                      id: "annualizedReturn",
                      label: "Annualized Return",
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

export default Index;
