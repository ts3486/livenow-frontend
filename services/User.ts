import { apiClient } from 'api/api';

export const getUser = async () => {
  const response = await apiClient.get('http://127.0.0.1:8000/users', { params: {} });
  return response.data;
};
