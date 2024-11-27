import React from 'react';
import './CardDetails.scss';

interface CardDetailsProps {
  cardholderName: string;
  cardNumber: string;
  balance: number;
}

const CardDetails: React.FC<CardDetailsProps> = ({
  cardholderName,
  cardNumber,
  balance,
}) => {
  const maskedCardNumber = `**** **** **** ${cardNumber.slice(-4)}`;

  return (
    <div className="card-details p-4 border border-gray-200 rounded-lg shadow-sm mb-4">
      <h3 className="font-semibold text-lg">{cardholderName}</h3>
      <p className="text-sm text-gray-600">Card Number: {maskedCardNumber}</p>
      <p className="text-xl font-bold text-blue-500">
        Balance: ${balance.toFixed(2)}
      </p>
    </div>
  );
};

export default CardDetails;
