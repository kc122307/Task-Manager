import React from 'react';

const Header = () => (
  <header className="bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-500 text-white py-4 shadow-lg">
    <div className="container mx-auto px-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold tracking-tight drop-shadow">Task Manager</h1>
      {/* Add nav links or user info here if needed */}
    </div>
  </header>
);

export default Header;
