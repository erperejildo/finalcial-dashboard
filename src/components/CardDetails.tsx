import React from 'react';
import './CardDetails.scss';

interface Card {
  id: number;
  name: string;
  balance: number;
  number: string;
}

const CardDetails: React.FC = () => {
  const cards: Card[] = [
    {
      id: 1,
      name: 'John Doe',
      balance: 1200.75,
      number: '**** **** **** 1234',
    },
    {
      id: 2,
      name: 'Jane Smith',
      balance: 5000.0,
      number: '**** **** **** 5678',
    },
    {
      id: 3,
      name: 'Alex Johnson',
      balance: 220.5,
      number: '**** **** **** 9876',
    },
  ];

  return (
    <div className="card-details">
      <h2>My Cards</h2>
      <div className="card-list">
        {cards.map((card) => (
          <div key={card.id} className="card">
            <h3>{card.name}</h3>
            <p>Balance: ${card.balance.toFixed(2)}</p>
            <p>Card Number: {card.number}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardDetails;
