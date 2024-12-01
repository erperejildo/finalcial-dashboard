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
import Header from './Header';
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
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      <div
        className={`inset-0 z-40 flex ${
          isOpen ? '' : '-translate-x-full sm:translate-x-0'
        }`}
      >
        <nav
          className="sidebar fixed top-0 left-0 z-50 h-screen class"
          aria-label="Sidebar"
        >
          <div className="h-full overflow-y-auto">
            <ul className="space-y-2 font-medium" role="menubar">
              <li
                className="task cursor-pointer"
                onClick={toggleSidebar}
                role="menuitem"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleSidebar();
                  }
                }}
              >
                <img src={TaskIcon} alt="Soar Task" className="icon" />
                Soar Task
              </li>
              {routes.map((route) => (
                <li
                  key={route.name}
                  className={`${location.pathname === route.path ? 'active' : ''}`}
                  role="menuitem"
                >
                  {location.pathname === route.path && (
                    <div className="marker"></div>
                  )}
                  <Link
                    to={route.path}
                    onClick={closeSidebar}
                    className="flex items-center group"
                    role="menuitem"
                  >
                    <img
                      src={route.icon}
                      alt={route.name + ' icon'}
                      className="icon"
                    />
                    <span className="ms-3">{route.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {isOpen && (
          <div
            className="fixed inset-0 z-30 bg-black bg-opacity-50 sm:hidden"
            onClick={closeSidebar}
            role="button"
            aria-label="Close sidebar"
          ></div>
        )}
      </div>

      <div className="main-content">
        <div className="header-container flex gap-4 p-6 md:py-6 md:px-8">
          <Header onToggleSidebar={toggleSidebar} />
        </div>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route
            path="*"
            element={<div className="p-6">Nothing to see here</div>}
          />
        </Routes>
      </div>
    </>
  );
};

export default Sidebar;
