import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { CheckCircle, Filter, Clock } from 'lucide-react';

const LandingPage = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Task Manager
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Organize your life, boost your productivity. Manage your tasks efficiently with our intuitive task management system.
          </p>
          <div className="space-x-4">
            <Link
              to="/register"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-8 rounded-lg transition duration-300"
            >
              Login
            </Link>
          </div>
        </div>
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <CheckCircle className="h-10 w-10 text-green-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Easy Task Creation</h3>
            <p className="text-gray-600">Create and organize tasks with priorities and due dates</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Filter className="h-10 w-10 text-blue-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Smart Filtering</h3>
            <p className="text-gray-600">Filter and sort tasks to focus on what matters most</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Clock className="h-10 w-10 text-purple-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Track Progress</h3>
            <p className="text-gray-600">Monitor your productivity and task completion rates</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
