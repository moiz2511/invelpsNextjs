import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bubble } from "react-chartjs-2";
import CustomTooltip from "@/components/CustomTooltip";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

function RiskVReturnChat({
  years,
  stocks,
  bonds,
  tBills,
  reit,
  gold,
  cash,
  name,
  tooltips,
}) {
  const data = {
    labels: years,
    datasets: [
      {
        label: "Stocks",
        data: stocks,
        borderColor: "purple",
        backgroundColor: "purple",
      },
      {
        label: "Bonds",
        data: bonds,
        borderColor: "red",
        backgroundColor: "red",
      },
      {
        label: "T Bills",
        data: tBills,
        borderColor: "yellow",
        backgroundColor: "yellow",
      },
      {
        label: "REIT",
        data: reit,
        borderColor: "lightblue",
        backgroundColor: "lightblue",
      },
      {
        label: "Gold",
        data: gold,
        borderColor: "gold",
        backgroundColor: "gold",
      },
      {
        label: "Cash",
        data: cash,
        borderColor: "green",
        backgroundColor: "green",
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: false,
        text: name,
      },
    },
  };

  return (
    <div>
      <Bubble options={options} data={data} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          justifyContent: "center",
          marginTop: "10px",
        }}
      >
        <p style={{ marginRight: "5px", marginTop: "3px" }}>{name}</p>
        {tooltips && <CustomTooltip values={tooltips} />}
      </div>
    </div>
  );
}

export default RiskVReturnChat;
