import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bubble } from "react-chartjs-2";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

function RiskVReturnChat({ years, stocks, bonds, tBills, reit, gold, cash }) {
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
        position: "top",
      },
      title: {
        display: true,
        text: "",
      },
    },
  };

  return <Bubble options={options} data={data} />;
}

export default RiskVReturnChat;
