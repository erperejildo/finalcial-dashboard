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
      <div className="component-name-button">
        <h2 className="text-xl font-semibold">My Cards</h2>
        <span>See All</span>
      </div>
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
    </div>
  );
};

export default MyCards;
