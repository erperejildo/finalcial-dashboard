import React from 'react';
import './CardDetails.scss';

interface CardDetailsProps {
  cardholderName: string;
  cardNumber: string;
  balance: number;
  validDate: string;
  theme: string;
}

const CardDetails: React.FC<CardDetailsProps> = ({
  cardholderName,
  cardNumber,
  balance,
  validDate,
  theme,
}) => {
  const maskedCardNumber = `${cardNumber.slice(0, 4)} **** **** ${cardNumber.slice(-4)}`;

  return (
    <div
      className={`card-${theme} card-details p-0 border border-gray-200 rounded-xxl shadow-sm mb-4`}
    >
      <div className="p-6">
        <div className="flex justify-between gap-4">
          <div>
            <div className="balance text-xs">Balance</div>
            <div className="text-lg">${balance.toFixed(2)}</div>
          </div>
          <div>
            <img
              src={require('../assets/chip_white.png')}
              alt="Card Chip"
              className="chip w-10"
            />
          </div>
        </div>
        <div className="card-info">
          <div>
            <div className="text-xs pt-6">CARD HOLDER</div>
            <div className="text-md">{cardholderName}</div>
          </div>
          <div>
            <div className="text-xs pt-6">VALID THRU</div>
            <div className="text-md">{validDate}</div>
          </div>
        </div>
      </div>
      <div className="card-footer rounded-xxl">
        <div>{maskedCardNumber}</div>
        <div className="flex">
          <span className="card-circle"></span>
          <span className="card-circle"></span>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
