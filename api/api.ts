import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
const headers = {};

console.log(baseURL, process.env.NODE_ENV);

export const apiClient = axios.create({
  baseURL,
});
