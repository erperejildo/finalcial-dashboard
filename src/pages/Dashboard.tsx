import React from 'react';
import CardDetails from '../components/CardDetails';
import ExpenseStatistics from '../components/ExpenseStatistics';
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
    </div>
  );
};

export default Dashboard;
