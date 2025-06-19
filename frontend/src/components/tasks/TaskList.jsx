import React from 'react';
import TaskItem from './TaskItem';
import { CheckCircle } from 'lucide-react';

const TaskList = ({ tasks, onToggleComplete, onEdit, onDelete }) => {
  if (!tasks.length) {
    return (
      <div className="p-8 text-center">
        <CheckCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-500">No tasks found.</p>
      </div>
    );
  }
  return (
    <div className="divide-y divide-gray-200">
      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          onToggleComplete={onToggleComplete}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;
