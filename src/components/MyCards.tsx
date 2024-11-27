import React from 'react';
import CardDetails from './CardDetails';

const MyCards: React.FC = () => {
  const cards = [
    {
      cardholderName: 'John Doe',
      cardNumber: '1234567890123456',
      balance: 230.45,
    },
    {
      cardholderName: 'Jane Smith',
      cardNumber: '9876543210987654',
      balance: 1500.75,
    },
    {
      cardholderName: 'Alice Brown',
      cardNumber: '1122334455667788',
      balance: 500.2,
    },
  ];

  return (
    <div className="my-cards">
      <h2 className="text-xl font-semibold mb-4">My Cards</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cards.map((card, index) => (
          <CardDetails
            key={index}
            cardholderName={card.cardholderName}
            cardNumber={card.cardNumber}
            balance={card.balance}
          />
        ))}
      </div>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        See All
      </button>
    </div>
  );
};

export default MyCards;
