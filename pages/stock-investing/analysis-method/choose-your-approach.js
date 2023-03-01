import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import React, { useState } from "react";
import styles from "@/styles/BasicPage.module.css";
import AlertPopup from "@/components/AlertPopup";
import InvestmentVehicleCard from "@/components/investingPlan/InvestmentVehicleCard";
import InfoModal from "@/components/InfoModal";

const links = [
  {
    name: "TOP DOWN INVESTING",
    img: "https://images.unsplash.com/photo-1643218682956-5f8bf777700c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
    link: "/stock-investing/analysis-method/framework/top-down-analysis/analysis-fundamentals",
  },
  {
    name: "BOTTOM UP INVESTING",
    img: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    link: "/stock-investing/analysis-method/framework/bottom-up-analysis/analysis-fundamentals",
  },
];
function Page() {
  const [showAlert, setShowAlert] = useState({ show: false, message: "" });

  return (
    <Layout>
      <PageHeader
        parentHeading="Stock investing"
        childHeading="Choose your active analysis method "
        // setOpenModal={setOpenModal}
        showMoreInfo={false}
      />
      <AlertPopup
        open={showAlert.show}
        message={showAlert.message}
        handleClose={() => setShowAlert({ show: false, message: "" })}
        severity="error"
      />

      <div className={styles.cardContainer}>
        {links.map((link, key) => (
          <InvestmentVehicleCard
            key={key}
            name={link.name}
            img={link.img}
            link={link.link}
          />
        ))}
      </div>
    </Layout>
  );
}

export default Page;
