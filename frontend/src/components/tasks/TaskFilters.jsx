import React from 'react';

const TaskFilters = ({ filter, setFilter, sortBy, setSortBy }) => (
  <div className="flex items-center space-x-4">
    <select
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
    >
      <option value="all">All Tasks</option>
      <option value="pending">Pending</option>
      <option value="completed">Completed</option>
    </select>
    <select
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value)}
      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
    >
      <option value="createdAt">Date Created</option>
      <option value="priority">Priority</option>
      <option value="dueDate">Due Date</option>
    </select>
  </div>
);

export default TaskFilters;

