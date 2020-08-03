import axios from 'axios';

const api = axios.create({
  baseURL: window.location.hostname.includes('localhost')
    ? 'http://localhost:8080/'
    : 'https://customflix-server.herokuapp.com/',
});

export default api;
