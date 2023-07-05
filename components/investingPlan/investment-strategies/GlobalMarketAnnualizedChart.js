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

function GlobalMarketAnnualizedChart({
  years,
  IYWValues,
  IVKValues,
  GSPCValues,
  IVFValues,
  FYZValues,
}) {
  const data = {
    labels: years,
    datasets: [
      {
        label: "IYWValues",
        data: IYWValues,
        borderColor: "lightblue",
        backgroundColor: "lightblue",
      },
      {
        label: "IVKValues",
        data: IVKValues,
        borderColor: "red",
        backgroundColor: "red",
      },
      {
        label: "GSPCValues",
        data: GSPCValues,
        borderColor: "green",
        backgroundColor: "green",
      },
      {
        label: "IVFValues",
        data: IVFValues,
        borderColor: "blue",
        backgroundColor: "blue",
      },
      {
        label: "FYZValues",
        data: FYZValues,
        borderColor: "brown",
        backgroundColor: "brown",
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

export default GlobalMarketAnnualizedChart;
