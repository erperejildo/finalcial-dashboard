import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import './styles/main.scss';

const App: React.FC = () => {
  return (
    <Router>
      <div className="relative md:flex">
        <Sidebar />
      </div>
    </Router>
  );
};

export default App;
