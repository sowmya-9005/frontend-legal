// src/axiosConfig.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backend-legal.onrender.com/api', // base URL of your backend
});

// Add a request interceptor to attach the token automatically
api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

export default api;
