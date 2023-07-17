import React, { useRef, useState } from "react";

import AlertPopup from "@/components/AlertPopup";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import InvestingPlanSideNav from "@/components/investingPlan/InvestingPlanSideNav";
import styles from "@/styles/BasicPage.module.css";
import Link from "next/link";
import { MenuItem, OutlinedInput, Select, TextField } from "@mui/material";
import GroupedColumnsTable from "@/components/GroupedColumnsTable";
import CustomTable from "@/components/Table";
import RiskVReturnChart from "@/components/investingPlan/risk-and-return/RiskVReturnChart";
import { faker } from "@faker-js/faker";
import BarChart from "@/components/BarChart";
import TableOfContent from "@/components/TableOfContent";
import NumberWithLabel from "@/components/NumberWithLabel";
import YearlyReturnChart from "@/components/investingPlan/portfolioSettings/YearlyReturnChart";
import { RollingReturnChart } from "@/components/investingPlan/portfolioSettings/RollingReturnChart";
import CapitalGrowthBacktestChart from "@/components/investingPlan/portfolioSettings/CapitalGrowthBacktestChart";
import PieChart from "@/components/PieChart";
import NumberWithLabelBox from "@/components/NumberWithLabelBox";

const mockYears = ["2019", "2020", "2021", "2022", "2023"];
const links = [
  { value: "Model Portfolio Overview", link: "#overview" },
  {
    value: "Historical yearly returns",
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
function WeatherPortfolio() {
  const [showAlert, setShowAlert] = useState({ show: false, message: "" });
  const [displaySidebar, setDisplaySidebar] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [selectedRvR, setSelectedRvR] = useState([]);
  const [selectedRA, setSelectedRA] = useState([]);

  const toggleSidebarOnPhone = () => {
    setDisplaySidebar(!displaySidebar);
  };

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
        <span style={{ marginRight: "5px" }}>Measure </span>
        <TextField
          name={"standardDev"}
          select
          size="small"
          value={2000}
          onChange={(v) => console.log(v)}
          className={styles.textField}
          style={{ width: "100%", padding: "0px" }}
        >
          <MenuItem key={1} value={"standardDev"}>
            Standard Dev
          </MenuItem>
        </TextField>
      </div>
      <div style={{ marginRight: "15px" }}>
        <span style={{ marginRight: "5px" }}>Time Horizon </span>
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
            20
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
      <div
        style={{
          marginRight: "15px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <span style={{ marginRight: "5px" }}>Compare to: </span>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          size="small"
          style={{
            width: "200px",
            padding: "0px",
          }}
          multiple
          value={selectedRvR}
          onChange={(e) => setSelectedRvR(e.target.value)}
          input={<OutlinedInput />}
        >
          {[
            "Stocks",
            "Gold",
            "REIT",
            "Bonds",
            "T.Bills",
            "Cash",
            "Dilbert's Portfolio",
          ].map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </div>
    </div>
  );

  const riskAdjustedReturnField = () => (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ marginRight: "15px" }}>
        <span style={{ marginRight: "5px" }}>Measure </span>
        <TextField
          name={"sharpeRatio"}
          select
          size="small"
          value={2000}
          onChange={(v) => console.log(v)}
          className={styles.textField}
          style={{ width: "100%", padding: "0px" }}
        >
          <MenuItem key={1} value={"sharpeRatio"}>
            Sharpe Ratio
          </MenuItem>
        </TextField>
      </div>
      <div style={{ marginRight: "15px" }}>
        <span style={{ marginRight: "5px" }}>Time Horizon </span>
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
      <div
        style={{
          marginRight: "15px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <span style={{ marginRight: "5px" }}>Compare to: </span>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          size="small"
          style={{
            width: "200px",
            padding: "0px",
          }}
          multiple
          value={selectedRA}
          onChange={(e) => setSelectedRA(e.target.value)}
          input={<OutlinedInput />}
        >
          {[
            "Stocks",
            "Gold",
            "REIT",
            "Bonds",
            "T.Bills",
            "Cash",
            "Dilbert's Portfolio",
          ].map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </div>
    </div>
  );

  return (
    <Layout
      nextUrl={""}
      toggleSidebarOnPhone={toggleSidebarOnPhone}
      phoneSidebarOpen={displaySidebar}
    >
      <PageHeader
        parentHeading={
          <Link href="/investing-plan/portfolio-settings/asset-allocation-model">
            Model Portfolio
          </Link>
        }
        childHeading="All Weather Portfolio"
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
          activeHeadingId={5}
          activeSubheadingId={5.1}
          sidebarStyle={{
            left: displaySidebar ? "0px" : "-1000px",
          }}
        />
        <div>
          <div className={styles.contentContainer}>
            {/* <TableOfContent links={links} /> */}
            <div className={styles.content} id="overview">
              {/* ------------ */}
              <div>
                <p
                  style={{
                    margin: "15px 0",
                  }}
                >
                  <b> Model portfolio:</b> All Weather Portfolio,
                </p>
                <p
                  style={{
                    margin: "15px 0",
                  }}
                >
                  <b>Author:</b> Ray Dalio, the founder and chief investment
                  officer of the world&apos;s largest hedge fund, Bridgewater
                  Associates.
                </p>
                <p
                  style={{
                    margin: "15px 0",
                  }}
                >
                  <b>Portfolio description:</b>
                </p>
                <p
                  style={{
                    margin: "15px 0",
                  }}
                >
                  The All Seasons portfolio is built on the philosophical
                  foundation of Dalio&apos;s All Weather Fund, a popular hedge
                  fund among institutional investors. According to the All
                  Weather Story , the fund&apos;s original purpose was to answer
                  a deceptively simple question: <br />
                  <i>
                    What type of investment portfolio would you hold that would
                    work well in any environment, whether it was a devaluation
                    or something completely different?
                  </i>
                  <br />
                  Dalio and his team at Bridgewater concluded that while
                  individual assets are unpredictable, they respond in
                  understandable ways based on cash flows in the current
                  economic environment. They organized these environments into
                  four quadrants: Growth/Inflation/Falling/Rising.By filling
                  each quadrant with assets that meet each economic condition
                  and balancing asset weights to achieve risk parity for each
                  situation, Dalio has designed a portfolio that can succeed no
                  matter what happens in the markets
                </p>
                <p
                  style={{
                    margin: "15px 0",
                  }}
                >
                  <b>Asset allocation:</b>
                </p>
                <p
                  style={{
                    margin: "15px 0",
                  }}
                >
                  The Ray Dalio All Weather Portfolio has the following assets
                </p>
              </div>
              {/* ------------- */}
              <div className={styles.content}>
                <div
                  style={{
                    display: "flex",
                    marginTop: "20px",
                    alignItems: "center",
                    justifyContent: "space-around",
                    flexwrap: "wrap",
                  }}
                >
                  <div style={{ width: "400px" }}>
                    <PieChart
                      data={{
                        labels: ["Conservative", "Moderate", "Aggresive"],
                        datasets: [
                          {
                            label: "",
                            data: [100, 300, 200],
                            backgroundColor: ["#ccbf90", "#407879", "#cb6843"],
                            hoverOffset: 4,
                          },
                        ],
                      }}
                    />
                  </div>
                  <NumberWithLabelBox
                    data={[
                      {
                        heading: "Stocks",
                        value: "30%",
                        color: "#ccbf90",
                        subValues: ["30% Total Stock Market (VSTAX)"],
                      },
                      {
                        heading: "Stocks",
                        value: "30%",
                        color: "#407879",
                        subValues: [
                          "30% Total Stock Market (VSTAX)",
                          "30% Total Stock Market (VSTAX)",
                        ],
                      },
                      {
                        heading: "Stocks",
                        value: "30%",
                        color: "#cb6843",
                        subValues: ["30% Total Stock Market (VSTAX)"],
                      },
                    ]}
                  />
                </div>
              </div>
              {/* -------------- */}
              <div
                style={{
                  backgroundColor: "#f2f2f2",
                  padding: "10px 25px",
                }}
              >
                <p>
                  <b>Portfolio metrics</b>
                  <br />
                  Portfolio metrics are calculated based on Mutual Funds
                  returns.
                </p>
              </div>
              {/* --------- */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gridTemplateRows: "repeat(2, 1fr)",
                  gap: "20px",
                  marginTop: "20px",
                }}
              >
                <CustomTable
                  primary={true}
                  columns={["All Weather Portfolio performance", "30 Y"]}
                  rows={[]}
                />
                <CustomTable
                  primary={true}
                  columns={["All Weather Portfolio Risk", "20 Y"]}
                  rows={[]}
                />
                <CustomTable
                  primary={true}
                  columns={["Rolling returns"]}
                  rows={[]}
                />
                <CustomTable
                  primary={true}
                  columns={["Risk adjusted return"]}
                  rows={[]}
                />
              </div>
            </div>
            <div className={styles.content} id="yearly-return">
              <h1>Historical Yearly Returns</h1>
              <YearlyReturnChart
                years={mockYears}
                weatherReturn={mockYears.map((t) => Math.random() * 100)}
                inflationAdjustedReturn={mockYears.map(
                  (t) => Math.random() * 100
                )}
              />
              <CustomTable
                style={{ marginTop: "20px" }}
                primary={true}
                columns={["Type", ...mockYears]}
                rows={[]}
              />
            </div>
            <div className={styles.content} id="yearly-return">
              <h1>Rolling Returns</h1>
              <RollingReturnChart
                years={mockYears}
                returns={mockYears.map((t) =>
                  Math.random() > 0.5
                    ? Math.random() * 100
                    : Math.random() * -100
                )}
              />
            </div>
            <div className={styles.content} id="backtest">
              <h1>Capital Growth - Backtest</h1>
              <div style={{ margin: "15px 0" }}>{capitalBacktestFields()}</div>
              <p
                style={{
                  backgroundColor: "#f2f2f2",
                  padding: "10px 25px",
                }}
              >
                An <b>investment of $2,000</b> since 2003 with{" "}
                <b>yearly contribution of $2,400,</b> at <b>nominal rate</b>{" "}
                (rate not adjusted for inflation) now would be $335,520.00
                invested on Stock which granted a{" "}
                <b>annualized nominal return of 9.99%.</b>
              </p>
              <CapitalGrowthBacktestChart
                years={mockYears}
                allWeather={mockYears.map((t) =>
                  Math.random() > 0.5
                    ? Math.random() * 100
                    : Math.random() * -100
                )}
                inflation={mockYears.map((t) =>
                  Math.random() > 0.5
                    ? Math.random() * 100
                    : Math.random() * -100
                )}
              />
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
                  <b> Risk</b> is represented as the annualized{" "}
                  <b>Standard Deviation</b> of average annual returns over{" "}
                  <b>20 years</b>. <br />
                  High values of Standard Deviation mean high fluctuations in
                  prices (high volatility). <br />
                  <b>Stocks</b> have higher return <b>(9.99%)</b> and are the{" "}
                  <b>most volatile assets</b> with a return that deviates by
                  17,63% from its average annual return
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
            </div>
            <div className={styles.content} id="risk-adjusted">
              <h1>Risk Adjusted Return</h1>
              <div style={{ margin: "15px 0" }}>
                {riskAdjustedReturnField()}
              </div>
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
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default WeatherPortfolio;
