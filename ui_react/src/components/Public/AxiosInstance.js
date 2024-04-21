import axios from 'axios';

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = 'http://localhost:8080'; 

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken'); // Update token name to match backend
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
