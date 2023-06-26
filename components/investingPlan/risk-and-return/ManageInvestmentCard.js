import Image from "next/image";
import React from "react";
import styles from "@/styles/ManageInvestmentCard.module.css";

function ManageInvestmentCard({ img, t1, t2, t3, t4, btnTxt, onClick }) {
  return (
    <div className={styles.card}>
      <Image src={img} />
      <p>{t1}</p>
      <p>{t2}</p>
      <p>{t3}</p>
      <p>{t4}</p>
      <button onClick={onClick}>{btnTxt}</button>
    </div>
  );
}

export default ManageInvestmentCard;
