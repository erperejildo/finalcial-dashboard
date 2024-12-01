import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import store from './store';
import './styles/main.scss';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="relative md:flex">
          <Sidebar />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
