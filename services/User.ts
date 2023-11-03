import { apiClient } from 'api/api';
import { User } from '@/models/User';

export const getUser = async (): Promise<User[]> => {
  const response = await apiClient.get('/users', { params: {} });
  return response.data;
};
