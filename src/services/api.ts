import axios from 'axios';

export const api = axios.create({
  // baseURL: 'https://json-server-rafael.herokuapp.com/',
  baseURL: 'http://localhost:3333/',
});