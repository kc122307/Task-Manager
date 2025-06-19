import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
    this.axiosInstance = axios.create({
      baseURL: this.baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.axiosInstance.interceptors.request.use((config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    });
  }

  async request(url, options = {}) {
    try {
      const response = await this.axiosInstance({
        url,
        ...options,
      });
      return response.data;
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        throw new Error(error.response.data.message);
      }
      throw new Error('Something went wrong');
    }
  }

  // Auth methods
  async register(userData) {
    return this.request('/api/auth/register', {
      method: 'POST',
      data: userData,
    });
  }

  async login(credentials) {
    return this.request('/api/auth/login', {
      method: 'POST',
      data: credentials,
    });
  }

  async getCurrentUser() {
    return this.request('/api/auth/me');
  }

  // Task methods
  async getTasks() {
    return this.request('/api/tasks');
  }

  async createTask(taskData) {
    return this.request('/api/tasks', {
      method: 'POST',
      data: taskData,
    });
  }

  async updateTask(id, updates) {
    return this.request(`/api/tasks/${id}`, {
      method: 'PUT',
      data: updates,
    });
  }

  async deleteTask(id) {
    return this.request(`/api/tasks/${id}`, {
      method: 'DELETE',
    });
  }
}

export const apiService = new ApiService();
