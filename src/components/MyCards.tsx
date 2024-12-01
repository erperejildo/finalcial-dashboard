import React from 'react';
import { useAlert } from '../services/AlertService';
import CardDetails from './CardDetails';
import './MyCards.scss';

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
  const { showAlert } = useAlert();

  const handleSeeAllClick = () => {
    showAlert('You have clicked See All', 'info');
  };

  return (
    <div className="my-cards component" aria-label="My Cards list">
      <div className="component-name-button mb-4">
        <h2 className="text-2xl font-semibold">My Cards</h2>
        <button className="see-all-button" onClick={handleSeeAllClick}>
          See All
        </button>
      </div>

      <div className="h-full grid grid-cols-1 md:grid-cols-2 gap-4 overflow-x-auto whitespace-nowrap">
        <div className="flex" role="list">
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
