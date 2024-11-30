import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import React from 'react';
import { Bar } from 'react-chartjs-2';
import './WeeklyActivityChart.scss';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Deposit',
      data: [480, 350, 320, 480, 150, 390, 390],
      backgroundColor: '#000',
    },
    {
      label: 'Withdrawal',
      data: [250, 120, 260, 380, 250, 250, 340],
      backgroundColor: '#396aff',
    },
  ],
};

const options = {
  categoryPercentage: 0.6,
  barPercentage: 0.6,
  responsive: true,
  borderSkipped: false,
  borderRadius: 10,
  plugins: {
    legend: {
      align: 'end' as 'start' | 'center' | 'end',
      labels: {
        usePointStyle: true,
        pointStyle: 'circle',
        pointRadius: 15,
        color: '#718ebf',
      },
    },
    datalabels: { display: false },
  },
  scales: {
    x: {
      border: { color: '#f3f3f5' },
      grid: {
        display: false,
      },
      ticks: {
        color: '#718ebf',
        padding: 10,
      },
    },
    y: {
      border: { display: false },
      grid: {
        color: '#f3f3f5',
      },
      ticks: {
        stepSize: 100,
        color: '#718ebf',
        padding: 20,
        font: {
          size: 14,
          family: 'Segoe UI',
        },
      },
    },
  },
};

const WeeklyActivityChart: React.FC = () => {
  return (
    <div className="weekly-activity-chart component">
      <h2 className="text-2xl font-semibold mb-4">Weekly Activity</h2>
      <div className="chart-container rounded-xxl">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default WeeklyActivityChart;
