import axios from 'axios';
import { usuario } from './requests/userRequest';

const api = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    // 'Authorization': `${!token ? "" : "Bearer " + token}`,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  }
});

export const requests = {
  ...usuario(api, '/user'),
}

export default api;