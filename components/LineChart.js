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

export default function LineChart({
  principal,
  balance,
  interest,
  years,
  chartTitle,
}) {
  const data = {
    labels: years,
    datasets: [
      {
        label: "Principal",
        data: principal,
        borderColor: "blue",
        backgroundColor: "blue",
      },
      {
        label: "Interest",
        data: interest,
        borderColor: "red",
        backgroundColor: "red",
      },
      {
        label: "Balance",
        data: balance,
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
        text: chartTitle,
      },
    },
  };

  return <Line options={options} data={data} />;
}
