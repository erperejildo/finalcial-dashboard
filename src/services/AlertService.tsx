import React, { createContext, useContext, useState } from 'react';
import Alert from '../components/Alert';

type AlertContextType = {
  showAlert: (
    message: string,
    type: 'success' | 'error' | 'info' | 'warning'
  ) => void;
};

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export const AlertProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [alert, setAlert] = useState<{
    message: string;
    type: 'success' | 'error' | 'info' | 'warning' | null;
  }>({
    message: '',
    type: null,
  });

  const showAlert = (
    message: string,
    type: 'success' | 'error' | 'info' | 'warning'
  ) => {
    setAlert({ message, type });
    setTimeout(() => {
      setAlert({ message: '', type: null });
    }, 3000);
  };

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
      {alert.type && <Alert message={alert.message} type={alert.type} />}
    </AlertContext.Provider>
  );
};

export const useAlert = (): AlertContextType => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error('useAlert must be used within an AlertProvider');
  }
  return context;
};
