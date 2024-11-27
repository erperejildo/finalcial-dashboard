import React, { useState } from 'react';
import EditProfile from '../components/EditProfile';
import './Settings.scss';

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('editProfile');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="settings">
      <h1>Settings</h1>
      <div className="tabs">
        <button
          className={activeTab === 'editProfile' ? 'active' : ''}
          onClick={() => handleTabClick('editProfile')}
        >
          Edit Profile
        </button>
        <button
          className={activeTab === 'preferences' ? 'active' : ''}
          onClick={() => handleTabClick('preferences')}
        >
          Preferences
        </button>
        <button
          className={activeTab === 'security' ? 'active' : ''}
          onClick={() => handleTabClick('security')}
        >
          Security
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'editProfile' && <EditProfile />}
        {activeTab === 'preferences' && <>Empty tab</>}
        {activeTab === 'security' && <>Empty tab</>}
      </div>
    </div>
  );
};

export default Settings;
