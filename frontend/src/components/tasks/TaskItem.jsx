import React from 'react';
import { Edit3, Trash2, Check, Calendar } from 'lucide-react';

const getPriorityColor = (priority) => {
  switch (priority) {
    case 'high': return 'bg-red-100 text-red-800 border-red-200';
    case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'low': return 'bg-green-100 text-green-800 border-green-200';
    default: return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

const TaskItem = ({ task, onToggleComplete, onEdit, onDelete }) => (
  <div className="p-6 hover:bg-gray-50 transition duration-200">
    <div className="flex items-start justify-between">
      <div className="flex items-start space-x-3 flex-1">
        <button
          onClick={() => onToggleComplete(task._id)}
          className={`mt-1 flex-shrink-0 h-5 w-5 rounded border-2 flex items-center justify-center transition duration-200 ${
            task.completed
              ? 'bg-green-500 border-green-500 text-white'
              : 'border-gray-300 hover:border-green-500'
          }`}
        >
          {task.completed && <Check className="h-3 w-3" />}
        </button>
        <div className="flex-1 min-w-0">
          <h3 className={`text-lg font-medium ${
            task.completed ? 'line-through text-gray-500' : 'text-gray-900'
          }`}>
            {task.title}
          </h3>
          <p className={`mt-1 text-sm ${
            task.completed ? 'text-gray-400' : 'text-gray-600'
          }`}>
            {task.description}
          </p>
          <div className="mt-2 flex items-center space-x-4">
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getPriorityColor(task.priority)}`}>
              {task.priority}
            </span>
            {task.dueDate && (
              <span className="inline-flex items-center text-xs text-gray-500">
                <Calendar className="h-3 w-3 mr-1" />
                {new Date(task.dueDate).toLocaleDateString()}
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-2 ml-4">
        <button
          onClick={() => onEdit(task)}
          className="p-2 text-gray-400 hover:text-blue-600 transition duration-200"
        >
          <Edit3 className="h-4 w-4" />
        </button>
        <button
          onClick={() => onDelete(task._id)}
          className="p-2 text-gray-400 hover:text-red-600 transition duration-200"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  </div>
);

export default TaskItem;
