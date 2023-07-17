import React, { useState } from "react";

import AlertPopup from "@/components/AlertPopup";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import InvestingPlanSideNav from "@/components/investingPlan/InvestingPlanSideNav";
import styles from "@/styles/BasicPage.module.css";
import Link from "next/link";
import { MenuItem, TextField } from "@mui/material";
import NumberWithLabel from "@/components/NumberWithLabel";
import PieChart from "@/components/PieChart";
import ManageInvestmentCard from "@/components/investingPlan/risk-and-return/ManageInvestmentCard";
import TableOfContent from "@/components/TableOfContent";
import Image1 from "../../../public/images/andrew-neel-cckf4TsHAuw-unsplash.jpg";
import { useRouter } from "next/router";

const links = [
  { value: "Risk Tolerance", link: "#tolerance" },
  {
    value: "How do you want to manage your investments ?",
    link: "#manage",
  },
];

const fields = () => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <div style={{ marginRight: "15px" }}>
      <span style={{ marginRight: "5px", display: "block" }}>
        Select the maximum loss are you willing to accept considering the below
        portfolio:{" "}
      </span>
      <TextField
        name={"measure"}
        select
        size="small"
        value={-10}
        onChange={(v) => console.log(v)}
        className={styles.textField}
        style={{ width: "200px", padding: "0px" }}
      >
        <MenuItem key={1} value={-10}>
          -10 %
        </MenuItem>
      </TextField>
    </div>
  </div>
);

function Tolerance() {
  const router = useRouter();
  const [showAlert, setShowAlert] = useState({ show: false, message: "" });
  const [openModal, setOpenModal] = useState(false);

  const [displaySidebar, setDisplaySidebar] = useState(true);
  const toggleSidebarOnPhone = () => {
    setDisplaySidebar(!displaySidebar);
  };
  return (
    <Layout
      nextUrl={"/investing-plan/portfolio-settings/asset-allocation-model"}
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
          activeSubheadingId={4.2}
          sidebarStyle={{
            left: displaySidebar ? "0px" : "-1000px",
          }}
        />
        <div>
          <TableOfContent links={links} />
          <div className={styles.contentContainer}>
            <div className={styles.content}>
              <h1>Risk Tolerance</h1>
              {fields()}
            </div>

            <div className={styles.content} id="tolerance">
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
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    alignItems: "center",
                    justifyContent: "",
                    gridGap: "50px",
                    height: "fit-content",
                  }}
                >
                  <NumberWithLabel
                    labelText={"Portfolio Amount"}
                    mainText={"$ 10,000,000.00"}
                    // tyle={{ borderRight: "1px solid lightgray" }}
                  />
                  <NumberWithLabel
                    labelText={"Amount Loss"}
                    mainText={"$ 10,000,000.00"}
                    // style={{ width: "1px solid lightgray" }}
                  />
                  <NumberWithLabel
                    labelText={"Portfolio after loss"}
                    mainText={"$ 9,000,000.00"}
                    mainTextStyle={{
                      color: "var(--primary-orange)",
                    }}
                    style={
                      {
                        // borderRight: "1px solid lightgray",
                        // paddingLeft: "20px",
                      }
                    }
                  />
                  <NumberWithLabel
                    labelText={"Risk tolerace"}
                    mainText={`Conservative`}
                    mainTextStyle={{
                      color: "var(--secondary-color)",
                    }}
                    // style={{ paddingLeft: "20px" }}
                  />
                </div>
              </div>
            </div>

            <div
              style={{
                backgroundColor: "#f2f2f2",
                padding: "10px 25px",
                marginTop: "20px",
              }}
            >
              <p>
                <b>
                  Choosing where to invest money depends on many factors,
                  including overall investment objectives, risk profile and the
                  time horizon to invest.{" "}
                </b>
              </p>
            </div>

            <div className={styles.content} id="manage">
              <p style={{ fontWeight: "700", fontSize: "18px" }}>
                How do you want to manage your investments ?
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  flexWrap: "wrap",
                }}
              >
                <ManageInvestmentCard
                  img={Image1}
                  t1={"Prefer support from financial advisors"}
                  t2={"You do not have time"}
                  t3={"You may not have a lot of experience or interest"}
                  t4={"Consult a list of investment or wealth advisors"}
                  btnTxt={"Get help to manage my investments"}
                  onClick={() => {
                    router.push("/coming-soon");
                  }}
                />
                <ManageInvestmentCard
                  img={Image1}
                  t1={"You need little or no help managing your investments"}
                  t2={"You regularly spend time on your portfolio"}
                  t3={"You do all your own research"}
                  t4={"You want to see a Model Portfolio"}
                  btnTxt={"Build your own portfolio"}
                  onClick={() => {
                    router.push(
                      "/investing-plan/portfolio-settings/asset-allocation-model"
                    );
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

export default Tolerance;
