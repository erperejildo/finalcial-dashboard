import React from 'react';

const CardDetails: React.FC = () => {
  const cards = [
    {
      id: 1,
      name: 'John Doe',
      balance: 500,
      cardNumber: '**** **** **** 1234',
    },
    {
      id: 2,
      name: 'Jane Smith',
      balance: 1200,
      cardNumber: '**** **** **** 5678',
    },
  ];

  return (
    <div className="card-details">
      <h2>My Cards</h2>
      <ul>
        {cards.map((card) => (
          <li key={card.id}>
            <div className="card-info">
              <p>{card.name}</p>
              <p>Balance: ${card.balance}</p>
              <p>{card.cardNumber}</p>
            </div>
          </li>
        ))}
      </ul>
      <button className="see-all-btn">See All</button>
    </div>
  );
};

export default CardDetails;
