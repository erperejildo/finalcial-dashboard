import React, { useState } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import AccountsIcon from '../assets/icons/sidebar/accounts.svg';
import CreditCardsIcon from '../assets/icons/sidebar/credit_cards.svg';
import DashboardIcon from '../assets/icons/sidebar/dashboard.svg';
import InvestmentsIcon from '../assets/icons/sidebar/investments.svg';
import LoansIcon from '../assets/icons/sidebar/loans.svg';
import MyPrivilegesIcon from '../assets/icons/sidebar/my_privileges.svg';
import ServicesIcon from '../assets/icons/sidebar/services.svg';
import SettingsIcon from '../assets/icons/sidebar/settings.svg';
import TaskIcon from '../assets/icons/sidebar/task.svg';
import TransactionsIcon from '../assets/icons/sidebar/transactions.svg';
import Dashboard from '../pages/Dashboard';
import Settings from '../pages/Settings';
import './Sidebar.scss';

const routes = [
  { path: '/', name: 'Dashboard', icon: DashboardIcon },
  { path: '/accounts', name: 'Accounts', icon: AccountsIcon },
  { path: '/transactions', name: 'Transactions', icon: TransactionsIcon },
  { path: '/credit-cards', name: 'Credit Cards', icon: CreditCardsIcon },
  { path: '/loans', name: 'Loans', icon: LoansIcon },
  { path: '/investments', name: 'Investments', icon: InvestmentsIcon },
  { path: '/services', name: 'Services', icon: ServicesIcon },
  { path: '/my-privileges', name: 'My Privileges', icon: MyPrivilegesIcon },
  { path: '/settings', name: 'Settings', icon: SettingsIcon },
];

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // Sidebar visibility state
  const location = useLocation();

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={toggleSidebar}
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      {/* Sidebar with backdrop */}
      <div
        className={`fixed inset-0 z-40 flex transition-transform ${
          isOpen ? '' : '-translate-x-full sm:translate-x-0'
        }`}
      >
        {/* Sidebar */}
        <nav
          id="default-sidebar"
          className="fixed top-0 left-0 z-50 h-screen"
          aria-label="Sidebar"
        >
          <div className="h-full overflow-y-auto">
            <ul className="space-y-2 font-medium">
              <li className="task">
                <img src={TaskIcon} alt="Soar Task" className="icon" />
                Soar Task
              </li>
              {routes.map((route) => (
                <li
                  key={route.name}
                  className={`${location.pathname === route.path ? 'active' : ''}`}
                >
                  {location.pathname === route.path && (
                    <div className="marker"></div>
                  )}
                  <Link
                    to={route.path}
                    onClick={closeSidebar}
                    className="flex items-center rounded-lg group"
                  >
                    <img src={route.icon} alt={route.name} className="icon" />
                    <span className="ms-3">{route.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Backdrop for mobile */}
        {isOpen && (
          <div
            className="fixed inset-0 z-30 bg-black bg-opacity-50 sm:hidden"
            onClick={closeSidebar}
          ></div>
        )}
      </div>

      {/* Main content */}
      <div className="p-4 sm:ml-64">
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
