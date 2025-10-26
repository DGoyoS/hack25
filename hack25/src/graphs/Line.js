import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            family: 'Josefin Sans, sans-serif',
            size: 14
          }
        }
      },
      title: {
        display: true,
        text: "Donation Growth Over Time",
        font: {
          family: 'Josefin Sans, sans-serif',
          size: 18,
          weight: 600
        }
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            family: 'Josefin Sans, sans-serif'
          }
        }
      },
      y: {
        ticks: {
          font: {
            family: 'Josefin Sans, sans-serif'
          }
        }
      }
    }
  };

  const labels = ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const donations2024 = [650, 700, 900, 850, 800, 900, 950, 1100, 1200, 1150, 1250];
  const donations2021 = [600, 750, 850, 900, 850, 950, 1000, 900, 800, 750, 850];

  const data = {
    labels,
    datasets: [
      {
        label: "2024",
        data: donations2024,
        borderColor: "rgb(139, 195, 74)",
        backgroundColor: "rgba(139, 195, 74, 0.5)",
        tension: 0.4
      },
      {
        label: "Año anterior",
        data: donations2021,
        borderColor: "rgb(0, 0, 0)",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        tension: 0.4
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default LineChart;