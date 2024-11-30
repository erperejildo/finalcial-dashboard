import React, { useState } from 'react';
import EditProfile from '../components/EditProfile';
import './Settings.scss';

const tabData = [
  { name: 'Edit Profile', target: 'editProfile', content: <EditProfile /> },
  {
    name: 'Preferences',
    target: 'preferences',
    content: <p>Nothing to see here</p>,
  },
  { name: 'Security', target: 'security', content: <p>Nothing to see here</p> },
];

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('editProfile');

  const handleTabClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.currentTarget.getAttribute('data-target');
    if (target) {
      setActiveTab(target);
    }
  };

  return (
    <div className="settings py-4 px-6 md:py-6 md:px-10">
      <div className="settings-container rounded-xxl px-8 py-3 md:py-6">
        <ul className="tabs flex mb-6">
          {tabData.map((tab) => (
            <li
              className={`tab ${activeTab === tab.target ? 'active' : ''}`}
              key={tab.target}
            >
              <button
                className="tab-link"
                type="button"
                data-target={tab.target}
                onClick={handleTabClick}
              >
                {tab.name}
              </button>
              <div className="marker"></div>
            </li>
          ))}
        </ul>

        <div className="tab-content">
          {tabData.map((tab) => (
            <div
              className={`tab-panel ${activeTab === tab.target ? '' : 'hidden'}`}
              data-target={tab.target}
              role="tabpanel"
              key={tab.target}
            >
              {tab.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Settings;
