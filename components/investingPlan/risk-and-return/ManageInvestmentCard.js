import Image from "next/image";
import React from "react";
import styles from "@/styles/ManageInvestmentCard.module.css";
import { Card } from "@mui/material";

function ManageInvestmentCard({ img, t1, t2, t3, t4, btnTxt, onClick, style }) {
  return (
    <Card className={styles.card} style={style}>
      <Image src={img} alt="" />
      <p>{t1}</p>
      <p>{t2}</p>
      <p>{t3}</p>
      <p>{t4}</p>
      <button onClick={onClick}>{btnTxt}</button>
    </Card>
  );
}

export default ManageInvestmentCard;
