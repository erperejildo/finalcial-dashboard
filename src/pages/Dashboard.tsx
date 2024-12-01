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
    <main
      className="dashboard py-4 px-6 md:py-6 md:px-10"
      role="main"
      tabIndex={-1}
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <MyCards />
        </div>
        <div className="lg:col-span-4">
          <RecentTransactions />
        </div>
        <div className="lg:col-span-8">
          <WeeklyActivityChart />
        </div>
        <div className="lg:col-span-4">
          <ExpenseStatistics />
        </div>
        <div className="lg:col-span-4">
          <QuickTransfer />
        </div>
        <div className="lg:col-span-8">
          <BalanceHistoryChart />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
