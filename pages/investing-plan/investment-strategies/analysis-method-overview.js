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

const mockYears = ["2019", "2020", "2021", "2022", "2023"];
function index() {
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
          activeSubheadingId={6.1}
          sidebarStyle={{
            left: displaySidebar ? "0px" : "-1000px",
          }}
        />
        <div>
          <div className={styles.contentContainer}>
            <div className={styles.content}>
              <h1>Global Market Overview</h1>
              <div style={{ margin: "15px 0" }}>{globalMarketFields()}</div>

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
            <div className={styles.content}>
              <h1>Global Markets Annualized Returns</h1>
              <div style={{ margin: "15px 0" }}>
                {returnGlobalMarketsFields()}
              </div>
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

            <div className={styles.content}>
              <h1>Capital growth - Backtest</h1>
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

            <div className={styles.content}>
              <h1>Risk vs Returns</h1>
              <div style={{ margin: "15px 0" }}>{riskVsReturnField()}</div>
              <div
                style={{
                  backgroundColor: "#f2f2f2",
                  padding: "10px 25px",
                }}
              >
                <p>
                  <b>Risk</b> is represented as the <b>Max Drawdown (MDD)</b>{" "}
                  over <b>20 years.</b> <br />
                  Low Risk asset class usually grant less severe drawdowns.{" "}
                  <br />
                  <b>REIT</b> has the <b>largest down movement</b> with a price
                  dropping by 47,31% from the previous peak.
                </p>
              </div>
              <div className={styles.content}>
                <RiskVReturnChart
                  years={mockYears}
                  gold={Array.from({ length: mockYears.length }, () => ({
                    x: faker.number.int({ min: -100, max: 100 }),
                    y: faker.number.int({ min: -100, max: 100 }),
                    r: faker.number.int({ min: 5, max: 20 }),
                  }))}
                  stocks={Array.from({ length: mockYears.length }, () => ({
                    x: faker.number.int({ min: -100, max: 100 }),
                    y: faker.number.int({ min: -100, max: 100 }),
                    r: faker.number.int({ min: 5, max: 20 }),
                  }))}
                  cash={Array.from({ length: mockYears.length }, () => ({
                    x: faker.number.int({ min: -100, max: 100 }),
                    y: faker.number.int({ min: -100, max: 100 }),
                    r: faker.number.int({ min: 5, max: 20 }),
                  }))}
                  tBills={Array.from({ length: mockYears.length }, () => ({
                    x: faker.number.int({ min: -100, max: 100 }),
                    y: faker.number.int({ min: -100, max: 100 }),
                    r: faker.number.int({ min: 5, max: 20 }),
                  }))}
                  reit={Array.from({ length: mockYears.length }, () => ({
                    x: faker.number.int({ min: -100, max: 100 }),
                    y: faker.number.int({ min: -100, max: 100 }),
                    r: faker.number.int({ min: 5, max: 20 }),
                  }))}
                  bonds={Array.from({ length: mockYears.length }, () => ({
                    x: faker.number.int({ min: -100, max: 100 }),
                    y: faker.number.int({ min: -100, max: 100 }),
                    r: faker.number.int({ min: 5, max: 20 }),
                  }))}
                />
              </div>
              <div className={styles.content}>
                <CustomTable
                  primary={true}
                  columns={[
                    "Asset family",
                    "Asset category",
                    "Asset classes",
                    "MDD",
                    "Risk Level",
                  ]}
                  rows={[]}
                />
              </div>
            </div>

            <div className={styles.content}>
              <h1>Risk adjusted return</h1>
              <div style={{ margin: "15px 0" }}>{riskAdjustedField()}</div>
              <div className={styles.content}>
                <BarChart
                  options={{
                    plugins: {},
                    responsive: true,
                    indexAxis: "x",
                  }}
                  //           values.saving,
                  //           values.need,
                  //           values.need - values.saving,
                  data={{
                    labels: [""],
                    datasets: [
                      {
                        label: "US Stocks",
                        data: mockYears.map(() =>
                          faker.number.int({ min: -100, max: 100 })
                        ),
                        backgroundColor: "purple",
                      },

                      {
                        label: "Bonds",
                        data: mockYears.map(() =>
                          faker.number.int({ min: -100, max: 100 })
                        ),
                        backgroundColor: "red",
                      },
                      {
                        label: "T Bills",
                        data: mockYears.map(() =>
                          faker.number.int({ min: -100, max: 100 })
                        ),
                        backgroundColor: "gray",
                      },
                      {
                        label: "REIT",
                        data: mockYears.map(() =>
                          faker.number.int({ min: -100, max: 100 })
                        ),
                        backgroundColor: "lightblue",
                      },
                      {
                        label: "Gold",
                        data: mockYears.map(() =>
                          faker.number.int({ min: -100, max: 100 })
                        ),
                        backgroundColor: "gold",
                      },
                      {
                        label: "Cash",
                        data: mockYears.map(() =>
                          faker.number.int({ min: -100, max: 100 })
                        ),
                        backgroundColor: "green",
                      },
                    ],
                  }}
                />
              </div>
              <div className={styles.content}>
                <CustomTable
                  primary={true}
                  columns={[
                    "Asset family",
                    "Asset category",
                    "Asset classes",
                    "MDD",
                  ]}
                  rows={[]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default index;
