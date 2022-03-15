import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/onecall',
  headers: {
    'content-type': 'application/json',
    accept: 'application/json',
  },
});

export default api;