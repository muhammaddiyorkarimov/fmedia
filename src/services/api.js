import axios from 'axios';

// Base URL
const API_URL = 'https://ferganamedia.pythonanywhere.com/';


const api = axios.create({
    baseURL: API_URL,
});

export default api;


/*
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

api.interceptors.response.use(config => config, error => {
    if(error?.response?.status === 401) {
      localStorage.removeItem('access_token');
      window.location = '/login';
    }
  
    return Promise.reject(error);
  });
*/