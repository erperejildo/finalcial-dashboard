import React from 'react';
import './RecentTransactions.scss';

interface Transaction {
  description: string;
  date: string;
  amount: number;
  method: string;
}

// NOTE: addapted to show multiple transactions
const transactions: Transaction[] = [
  {
    description: 'Deposit from my Card',
    date: '2021-01-28',
    amount: -850,
    method: 'card',
  },
  {
    description: 'Deposit PayPal',
    date: '2021-01-25',
    amount: 2500,
    method: 'paypal',
  },
  {
    description: 'Monthly Rent',
    date: '2021-01-21',
    amount: 5400,
    method: 'other',
  },
];

const RecentTransactions: React.FC = () => {
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'long' });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  const formatAmount = (amount: number): string => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    });

    return `${amount < 0 ? '-' : '+'}${formatter.format(Math.abs(amount))}`;
  };

  return (
    <div className="recent-transactions">
      <h3 className="font-semibold text-xl mb-4">Recent Transactions</h3>
      <div className="container bg-white p-4 rounded-xxl">
        <ul className="space-y-4">
          {transactions.map((transaction, index) => (
            <li key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span
                  className={`icon ${transaction.method}`}
                  style={{
                    backgroundImage: `url(${require(`../assets/transactions/${transaction.method}.svg`)})`,
                  }}
                ></span>
                <div>
                  <p className="text-m font-medium mb-1">
                    {transaction.description}
                  </p>
                  <p className="text-sm text-gray-500">
                    {formatDate(transaction.date)}
                  </p>
                </div>
              </div>
              <span
                className={`font-semibold	text-lg ${transaction.amount < 0 ? 'text-red-500' : 'text-green-500'}`}
              >
                {formatAmount(transaction.amount)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecentTransactions;
