import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  Title,
  Tooltip,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import React from 'react';
import { Pie } from 'react-chartjs-2';
import './ExpenseStatistics.scss';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
  ChartDataLabels
);

const data = {
  labels: ['Bill Expense', 'Others', 'Investments', 'Entertainment'],
  datasets: [
    {
      data: [15, 35, 20, 30],
      backgroundColor: ['#fc7900', '#232323', '#396aff', '#343c6a'],
      hoverOffset: 30,
    },
  ],
};

const options = {
  responsive: true,
  borderWidth: 4,
  plugins: {
    datalabels: {
      color: 'white',
      formatter: (value: any, ctx: any) => {
        const label = ctx.chart.data.labels[ctx.dataIndex];
        return `${value}%\n${label}`;
      },
      font: {
        weight: 'bold' as 'bold',
        size: 14,
      },
      padding: 6,
      textAlign: 'center' as 'center',
    },
    legend: {
      display: false,
    },
  },
  layout: {
    padding: 10,
  },
};

const ExpenseStatistics: React.FC = () => {
  return (
    <div className="expense-statistics">
      <h3 className="font-semibold text-xl mb-4">Expense Statistics</h3>
      <div className="chart-container rounded-xxl bg-white p-5">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default ExpenseStatistics;
