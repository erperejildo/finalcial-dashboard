import React, { useEffect, useRef, useState } from 'react';
import { Contact } from '../interfaces/Contact';
import { contactsList, TRANSACTIONS_ARROWS } from '../mocks/mocks';
import { useAlert } from '../services/AlertService';
import './QuickTransfer.scss';

const QuickTransfer: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>(contactsList);
  const containerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const { showAlert } = useAlert();

  const handleSendClick = () => {
    showAlert('Money sent!', 'info');
  };

  const updateArrowVisibility = () => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    setShowLeftArrow(container.scrollLeft > 0);
    setShowRightArrow(
      container.scrollWidth > container.clientWidth + container.scrollLeft
    );
  };

  useEffect(() => {
    if (!TRANSACTIONS_ARROWS) return;

    const handleResize = () => updateArrowVisibility();
    window.addEventListener('resize', handleResize);

    updateArrowVisibility();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollContainer = (direction: 'left' | 'right') => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const scrollAmount = direction === 'left' ? -200 : 200;

    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });

    setTimeout(() => {
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(
        container.scrollLeft + container.clientWidth < container.scrollWidth
      );
    }, 300);
  };

  const selectContact = (index: number) => {
    const newContacts = contacts.map((contact) => ({
      ...contact,
      selected: false,
    }));
    newContacts[index].selected = true;

    setContacts(newContacts);
  };

  return (
    <div className="quick-transfer component">
      <h2 className="text-2xl font-semibold mb-4">Quick Transfer</h2>
      <div className="rounded-xxl p-5">
        <div className="contacts-container gap-5">
          {TRANSACTIONS_ARROWS && (
            <button
              onClick={() => scrollContainer('left')}
              className={`${showLeftArrow ? '' : 'hidden-arrow'} arrow p-2 rounded-full`}
              aria-label="Scroll left"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
                role="img"
                aria-label="Left arrow"
              >
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          <div
            className={`contacts overflow-x-auto whitespace-nowrap ${TRANSACTIONS_ARROWS ? 'overflow-hidden' : 'overflow-x-auto'}`}
            ref={containerRef}
            tabIndex={0}
          >
            <div className="flex">
              {contacts.map((contact, index) => (
                <div
                  key={index}
                  className="contact"
                  onClick={() => selectContact(index)}
                  onKeyDown={(event) => {
                    if (event.key === ' ' || event.key === 'Enter') {
                      event.preventDefault();
                      selectContact(index);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label={contact.name}
                >
                  <img
                    src={contact.profilePicture}
                    alt={contact.name}
                    className="contact-img rounded-full"
                  />
                  <div
                    className={`${contact.selected ? 'contact-important ' : ''}`}
                  >
                    <p>{contact.name}</p>
                    <p className="role text-sm">{contact.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {TRANSACTIONS_ARROWS && (
            <button
              onClick={() => scrollContainer('right')}
              className={`${showRightArrow ? '' : 'hidden-arrow'} arrow p-2 rounded-full`}
              aria-label="Scroll right"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
                role="img"
                aria-label="Right arrow"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>

        <div className="amount-container input-group flex items-center justify-center">
          <span className="whitespace-nowrap">Write Amount</span>
          <div className="amount-input-container w-full rounded-full flex items-center justify-between">
            <input
              type="number"
              placeholder="Amount"
              className="pl-6 pr-2 text-sm border-none outline-none flex-1"
              aria-label="Amount input"
            />
            <button
              onClick={handleSendClick}
              className="bg-black text-white text-sm font-bold py-2 px-6 rounded-full flex items-center"
            >
              Send
              <svg
                className="h-8 w-8 ml-2"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                role="img"
                aria-label="Send icon"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickTransfer;
