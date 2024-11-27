import React, { useState } from 'react';
import './QuickTransfer.scss';

interface Contact {
  name: string;
  role: string;
  profilePicture: string;
}

const QuickTransfer: React.FC = () => {
  const [amount, setAmount] = useState<number>(0);

  const contacts: Contact[] = [
    {
      name: 'John Doe',
      role: 'Friend',
      profilePicture: 'https://i.pravatar.cc/50?img=1',
    },
    {
      name: 'Jane Smith',
      role: 'Colleague',
      profilePicture: 'https://i.pravatar.cc/50?img=2',
    },
    {
      name: 'Alice Brown',
      role: 'Family',
      profilePicture: 'https://i.pravatar.cc/50?img=3',
    },
  ];

  return (
    <div className="quick-transfer p-4 border border-gray-200 rounded-lg shadow-sm">
      <h3 className="font-semibold text-lg mb-4">Quick Transfer</h3>
      <div className="contacts flex flex-row mb-4">
        {contacts.map((contact, index) => (
          <div key={index} className="contact">
            <img
              src={contact.profilePicture}
              alt={contact.name}
              className="contact-img w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-medium">{contact.name}</p>
              <p className="text-sm text-gray-500">{contact.role}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="input-group mb-4">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          placeholder="Enter amount"
          className="w-full p-3 border border-gray-300 rounded-lg"
        />
      </div>
      <button className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        Send
      </button>
    </div>
  );
};

export default QuickTransfer;
