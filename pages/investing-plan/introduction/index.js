import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import React, { useState } from "react";
import styles from "@/styles/InvestingPlanIntro.module.css";
import AlertPopup from "@/components/AlertPopup";
import Link from "next/link";
import CustomButton from "@/components/Button";

function Page() {
  const [showAlert, setShowAlert] = useState({ show: false, message: "" });

  return (
    <Layout>
      <PageHeader
        parentHeading="Investing plan"
        childHeading="A roadmap for long term goals"
        showMoreInfo={false}
      />
      <AlertPopup
        open={showAlert.show}
        message={showAlert.message}
        handleClose={() => setShowAlert({ show: false, message: "" })}
        severity="error"
      />

      <div className={styles.container}>
        <p>
          Whether you&apos;re saving for your first car or you want to live
          abroad for a semester, some financial dreams are bigger than others.
          If the money seems out of reach, it may be time to create a plan—or a
          roadmap. Here are some steps you can take:
        </p>
        <p>
          <b>1. Know where you want to go:</b> Define what you want to save for.
          This is called setting a goal. Write your goal down—this small step
          can help you reach it.
        </p>
        <p>
          <b>2. Map it out:</b>
           To figure how to get from point A to point B, write down how much
          money you will need to reach your goal. Then subtract what you already
          have saved.
        </p>
        <p>
          <b>3. Fuel up: </b>Once you have a number in mind, you need a way
          reach it. Whether it&apos;s through a part-time job, allowance, gifts,
          or even starting a small business, making and saving money will take
          work and some time.
        </p>
        <p>
          <b>4. Pack up the car:</b>
           Be sure to sock your money away somewhere safe. If you will need the
          money soon, then a savings or cash management account makes sense. But
          if your goal is going to take a longer time to reach, you may even
          consider investing your money instead.
        </p>
        <p>
          When you have a roadmap, it&apos;s much easier to reach a goal. With a
          plan in hand, you&apos;ll be cruising along in no time.
        </p>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Link href="/investing-plan/financial-goals/set-financial-goals">
            <CustomButton
              style={{
                borderRadius: "50px",
                width: "180px",
                height: "50px",
                fontSize: "18px",
              }}
            >
              <span>Start Now</span>
            </CustomButton>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default Page;
