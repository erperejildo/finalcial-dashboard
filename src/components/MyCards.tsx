import React, { useEffect, useState } from 'react';
import { Card } from '../interfaces/Card';
import { cardsList, MYCARDS_API_DELAY, MYCARDS_FAILS } from '../mocks/mocks';
import { useAlert } from '../services/AlertService';
import CardDetails from './CardDetails';
import './MyCards.scss';

const MyCards: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const { showAlert } = useAlert();

  const fetchData = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await new Promise<Card[]>((resolve) => {
        setTimeout(() => resolve(cardsList), MYCARDS_API_DELAY);
      });

      if (MYCARDS_FAILS) {
        throw new Error('Failed to fetch cards');
      }

      setIsLoading(false);
      setCards(response);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      showAlert('Something went wrong while fetching data', 'error');
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        {isLoading ? (
          <div className="flex items-center justify-center">
            <div className="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">
              loading...
            </div>
          </div>
        ) : (
          <div className="flex" role="list">
            {isError ? (
              <div>
                <button
                  type="button"
                  aria-label="Try fetching the cards again"
                  onClick={fetchData}
                  className="text-white m-1 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  Try again
                </button>
              </div>
            ) : (
              cards.map((card, index) => (
                <CardDetails
                  key={index}
                  cardholderName={card.cardholderName}
                  cardNumber={card.cardNumber}
                  balance={card.balance}
                  validDate={card.validDate}
                  theme={card.theme}
                />
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCards;
