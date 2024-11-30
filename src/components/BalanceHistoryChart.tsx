import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import React from 'react';
import { Line } from 'react-chartjs-2';
import './BalanceHistoryChart.scss';

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
  datasets: [
    {
      lineTension: 0.5,
      label: 'Balance Over Time',
      data: [150, 220, 442, 780, 200, 590, 610],
      borderColor: '#1814f3',
    },
  ],
};

const options = {
  categoryPercentage: 0.6,
  barPercentage: 0.6,
  responsive: true,
  borderSkipped: false,
  borderRadius: 10,
  elements: {
    point: {
      radius: 0,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    datalabels: { display: false },
  },
  scales: {
    x: {
      border: { display: false, dash: [4, 4] },
      grid: {
        color: '#dfe5ee',
      },
      ticks: {
        color: '#718ebf',
        padding: 10,
      },
    },
    y: {
      border: { display: false, dash: [4, 4] },
      grid: {
        color: '#dfe5ee',
      },
      ticks: {
        stepSize: 200,
        color: '#718ebf',
        font: {
          size: 14,
          family: 'Segoe UI',
        },
      },
    },
  },
};

// NOTE: I tried to add the line shadow, but the effect is not quite the same
// I left this commented code as a reference

// const myPlugin = {
//   id: 'customShadow',
//   beforeDraw: (chart: any) => {
//     const ctx = chart.ctx;
//     ctx.save();

//     const originalLineDraw = ctx.stroke;
//     ctx.stroke = function () {
//       ctx.save();
//       ctx.shadowColor = 'rgb(24,20,243, 0.2)';
//       console.log(ctx);
//       ctx.shadowBlur = 2;
//       ctx.shadowOffsetY = 4;
//       originalLineDraw.apply(this, arguments);
//       ctx.restore();
//     };
//   },
// };

const BalanceHistoryChart: React.FC = () => {
  return (
    <div className="balance-history-chart component">
      <h2 className="text-2xl font-semibold mb-4">Balance History</h2>
      <div className="chart-container rounded-xxl">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default BalanceHistoryChart;
