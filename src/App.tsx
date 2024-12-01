import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import { AlertProvider } from './services/AlertService';
import store from './store';
import './styles/main.scss';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <AlertProvider>
          <Sidebar />
        </AlertProvider>
      </Router>
    </Provider>
  );
};

export default App;
