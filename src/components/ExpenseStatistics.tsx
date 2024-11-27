import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  Title,
  Tooltip,
} from 'chart.js';
import React from 'react';
import { Pie } from 'react-chartjs-2';
import './ExpenseStatistics.scss';

ChartJS.register(ArcElement, Tooltip, Legend, Title, CategoryScale);

const ExpenseStatistics: React.FC = () => {
  const data = {
    labels: ['Entertainment', 'Bills', 'Investments', 'Others'],
    datasets: [
      {
        data: [40, 30, 20, 10],

        backgroundColor: ['#f39c12', '#8e44ad', '#2ecc71', '#e74c3c'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="expense-statistics">
      <h2>Expense Breakdown</h2>
      <Pie data={data} />
    </div>
  );
};

export default ExpenseStatistics;
