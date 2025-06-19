import React from 'react';
import { LogOut, Plus, CheckCircle, Check, Clock, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { apiService } from '../services/api';
import LoadingSpinner from '../components/common/LoadingSpinner.jsx';
import ErrorMessage from '../components/common/ErrorMessage.jsx';
import TaskList from '../components/tasks/TaskList.jsx';
import TaskModal from '../components/tasks/TaskModal.jsx';
import TaskFilters from '../components/tasks/TaskFilters.jsx';

const DashboardPage = () => {
  const [tasks, setTasks] = React.useState([]);
  const [filteredTasks, setFilteredTasks] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [filter, setFilter] = React.useState('all');
  const [sortBy, setSortBy] = React.useState('createdAt');
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedTask, setSelectedTask] = React.useState(null);
  const [error, setError] = React.useState('');
  const { user, logout } = useAuth();

  React.useEffect(() => {
    fetchTasks();
  }, []);

  React.useEffect(() => {
    filterAndSortTasks();
  }, [tasks, filter, sortBy]);

  const fetchTasks = async () => {
    try {
      setIsLoading(true);
      const response = await apiService.getTasks();
      setTasks(response.tasks || response);
    } catch (error) {
      setError('Failed to fetch tasks');
    } finally {
      setIsLoading(false);
    }
  };

  const filterAndSortTasks = () => {
    let filtered = [...tasks];
    if (filter === 'completed') {
      filtered = filtered.filter(task => task.completed);
    } else if (filter === 'pending') {
      filtered = filtered.filter(task => !task.completed);
    }
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'priority':
          const priorityOrder = { high: 3, medium: 2, low: 1 };
          return priorityOrder[b.priority] - priorityOrder[a.priority];
        case 'dueDate':
          if (!a.dueDate && !b.dueDate) return 0;
          if (!a.dueDate) return 1;
          if (!b.dueDate) return -1;
          return new Date(a.dueDate) - new Date(b.dueDate);
        default:
          return new Date(b.createdAt) - new Date(a.createdAt);
      }
    });
    setFilteredTasks(filtered);
  };

  const handleToggleComplete = async (taskId) => {
    try {
      const task = tasks.find(t => t._id === taskId);
      await apiService.updateTask(taskId, { completed: !task.completed });
      setTasks(tasks.map(t => t._id === taskId ? { ...t, completed: !t.completed } : t));
    } catch (error) {
      setError('Failed to update task');
    }
  };

  const handleDeleteTask = async (taskId) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      try {
        await apiService.deleteTask(taskId);
        setTasks(tasks.filter(t => t._id !== taskId));
      } catch (error) {
        setError('Failed to delete task');
      }
    }
  };

  const handleSaveTask = async (taskData) => {
    try {
      if (selectedTask) {
        const updatedTask = await apiService.updateTask(selectedTask._id, taskData);
        setTasks(tasks.map(t => t._id === selectedTask._id ? updatedTask.task : t));
      } else {
        const newTask = await apiService.createTask(taskData);
        setTasks([newTask.task, ...tasks]);
      }
    } catch (error) {
      throw new Error('Failed to save task');
    }
  };

  const openModal = (task = null) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedTask(null);
    setIsModalOpen(false);
  };

  const getTaskStats = () => {
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    const pending = total - completed;
    return { total, completed, pending };
  };

  const stats = getTaskStats();

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-indigo-100 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-500 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-white drop-shadow">Welcome back, {user?.name}!</h1>
              <p className="text-indigo-100">Manage your tasks efficiently</p>
            </div>
            <button
              onClick={logout}
              className="flex items-center px-4 py-2 text-white bg-purple-700 hover:bg-purple-800 rounded shadow transition duration-200"
            >
              <LogOut className="h-5 w-5 mr-2" />
              Logout
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-purple-200 via-purple-100 to-white p-6 rounded-xl shadow-md">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <CheckCircle className="h-8 w-8 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-purple-700">Total Tasks</p>
                <p className="text-2xl font-semibold text-purple-900">{stats.total}</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-indigo-200 via-indigo-100 to-white p-6 rounded-xl shadow-md">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-indigo-700">Completed</p>
                <p className="text-2xl font-semibold text-indigo-900">{stats.completed}</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-pink-100 via-purple-100 to-white p-6 rounded-xl shadow-md">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-pink-700">Pending</p>
                <p className="text-2xl font-semibold text-pink-900">{stats.pending}</p>
              </div>
            </div>
          </div>
        </div>
        {/* Task Management Section */}
        <div className="bg-white/60 backdrop-blur-md rounded-2xl shadow-lg">
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-lg font-semibold text-purple-800 mb-4 sm:mb-0">Your Tasks</h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <TaskFilters
                  filter={filter}
                  setFilter={setFilter}
                  sortBy={sortBy}
                  setSortBy={setSortBy}
                />
                <button
                  onClick={() => openModal()}
                  className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-200 shadow"
                >
                  <Plus className="h-5 w-5 mr-2" />
                  Add Task
                </button>
              </div>
            </div>
          </div>
          {/* Error Message */}
          {error && (
            <div className="p-4 bg-red-50 border-l-4 border-red-400 rounded-b-xl">
              <div className="flex">
                <AlertCircle className="h-5 w-5 text-red-400" />
                <div className="ml-3">
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              </div>
            </div>
          )}
          {/* Task List */}
          <TaskList
            tasks={filteredTasks}
            onToggleComplete={handleToggleComplete}
            onEdit={openModal}
            onDelete={handleDeleteTask}
          />
        </div>
      </div>
      {/* Task Modal */}
      <TaskModal
        isOpen={isModalOpen}
        onClose={closeModal}
        task={selectedTask}
        onSave={handleSaveTask}
      />
    </div>
  );
};

export default DashboardPage;
