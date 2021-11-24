import axios from 'axios';

const api = axios.create({
  baseURL: 'http://177.154.174.83:8080/'
});

export default api;