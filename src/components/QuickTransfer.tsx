import React, { useEffect, useRef, useState } from 'react';
import './QuickTransfer.scss';

// NOTE: enable this to show arrows to navigate between contacts
const showArrows = false;

interface Contact {
  name: string;
  role: string;
  profilePicture: string;
  selected: boolean;
}

const contactsList: Contact[] = [
  {
    name: 'Livia Bator',
    role: 'CEO',
    profilePicture: 'https://i.pravatar.cc/100?img=1',
    selected: true,
  },
  {
    name: 'Randy Press',
    role: 'Director',
    profilePicture: 'https://i.pravatar.cc/100?img=5',
    selected: false,
  },
  {
    name: 'Workman',
    role: 'Designer',
    profilePicture: 'https://i.pravatar.cc/100?img=10',
    selected: false,
  },
  {
    name: 'Workman',
    role: 'Designer',
    profilePicture: 'https://i.pravatar.cc/100?img=8',
    selected: false,
  },
  {
    name: 'Workman',
    role: 'Designer',
    profilePicture: 'https://i.pravatar.cc/100?img=7',
    selected: false,
  },
];

const QuickTransfer: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>(contactsList);
  const containerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const updateArrowVisibility = () => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    setShowLeftArrow(container.scrollLeft > 0);
    setShowRightArrow(
      container.scrollWidth > container.clientWidth + container.scrollLeft
    );
  };

  useEffect(() => {
    if (!showArrows) return;

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
          {showArrows && (
            <button
              onClick={() => scrollContainer('left')}
              className={`${showLeftArrow ? '' : 'hidden-arrow'} arrow p-2 rounded-full`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          <div
            className={`contacts overflow-x-auto whitespace-nowrap ${showArrows ? 'overflow-hidden' : 'overflow-x-auto'}`}
            ref={containerRef}
          >
            <div className="flex">
              {contacts.map((contact, index) => (
                <div
                  key={index}
                  className="contact"
                  onClick={() => selectContact(index)}
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
          {showArrows && (
            <button
              onClick={() => scrollContainer('right')}
              className={`${showRightArrow ? '' : 'hidden-arrow'} arrow p-2 rounded-full`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>

        <div className="amount-container input-group flex items-center">
          <span className="whitespace-nowrap">Write Amount</span>
          <div className="amount-input-container w-full rounded-full flex items-center justify-between">
            <input
              type="number"
              placeholder="Amount"
              className="pl-6 pr-2 text-sm border-none outline-none flex-1"
            />
            <button className="bg-black text-white text-sm font-bold py-2 px-6 rounded-full flex items-center">
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
