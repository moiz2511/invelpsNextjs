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
import NumberWithLabel from "@/components/NumberWithLabel";
import PieChart from "@/components/PieChart";
import NumberWithLabelBox from "@/components/NumberWithLabelBox";
import YearlyReturnChart from "@/components/investingPlan/portfolioSettings/YearlyReturnChart";
import { RollingReturnChart } from "@/components/investingPlan/portfolioSettings/RollingReturnChart";

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
function Asset() {
  const [showAlert, setShowAlert] = useState({ show: false, message: "" });
  const [displaySidebar, setDisplaySidebar] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  const returnModelPortfolioOverviewFields = () => (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ marginRight: "15px" }}>
        <span style={{ marginRight: "5px" }}>Risk Level: </span>
        <TextField
          name={"riskLevel"}
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
          value={30}
          onChange={(v) => console.log(v)}
          className={styles.textField}
          style={{ width: "100%", padding: "0px" }}
        >
          <MenuItem key={1} value={30}>
            30 years
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
          <Link href="/investing-plan/portfolio-settings/set-your-allocation">
            Investing plan
          </Link>
        }
        childHeading="Model Portfolio Overview"
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
            <TableOfContent links={links} />
            <div className={styles.content} id="overview">
              <h1>Model portfolio overview</h1>
              <div style={{ margin: "15px 0" }}>
                {returnModelPortfolioOverviewFields()}
              </div>

              <div
                className={styles.content}
                style={{ width: "calc(100vw - 400px)" }}
              >
                <GroupedColumnsTable
                  parentCols={[
                    { value: "Portfolio", span: 2 },
                    { value: "Allocation %", span: 6 },
                    { value: "Return", span: 2 },
                    { value: "Risk measure", span: 3 },
                    { value: "Risk adjusted", span: 2 },
                    { value: "Risk level", span: 1 },
                  ]}
                  rows={[]}
                  columns={[
                    {
                      id: "portfolioName",
                      label: "Portfolio Name",
                      align: "left",
                    },
                    {
                      id: "author",
                      label: "Author",
                      align: "left",
                    },
                    {
                      id: "stocks",
                      label: "Stocks",
                      align: "left",
                    },
                    {
                      id: "bonds",
                      label: "Bonds",
                      align: "left",
                    },
                    {
                      id: "tBills",
                      label: "T Bills",
                      align: "left",
                    },
                    {
                      id: "gold",
                      label: "Gold",
                      align: "left",
                    },
                    {
                      id: "reit",
                      label: "REIT",
                      align: "left",
                    },
                    {
                      id: "cagrReturn",
                      label: "CAGR Return",
                      align: "left",
                    },
                    {
                      id: "rollingReturn",
                      label: "Rolling Return",
                      align: "left",
                    },
                    {
                      id: "standardDeviation",
                      label: "Standard Dev",
                      align: "left",
                    },
                    {
                      id: "downsideDeviation",
                      label: "Downside Dev",
                      align: "left",
                    },

                    {
                      id: "maxDrawdown",
                      label: "Max Drawdown",
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
                    {
                      id: "riskLevel",
                      label: "Risk Level",
                      align: "left",
                    },
                  ]}
                />
              </div>
              {/* ------------ */}
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
                officer of the world's largest hedge fund, Bridgewater
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
                foundation of Dalio's All Weather Fund, a popular hedge fund
                among institutional investors. According to the All Weather
                Story , the fund's original purpose was to answer a deceptively
                simple question: <br />
                <i>
                  What type of investment portfolio would you hold that would
                  work well in any environment, whether it was a devaluation or
                  something completely different?
                </i>
                <br />
                Dalio and his team at Bridgewater concluded that while
                individual assets are unpredictable, they respond in
                understandable ways based on cash flows in the current economic
                environment. They organized these environments into four
                quadrants: Growth/Inflation/Falling/Rising.By filling each
                quadrant with assets that meet each economic condition and
                balancing asset weights to achieve risk parity for each
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
                returns={mockYears.map((t) => Math.random() * 100)}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Asset;