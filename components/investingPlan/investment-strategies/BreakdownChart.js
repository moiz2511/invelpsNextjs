import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function BreakdownChart({ years, returns }) {
  const options = {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        display: false,
      },
      title: {
        display: true,
        text: "",
      },
    },
  };

  const data = {
    labels: years,
    datasets: [
      {
        data: returns,
        borderColor: "#407879",
        backgroundColor: "#407879",
      },
    ],
  };
  return <Bar options={options} data={data} />;
}
