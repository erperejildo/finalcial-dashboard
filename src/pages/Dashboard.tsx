import React from 'react';
import CardDetails from '../components/CardDetails';
import RecentTransactions from '../components/RecentTransactions';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <CardDetails />
      <RecentTransactions />
    </div>
  );
};

export default Dashboard;
