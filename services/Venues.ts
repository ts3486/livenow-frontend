import { apiClient } from 'api/api';

export const getVenues = async () => {
  const response = await apiClient.get('http://127.0.0.1:8000/venue', { params: {} });
  return response.data;
};
