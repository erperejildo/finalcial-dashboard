import React, { useState } from 'react';
import EditProfile from '../components/EditProfile';
import './Settings.scss';

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('editProfile');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="settings p-4 md:p-8">
      <h1 className="text-xl md:text-3xl font-semibold mb-6">Settings</h1>

      <div className="tabs flex flex-col md:flex-row gap-4 mb-6">
        <button
          className={`p-3 font-semibold rounded-lg transition-all ${
            activeTab === 'editProfile'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100'
          }`}
          onClick={() => handleTabClick('editProfile')}
        >
          Edit Profile
        </button>
        <button
          className={`p-3 font-semibold rounded-lg transition-all ${
            activeTab === 'preferences'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100'
          }`}
          onClick={() => handleTabClick('preferences')}
        >
          Preferences
        </button>
        <button
          className={`p-3 font-semibold rounded-lg transition-all ${
            activeTab === 'security' ? 'bg-blue-500 text-white' : 'bg-gray-100'
          }`}
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
