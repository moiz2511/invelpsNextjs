import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function CapitalGrowthChart({
  years,
  stocks,
  bonds,
  tBills,
  reit,
  gold,
  cash,
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
        position: "top",
      },
      title: {
        display: true,
        text: "",
      },
    },
  };

  return <Line options={options} data={data} />;
}

export default CapitalGrowthChart;
