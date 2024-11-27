// src/pages/Dashboard.tsx
import React from 'react';
import BalanceHistoryChart from '../components/BalanceHistoryChart';
import CardDetails from '../components/CardDetails';
import ExpenseStatistics from '../components/ExpenseStatistics';
import QuickTransfer from '../components/QuickTransfer';
import RecentTransactions from '../components/RecentTransactions';
import WeeklyActivityChart from '../components/WeeklyActivityChart';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard p-4 md:p-8">
      <h1 className="text-xl md:text-3xl font-semibold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-1">
          <CardDetails />
        </div>
        <div className="col-span-1">
          <RecentTransactions />
        </div>
        <div className="col-span-1 lg:col-span-2">
          <WeeklyActivityChart />
        </div>
        <div className="col-span-1 lg:col-span-2">
          <ExpenseStatistics />
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <QuickTransfer />
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-2">
          <BalanceHistoryChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
