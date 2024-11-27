import React from 'react';
import './RecentTransactions.scss';

interface Transaction {
  id: number;
  description: string;
  date: string;
  amount: number;
}

const RecentTransactions: React.FC = () => {
  const transactions: Transaction[] = [
    { id: 1, description: 'Grocery Store', date: '2024-11-26', amount: -50.75 },
    {
      id: 2,
      description: 'Salary Deposit',
      date: '2024-11-25',
      amount: 2500.0,
    },
    {
      id: 3,
      description: 'Online Subscription',
      date: '2024-11-24',
      amount: -15.99,
    },
    {
      id: 4,
      description: 'Transfer to Friend',
      date: '2024-11-23',
      amount: -100.0,
    },
  ];

  return (
    <div className="recent-transactions">
      <h2>Recent Transactions</h2>
      <ul>
        {transactions.map((transaction) => (
          <li
            key={transaction.id}
            className={transaction.amount < 0 ? 'negative' : 'positive'}
          >
            <span>{transaction.description}</span>
            <span>{transaction.date}</span>
            <span>${transaction.amount.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentTransactions;
