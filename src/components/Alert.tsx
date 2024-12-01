import React from 'react';
import './Alert.scss';

type AlertProps = {
  message: string;
  type?: 'success' | 'error' | 'info' | 'warning';
};

const Alert: React.FC<AlertProps> = ({ message, type = 'info' }) => {
  const baseClasses = 'alert p-4 border-l-4 rounded-md';
  const typeClasses = {
    success: 'bg-green-100 text-green-800 border-green-500',
    error: 'bg-red-100 text-red-800 border-red-500',
    info: 'bg-blue-100 text-blue-800 border-blue-500',
    warning: 'bg-yellow-100 text-yellow-800 border-yellow-500',
  };

  return (
    <div className={`${baseClasses} ${typeClasses[type]}`}>
      <strong className="font-semibold">
        {type.charAt(0).toUpperCase() + type.slice(1)}:{' '}
      </strong>
      {message}
    </div>
  );
};

export default Alert;
