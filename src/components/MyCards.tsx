import React from 'react';
import CardDetails from './CardDetails';

const cardsList = [
  {
    cardholderName: 'Eddy Cusuma',
    cardNumber: '3778567890121234',
    balance: 5756,
    validDate: '12/20',
    theme: 'dark',
  },
  {
    cardholderName: 'Eddy Cusuma',
    cardNumber: '3778567890121234',
    balance: 5756,
    validDate: '12/20',
    theme: 'light',
  },
];

const MyCards: React.FC = () => {
  return (
    <div className="my-cards">
      <h2 className="text-xl font-semibold mb-4">My Cards</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cardsList.map((card, index) => (
          <CardDetails
            key={index}
            cardholderName={card.cardholderName}
            cardNumber={card.cardNumber}
            balance={card.balance}
            validDate={card.validDate}
            theme={card.theme}
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
