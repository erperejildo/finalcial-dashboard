import React from 'react';
import CardChip from '../assets/icons/card_chip.svg';
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
      className={`card-${theme} h-full card-details p-0 border border-gray-200 rounded-xxl shadow-sm mr-6`}
      role="listitem"
    >
      <div className="p-6">
        <div className="flex align-items-center justify-between gap-4">
          <div>
            <div className="balance text-xs">Balance</div>
            <div
              className="text-lg"
              aria-label={`Your balance is $${balance.toFixed(2)}`}
            >
              ${balance.toFixed(2)}
            </div>
          </div>
          <img
            src={CardChip}
            alt="Card chip"
            className="icon chip"
            aria-hidden="true"
          />
        </div>
        <div className="card-info">
          <div>
            <div className="text-xs pt-6">CARD HOLDER</div>
            <div className="text-md" aria-label={cardholderName}>
              {cardholderName}
            </div>
          </div>
          <div>
            <div className="text-xs pt-6">VALID THRU</div>
            <div className="text-md" aria-label={validDate}>
              {validDate}
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer rounded-xxl">
        <div aria-label={maskedCardNumber}>{maskedCardNumber}</div>
        <div className="flex" aria-hidden="true">
          <span className="card-circle"></span>
          <span className="card-circle"></span>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
