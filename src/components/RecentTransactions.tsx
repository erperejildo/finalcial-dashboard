import React from 'react';
import './RecentTransactions.scss';

interface Transaction {
  icon: string;
  description: string;
  date: string;
  amount: number;
}

const RecentTransactions: React.FC = () => {
  const transactions: Transaction[] = [
    {
      icon: '💵',
      description: 'Deposit from Employer',
      date: '2024-11-25',
      amount: 1200.5,
    },
    {
      icon: '🍔',
      description: 'Food Delivery',
      date: '2024-11-24',
      amount: -35.75,
    },
    {
      icon: '🚗',
      description: 'Gas Station',
      date: '2024-11-23',
      amount: -45.3,
    },
    {
      icon: '🏠',
      description: 'Monthly Rent',
      date: '2024-11-20',
      amount: -1200.0,
    },
  ];

  return (
    <div className="recent-transactions p-4 border border-gray-200 rounded-lg shadow-sm">
      <h3 className="font-semibold text-lg mb-4">Recent Transactions</h3>
      <ul className="space-y-4">
        {transactions.map((transaction, index) => (
          <li key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-xl">{transaction.icon}</span>
              <div>
                <p className="text-sm font-medium">{transaction.description}</p>
                <p className="text-xs text-gray-500">{transaction.date}</p>
              </div>
            </div>
            <span
              className={`font-bold ${transaction.amount < 0 ? 'text-red-500' : 'text-green-500'}`}
            >
              ${transaction.amount.toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        See All
      </button>
    </div>
  );
};

export default RecentTransactions;
