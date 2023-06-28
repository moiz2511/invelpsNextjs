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
import TableOfContent from "@/components/TableOfContent";

const mockYears = ["2019", "2020", "2021", "2022", "2023"];
const links = [
  { value: "Asset classes return and risk (%)", link: "#return-and-risk" },
  {
    value: "Assets classes yearly return",
    link: "#yearly-return",
  },
  {
    value: "Capital growth - Backtest",
    link: "#backtest",
  },
  { value: "Risk vs Returns", link: "#risk-v-return" },
  {
    value: "Risk adjusted return",
    link: "#risk-adjusted",
  },
];
function Asset() {
  const [showAlert, setShowAlert] = useState({ show: false, message: "" });
  const [displaySidebar, setDisplaySidebar] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  const returnRiskFields = () => (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ marginRight: "15px" }}>
        <span style={{ marginRight: "5px" }}>Rate: </span>
        <TextField
          name={"rate"}
          select
          size="small"
          value={"real-rate"}
          onChange={(v) => console.log(v)}
          className={styles.textField}
          style={{ width: "100%", padding: "0px" }}
        >
          <MenuItem key={1} value={"real-rate"}>
            Real Rate
          </MenuItem>
        </TextField>
      </div>
      <div style={{ marginRight: "15px" }}>
        <span style={{ marginRight: "5px" }}>Period: </span>
        <TextField
          name={"period"}
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
        <span style={{ marginRight: "5px" }}>Assets: </span>
        <TextField
          name={"assets"}
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
    </div>
  );

  const returnRiskYearlyFields = () => (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ marginRight: "15px" }}>
        <span style={{ marginRight: "5px" }}>Rate: </span>
        <TextField
          name={"rate"}
          select
          size="small"
          value={"real-rate"}
          onChange={(v) => console.log(v)}
          className={styles.textField}
          style={{ width: "100%", padding: "0px" }}
        >
          <MenuItem key={1} value={"real-rate"}>
            Real Rate
          </MenuItem>
        </TextField>
      </div>
      <div style={{ marginRight: "15px" }}>
        <span style={{ marginRight: "5px" }}>From: </span>
        <TextField
          name={"from"}
          select
          size="small"
          value={2012}
          onChange={(v) => console.log(v)}
          className={styles.textField}
          style={{ width: "100%", padding: "0px" }}
        >
          <MenuItem key={1} value={2012}>
            2012
          </MenuItem>
        </TextField>
      </div>
      <div style={{ marginRight: "15px" }}>
        <span style={{ marginRight: "5px" }}>To: </span>
        <TextField
          name={"to"}
          select
          size="small"
          value={2022}
          onChange={(v) => console.log(v)}
          className={styles.textField}
          style={{ width: "100%", padding: "0px" }}
        >
          <MenuItem key={1} value={2022}>
            2022
          </MenuItem>
        </TextField>
      </div>
      <div style={{ marginRight: "15px" }}>
        <span style={{ marginRight: "5px" }}>Assets: </span>
        <TextField
          name={"assets"}
          select
          size="small"
          value={"assets"}
          onChange={(v) => console.log(v)}
          className={styles.textField}
          style={{ width: "100%", padding: "0px" }}
        >
          <MenuItem key={1} value={"assets"}>
            Assets
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
      nextUrl={"/investing-plan/risks-and-return/tolerance"}
      toggleSidebarOnPhone={toggleSidebarOnPhone}
      phoneSidebarOpen={displaySidebar}
    >
      <PageHeader
        parentHeading={
          <Link href="/investing-plan/financial-goals/set-financial-goals">
            Investing plan
          </Link>
        }
        childHeading="Risk and Returns"
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
          activeHeadingId={4}
          activeSubheadingId={4.1}
          sidebarStyle={{
            left: displaySidebar ? "0px" : "-1000px",
          }}
        />
        <div>
          <div className={styles.contentContainer}>
            <TableOfContent links={links} />
            <div className={styles.content} id="return-and-risk">
              <h1>Asset classes return and risk (%)</h1>
              <div style={{ margin: "15px 0" }}>{returnRiskFields()}</div>
              <div
                style={{
                  backgroundColor: "#f2f2f2",
                  padding: "10px 25px",
                }}
              >
                <p>
                  The <b>best performing Asset Class</b> in the last <b>20</b>{" "}
                  years is <b>Stock</b>, that granted a +7.30% annualized return
                  adjusted for inflation. It is the <b>most volatile asset</b>{" "}
                  with a return that deviates by <b>17,63%</b> from its average
                  annual return.
                  <br />
                  Returns and risks are calculated based on Mutual Fund
                  replicating those asset classes
                </p>
              </div>
              <div
                className={styles.content}
                style={{ width: "calc(100vw - 400px)" }}
              >
                <GroupedColumnsTable
                  parentCols={[
                    { value: "Assets", span: 4 },
                    { value: "Return %", span: 4 },
                    { value: "Risk %", span: 3 },
                    { value: "Risk adjusted return %", span: 4 },
                  ]}
                  rows={[]}
                  columns={[
                    {
                      id: "family",
                      label: "Family",
                      align: "left",
                    },
                    {
                      id: "broadCategory",
                      label: "Broad Category",
                      align: "left",
                    },
                    {
                      id: "classes",
                      label: "Classes",
                      align: "left",
                    },
                    {
                      id: "asset",
                      label: "Assets",
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
              <div className={styles.content}>
                <CustomAccordion
                  heading={"Terms and defination"}
                  details={
                    <ul style={{ margin: "0 10px" }}>
                      <li style={{ margin: "10px" }}>
                        <b>Annualized Portfolio Return:</b> it's the annualized
                        geometric mean return of the portfolio
                      </li>
                      <li style={{ margin: "10px" }}>
                        <b>Standard Deviation:</b> it's a measure of the
                        dispersion of returns around the mean
                      </li>
                      <li style={{ margin: "10px" }}>
                        <b>Sharpe Ratio:</b> it's a measure of risk-adjusted
                        performance of the portfolio. It's calculated by
                        dividing the excess return of the portfolio over the
                        risk-free rate by the portfolio standard deviation. The
                        risk-free rate here considered is the 1-3 Mth T-Bill
                        return.
                      </li>
                      <li style={{ margin: "10px" }}>
                        <b>Sortino Ratio:</b> another measure of risk-adjusted
                        performance of the portfolio. It's a modification of the
                        Sharpe Ratio (same formula but the denominator is the
                        portfolio downside standard deviation).
                      </li>
                      <li style={{ margin: "10px" }}>
                        <b>Maximum Drawdown:</b> a drawdown refers to the
                        decline in value from a relative peak value to a
                        relative trough. A maximum drawdown is the maximum
                        observed loss from a peak to a trough of a portfolio
                        before a new peak is attained.
                      </li>
                      <li style={{ margin: "10px" }}>
                        <b>Rolling Returns:</b> returns over a time frame (best,
                        worst, % of positive returns).
                      </li>
                    </ul>
                  }
                />
              </div>
            </div>
            <div className={styles.content} id="yearly-return">
              <h1>Assets classes yearly return</h1>
              <div style={{ margin: "15px 0" }}>{returnRiskYearlyFields()}</div>
              <div
                style={{
                  backgroundColor: "#f2f2f2",
                  padding: "10px 25px",
                }}
              >
                <p>
                  The <b>best performing Asset Class</b> in the last <b>20</b>{" "}
                  years is <b>Stock</b>, that granted a +7.30% annualized return
                  adjusted for inflation. It is the <b>most volatile asset</b>{" "}
                  with a return that deviates by <b>17,63%</b> from its average
                  annual return.
                  <br />
                  Returns and risks are calculated based on Mutual Fund
                  replicating those asset classes
                </p>
              </div>
              <div
                className={styles.content}
                style={{ width: "calc(100vw - 400px)" }}
              >
                <GroupedColumnsTable
                  parentCols={[
                    { value: "Assets", span: 4 },
                    { value: "Return %", span: 11 },
                  ]}
                  rows={[]}
                  columns={[
                    {
                      id: "family",
                      label: "Family",
                      align: "left",
                    },
                    {
                      id: "broadCategory",
                      label: "Broad Category",
                      align: "left",
                    },
                    {
                      id: "classes",
                      label: "Classes",
                      align: "left",
                    },
                    {
                      id: "asset",
                      label: "Assets",
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
            <div className={styles.content} id="backtest">
              <h1>Capital growth - Backtest</h1>
              <div style={{ margin: "15px 0" }}>{capitalBacktestFields()}</div>
              <div
                style={{
                  backgroundColor: "#f2f2f2",
                  padding: "10px 25px",
                }}
              >
                <p>
                  An <b>investment of $2,000</b> since 2003 with{" "}
                  <b>yearly contribution of $2,400,</b> at <b>nominal rate</b>{" "}
                  (rate not adjusted for inflation) now would be{" "}
                  <b>$335,520.00</b> invested on <b>Stock</b> which granted a{" "}
                  <b>annualized nominal return of 9.99%.</b>
                </p>
              </div>
              <div className={styles.content}>
                <CapitalGrowthChart
                  years={mockYears}
                  gold={mockYears.map((t) => Math.random() * 100)}
                  stocks={mockYears.map((t) => Math.random() * 100)}
                  cash={mockYears.map((t) => Math.random() * 100)}
                  tBills={mockYears.map((t) => Math.random() * 100)}
                  reit={mockYears.map((t) => Math.random() * 100)}
                  bonds={mockYears.map((t) => Math.random() * 100)}
                />
              </div>
              <div className={styles.content}>
                <CustomTable
                  primary={true}
                  columns={[
                    "Asset family",
                    "Asset category",
                    "Asset classes",
                    "Annualized Return",
                    "End amount",
                  ]}
                  rows={[]}
                />
              </div>
            </div>
            <div className={styles.content} id="risk-v-return">
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
            <div className={styles.content} id="risk-adjusted">
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

export default Asset;
