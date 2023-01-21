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

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["1yr", "2yr", "3yr", "4yr", "5yr", "6yr", "7yr"];

export const data = {
  labels,
  datasets: [
    {
      label: "Principal",
      data: [100, 200, 300, 400, 500, 600, 700],
      borderColor: "blue",
      backgroundColor: "blue",
    },
    {
      label: "Interest",
      data: [500, 200, 300, 300, 100, 400, 100],
      borderColor: "red",
      backgroundColor: "red",
    },
    {
      label: "Balance",
      data: [600, 300, 100, 500, 600, 100, 50],
      borderColor: "green",
      backgroundColor: "green",
    },
  ],
};

export default function LineChart() {
  return <Line options={options} data={data} />;
}
