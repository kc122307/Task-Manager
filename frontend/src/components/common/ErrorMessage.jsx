import React from 'react';

const ErrorMessage = ({ message }) => (
  <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md mb-4">
    {message}
  </div>
);

export default ErrorMessage;
