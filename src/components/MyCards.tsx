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
  // NOTE: addapted to show multiple cards. Uncomment to test:
  // {
  //   cardholderName: 'Eddy Cusuma',
  //   cardNumber: '3778567890121234',
  //   balance: 5756,
  //   validDate: '12/20',
  //   theme: 'dark',
  // },
  // {
  //   cardholderName: 'Eddy Cusuma',
  //   cardNumber: '3778567890121234',
  //   balance: 5756,
  //   validDate: '12/20',
  //   theme: 'light',
  // },
];

const MyCards: React.FC = () => {
  return (
    <div className="my-cards component">
      <div className="component-name-button">
        <h3 className="text-xl font-semibold">My Cards</h3>
        <span>See All</span>
      </div>
      <div className="h-full grid grid-cols-1 md:grid-cols-2 gap-4 overflow-x-auto whitespace-nowrap">
        <div className="flex">
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
    </div>
  );
};

export default MyCards;
