import React, { useState } from "react";

import AlertPopup from "@/components/AlertPopup";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import InvestingPlanSideNav from "@/components/investingPlan/InvestingPlanSideNav";
import styles from "@/styles/BasicPage.module.css";
import Link from "next/link";
import PieChart from "@/components/PieChart";
import NumberWithLabelBox from "@/components/NumberWithLabelBox";
import CustomButton from "@/components/Button";
import GroupedColumnsTable from "@/components/GroupedColumnsTable";

function Allocation() {
  const [showAlert, setShowAlert] = useState({ show: false, message: "" });
  const [displaySidebar, setDisplaySidebar] = useState(true);
  const [openModal, setOpenModal] = useState(false);

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
          activeSubheadingId={5.2}
          sidebarStyle={{
            left: displaySidebar ? "0px" : "-1000px",
          }}
        />
        <div>
          <div className={styles.contentContainer}>
            <div className={styles.content}>
              <h1>Asset Allocation</h1>
              <div
                className={styles.content}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <CustomButton
                  onClick={() => console.log("handle add")}
                  style={{ marginRight: "10px" }}
                >
                  Add a new portfolio
                </CustomButton>
                <CustomButton onClick={() => console.log("handle add")}>
                  Save portfolio
                </CustomButton>
              </div>
              <div
                className={styles.content}
                style={{ width: "calc(100vw - 400px)" }}
              >
                <GroupedColumnsTable
                  parentCols={[
                    { value: "Portfolio", span: 2 },
                    { value: "Allocation %", span: 6 },
                  ]}
                  rows={[]}
                  columns={[
                    {
                      id: "portfolioName",
                      label: "Name",
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
                      id: "cash",
                      label: "Cash",
                      align: "left",
                    },
                  ]}
                />
              </div>
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
                        labels: ["TBM US", "Bonds", "US Stocks", "TSM US"],
                        datasets: [
                          {
                            label: "",
                            data: [20, 20, 80, 80],
                            backgroundColor: [
                              "#ccbf90",
                              "#407879",
                              "#cb6843",
                              "#eee600",
                            ],
                            hoverOffset: 4,
                          },
                        ],
                      }}
                    />
                  </div>
                  <NumberWithLabelBox
                    data={[
                      {
                        heading: "Commodities",
                        value: "20%",
                        color: "#ccbf90",
                        subValues: ["20% Of Total Bond Market"],
                      },
                      {
                        heading: "Fixed Income",
                        value: "80%",
                        color: "#eee600",
                        subValues: ["80% Of Total Stock Market"],
                      },
                      {
                        heading: "Risk Tolerance",
                        value: "Very High",
                        color: "#cb6843",
                        subValues: ["Aggresive Growth"],
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Allocation;
