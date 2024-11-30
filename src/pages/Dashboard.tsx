// src/pages/Dashboard.tsx
import React from 'react';
import BalanceHistoryChart from '../components/BalanceHistoryChart';
import ExpenseStatistics from '../components/ExpenseStatistics';
import MyCards from '../components/MyCards';
import QuickTransfer from '../components/QuickTransfer';
import RecentTransactions from '../components/RecentTransactions';
import WeeklyActivityChart from '../components/WeeklyActivityChart';
import './Dashboard.scss';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard py-4 px-6  md:py-6 md:px-10">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <MyCards />
        </div>
        <div className="md:col-span-1">
          <RecentTransactions />
        </div>
        <div className="md:col-span-2">
          <WeeklyActivityChart />
        </div>
        <div className="md:col-span-1">
          <ExpenseStatistics />
        </div>
        <div className="md:col-span-1">
          <QuickTransfer />
        </div>
        <div className="md:col-span-2">
          <BalanceHistoryChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
