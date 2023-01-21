import React from "react";
import styles from "@/styles/InvestmentVehicleCard.module.css";
import { Card } from "@mui/material";
import Image from "next/image";

function InvestmentVehicleCard({ name, img }) {
  return (
    <Card className={styles.container}>
      <Image src={img} alt={name} width={300} height={200} />
      <div></div>
      <h1>{name}</h1>
    </Card>
  );
}

export default InvestmentVehicleCard;
