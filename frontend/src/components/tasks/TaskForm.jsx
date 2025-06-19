import React from 'react';

const TaskForm = ({ formData, setFormData, errors, isLoading, onSubmit, onCancel }) => (
  <form onSubmit={onSubmit}>
    {errors.general && (
      <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md mb-4">
        {errors.general}
      </div>
    )}
    <div className="mb-4">
      <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
        Title *
      </label>
      <input
        id="title"
        type="text"
        className={`w-full px-3 py-2 border ${errors.title ? 'border-red-300' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
        placeholder="Task title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />
      {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title}</p>}
    </div>
    <div className="mb-4">
      <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
        Description *
      </label>
      <textarea
        id="description"
        rows={3}
        className={`w-full px-3 py-2 border ${errors.description ? 'border-red-300' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
        placeholder="Task description"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
      />
      {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description}</p>}
    </div>
    <div className="mb-4">
      <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-1">
        Priority
      </label>
      <select
        id="priority"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        value={formData.priority}
        onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </div>
    <div className="mb-6">
      <label htmlFor="dueDate" className="block text-sm font-medium text-gray-700 mb-1">
        Due Date
      </label>
      <input
        id="dueDate"
        type="date"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        value={formData.dueDate}
        onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
      />
    </div>
    <div className="flex justify-end space-x-3">
      <button
        type="button"
        onClick={onCancel}
        className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition duration-200"
      >
        Cancel
      </button>
      <button
        type="submit"
        disabled={isLoading}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? 'Saving...' : 'Save Task'}
      </button>
    </div>
  </form>
);

export default TaskForm;
