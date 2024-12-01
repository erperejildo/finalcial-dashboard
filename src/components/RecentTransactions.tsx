import React from 'react';
import { transactions } from '../mocks/mocks';
import './RecentTransactions.scss';

const RecentTransactions: React.FC = () => {
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'long' });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  const formatAmount = (
    amount: number,
    inline: boolean = false
  ): JSX.Element => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    });

    return (
      <span
        className={`font-semibold text-lg ${
          amount < 0 ? 'text-red-500' : 'text-green-500'
        } ${inline ? 'column-amount' : 'row-amount'}`}
      >
        {`${amount < 0 ? '-' : '+'}${formatter.format(Math.abs(amount))}`}
      </span>
    );
  };

  return (
    <div
      className="recent-transactions component"
      aria-label="Recent Transactions"
    >
      <h2 className="text-2xl font-semibold mb-4">Recent Transactions</h2>
      <div className="container p-5 rounded-xxl">
        <ul className="space-y-4">
          {transactions.map((transaction, index) => (
            <li key={index} className="flex items-center justify-between">
              <div className="flex items-start space-x-2">
                <span
                  className={`icon mr-2 ${transaction.method}`}
                  aria-hidden="true"
                  style={{
                    backgroundImage: `url(${require(`../assets/icons/transactions/${transaction.method}.svg`)})`,
                  }}
                ></span>
                <div>
                  <p className="text-m font-medium mb-1">
                    {transaction.description}
                  </p>
                  {formatAmount(transaction.amount)}
                  <p className="text-sm text-gray-500">
                    {formatDate(transaction.date)}
                  </p>
                </div>
              </div>
              {formatAmount(transaction.amount, true)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecentTransactions;
