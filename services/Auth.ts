import { apiClient } from 'api/api';
import { User } from '@/models/User';
import { RegisterForm, LoginForm } from '@/models/Auth';

export const register = async (payload: RegisterForm) => {
  const response = await apiClient.post('/register', payload);
  console.log(response);
  return response;
};

export const login = async (payload: LoginForm) => {
  const response = await apiClient.post('/login', payload);
};

export const logout = async () => {
  const response = await apiClient.post('/logout');
};
