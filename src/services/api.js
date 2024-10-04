import axios from 'axios';

// Base URL
const API_URL = 'https://ferganamedia.pythonanywhere.com/';


const api = axios.create({
    baseURL: API_URL,
});

export default api;