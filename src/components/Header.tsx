import React from 'react';
import { useLocation } from 'react-router-dom';
import NotificationsIcon from '../assets/icons/header/notifications.svg';
import SearchIcon from '../assets/icons/header/search.svg';
import SettingsIcon from '../assets/icons/header/settings.svg';
import './Header.scss';

const Header: React.FC = () => {
  const location = useLocation();

  const getPathname = () => {
    if (location.pathname === '/') {
      return 'Overview';
    }
    if (location.pathname !== '/') {
      return location.pathname
        .split('/')
        .pop()!
        .replace(/^\w/, (c) => c.toUpperCase())
        .replace(/-/g, ' ');
    }

    return location.pathname;
  };

  return (
    <div className="header flex items-center justify-between w-full">
      <h1 className="pathname text-3xl font-semibold">{getPathname()}</h1>
      <div className="group flex items-center gap-5 space-x-2">
        <form className="max-w-md mx-auto">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium sr-only"
          >
            Search
          </label>
          <div className="relative">
            <div className="search-icon absolute inset-y-0 start-0 flex items-center">
              <img src={SearchIcon} alt="Search Icon" />
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 text-sm rounded-xxl"
              placeholder="Search for something"
              required
            />
          </div>
        </form>

        <button type="button" className="rounded-full">
          <img src={SettingsIcon} alt="Settings Icon" />
          <span className="sr-only">Icon description</span>
        </button>
        <button type="button" className="rounded-full">
          <img src={NotificationsIcon} alt="Notifications Icon" />
          <span className="sr-only">Icon description</span>
        </button>

        <img
          className="avatar rounded-full"
          src="https://i.pravatar.cc/100?img=7"
          alt="Avatar"
        />
      </div>
    </div>
  );
};

export default Header;
