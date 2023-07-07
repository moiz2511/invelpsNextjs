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

function CapitalGrowthBacktestChart({ years, allWeather, inflation }) {
  const data = {
    labels: years,
    datasets: [
      {
        label: "All Weather (rebalanced)",
        data: allWeather,
        borderColor: "lightblue",
        backgroundColor: "lightblue",
      },
      {
        label: "Inflation (rebalanced)",
        data: inflation,
        borderColor: "red",
        backgroundColor: "red",
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
        display: true,
        text: "",
      },
    },
  };

  return <Line options={options} data={data} />;
}

export default CapitalGrowthBacktestChart;
