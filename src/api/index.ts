import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://photofinder-bsenb7g3cpb4bpe3.southeastasia-01.azurewebsites.net',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interface cho response API
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: any;
}

export default api;