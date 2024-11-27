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

const WeeklyActivityChart: React.FC = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Deposits',
        data: [200, 300, 250, 150, 400, 500, 350],
        backgroundColor: '#3498db',
      },
      {
        label: 'Withdrawals',
        data: [-50, -100, -75, -60, -120, -80, -40],
        backgroundColor: '#e74c3c',
      },
    ],
  };

  return (
    <div className="weekly-activity-chart">
      <h2>Weekly Activity</h2>
      <Bar data={data} />
    </div>
  );
};

export default WeeklyActivityChart;
