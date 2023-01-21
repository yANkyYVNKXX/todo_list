import axios from 'axios';

export const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api/client/${process.env.REACT_APP_API_VERSION}/public`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
