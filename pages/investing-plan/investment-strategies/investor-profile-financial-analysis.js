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

function Index() {
  const [showAlert, setShowAlert] = useState({ show: false, message: "" });
  const [displaySidebar, setDisplaySidebar] = useState(true);
  const [openModal, setOpenModal] = useState(false);

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
          <Link href="/investing-plan/investment-strategies/investor-profile#companies-passing-criteria">
            Companies Passing Criterias
          </Link>
        }
        childHeading="Financial Analysis"
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
          {/* <TableOfContent links={links} /> */}
          <div className={styles.contentContainer}>
            <div className={styles.content} id="strategy-model">
              <h1>Analysis report templates</h1>
              <div
                className={styles.content}
                style={{ width: "calc(100vw - 450px)" }}
              >
                <GroupedColumnsTable
                  parentCols={[
                    { value: "Analysis Models", span: 3 },
                    { value: "Performance analysis weight %", span: 2 },
                    { value: "Risk analysis weight %", span: 2 },
                  ]}
                  rows={[]}
                  columns={[
                    {
                      id: "modelInspiredBy",
                      label: "Model inspired by",
                      align: "left",
                    },
                    {
                      id: "title",
                      label: "Title",
                      align: "left",
                    },

                    {
                      id: "source",
                      label: "Source",
                      align: "left",
                    },
                    {
                      id: "rollingReturn",
                      label: "Rolling Return",
                      align: "left",
                    },
                    {
                      id: "economic",
                      label: "Economic",
                      align: "left",
                    },
                    {
                      id: "financial",
                      label: "Financial",
                      align: "left",
                    },
                    {
                      id: "economic2",
                      label: "Economic",
                      align: "left",
                    },
                    {
                      id: "financial2",
                      label: "Financial",
                      align: "left",
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Index;
