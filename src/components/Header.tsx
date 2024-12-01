import React from 'react';
import { useLocation } from 'react-router-dom';
import BarsIcon from '../assets/icons/bars.svg';
import NotificationsIcon from '../assets/icons/header/notifications.svg';
import SearchIcon from '../assets/icons/header/search.svg';
import SettingsIcon from '../assets/icons/header/settings.svg';
import './Header.scss';

type Props = {
  onToggleSidebar: () => void;
};

const Header: React.FC<Props> = ({ onToggleSidebar }) => {
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
    <div className="header">
      <div className="pathname-group text-3xl flex items-center gap-5 justify-between font-semibold">
        <button
          onClick={onToggleSidebar}
          type="button"
          className="bg-transparent rounded-full sm:hidden"
          aria-label="Open sidebar"
        >
          <img src={BarsIcon} alt="Open sidebar" className="icon" />
        </button>

        <h1>{getPathname()}</h1>
        <img
          className="avatar rounded-full"
          src="https://i.pravatar.cc/100?img=7"
          alt="User avatar"
        />
      </div>
      <div className="buttons-group flex items-center justify-between space-x-2">
        <form
          className="max-w-md flex-1"
          role="search"
          aria-label="Search form"
        >
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium sr-only"
          >
            Search
          </label>
          <div className="relative">
            <div className="search-icon absolute inset-y-0 flex items-center">
              <img src={SearchIcon} alt="Search Icon" />
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full text-ml rounded-xxl"
              placeholder="Search for something"
              aria-label="Search input"
              required
            />
          </div>
        </form>

        <button
          type="button"
          className="rounded-full"
          aria-label="Open settings"
        >
          <img src={SettingsIcon} alt="Settings Icon" />
        </button>
        <button
          type="button"
          className="rounded-full"
          aria-label="View notifications"
        >
          <img src={NotificationsIcon} alt="Notifications Icon" />
        </button>

        <img
          className="avatar rounded-full"
          src="https://i.pravatar.cc/100?img=7"
          alt="User avatar"
        />
      </div>
    </div>
  );
};

export default Header;
