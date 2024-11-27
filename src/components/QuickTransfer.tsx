import React, { useState } from 'react';
import './QuickTransfer.scss';

interface Contact {
  id: number;
  name: string;
  role: string;
  profilePic: string;
}

const contacts: Contact[] = [
  { id: 1, name: 'John Doe', role: 'Friend', profilePic: '/images/john.jpg' },
  {
    id: 2,
    name: 'Sarah Smith',
    role: 'Colleague',
    profilePic: '/images/sarah.jpg',
  },
  {
    id: 3,
    name: 'Emily Davis',
    role: 'Family',
    profilePic: '/images/emily.jpg',
  },
];

const QuickTransfer: React.FC = () => {
  const [amount, setAmount] = useState<string>('');

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };

  const handleSendClick = (contact: Contact) => {
    alert(`Sending ${amount} to ${contact.name}`);
  };

  return (
    <div className="quick-transfer">
      <h2>Quick Transfer</h2>
      <div className="contacts-list">
        {contacts.map((contact) => (
          <div key={contact.id} className="contact-item">
            <img
              src={contact.profilePic}
              alt={contact.name}
              className="profile-pic"
            />
            <div className="contact-info">
              <h3>{contact.name}</h3>
              <p>{contact.role}</p>
            </div>
            <button
              onClick={() => handleSendClick(contact)}
              className="send-btn"
            >
              Send
            </button>
          </div>
        ))}
      </div>
      <div className="transfer-amount">
        <input
          type="text"
          value={amount}
          onChange={handleAmountChange}
          placeholder="Enter amount"
          className="amount-input"
        />
      </div>
    </div>
  );
};

export default QuickTransfer;
