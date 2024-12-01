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
      <div className="settings-container rounded-xxl px-6 py-3">
        <ul className="tabs flex mb-6" role="tablist">
          {tabData.map((tab) => (
            <li
              className={`tab ${activeTab === tab.target ? 'active' : ''}`}
              key={tab.target}
              role="presentation"
            >
              <button
                className="tab-link"
                type="button"
                data-target={tab.target}
                onClick={handleTabClick}
                role="tab"
                aria-selected={activeTab === tab.target}
                aria-controls={`tabpanel-${tab.target}`}
                id={`tab-${tab.target}`}
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
              id={`tabpanel-${tab.target}`}
              aria-labelledby={`tab-${tab.target}`}
              key={tab.target}
              hidden={activeTab !== tab.target}
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
