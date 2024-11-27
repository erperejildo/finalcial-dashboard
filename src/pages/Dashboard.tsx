import React from 'react';
import BalanceHistoryChart from '../components/BalanceHistoryChart';
import CardDetails from '../components/CardDetails';
import ExpenseStatistics from '../components/ExpenseStatistics';
import QuickTransfer from '../components/QuickTransfer';
import RecentTransactions from '../components/RecentTransactions';
import WeeklyActivityChart from '../components/WeeklyActivityChart';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <CardDetails />
      <RecentTransactions />
      <WeeklyActivityChart />
      <ExpenseStatistics />
      <BalanceHistoryChart />
      <QuickTransfer />
    </div>
  );
};

export default Dashboard;
