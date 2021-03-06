import axios from 'axios';

if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'http://localhost:8080';
} else if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = 'https://esocr-api.ezerka.in/';
}

export default axios;
