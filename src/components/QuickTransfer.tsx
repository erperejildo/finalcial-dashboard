import React, { useEffect, useRef, useState } from 'react';
import './QuickTransfer.scss';

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
  const [amount, setAmount] = useState<number>(0);
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
    <>
      <h3 className="font-semibold text-lg mb-4">Quick Transfer</h3>
      <div className="quick-transfer p-4 rounded-xxl bg-white">
        <div className="contacts-container mb-4 gap-5">
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
          <div className="contacts" ref={containerRef}>
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
        </div>

        <div className="amount-container input-group mb-4 flex flex-row items-center">
          <span className="mr-6 whitespace-nowrap">Write Amount</span>
          <div className="w-full bg-gray-100 rounded-full flex items-center">
            <input
              type="number"
              className="flex-1 pl-6 text-sm border-none outline-none"
            />
            <button className="bg-black text-white text-sm font-bold py-2 px-6 rounded-full flex items-center">
              Send
              <svg
                className="h-8 w-8 ml-2"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
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
    </>
  );
};

export default QuickTransfer;
