// src/api/authApi.ts
import axios, { AxiosResponse } from 'axios';
import { SignupRQ } from '../types'; // Đảm bảo type này được định nghĩa

const api = axios.create({
  baseURL: 'https://photofinder-bsenb7g3cpb4bpe3.southeastasia-01.azurewebsites.net', // Cập nhật URL API thực tế
  headers: {
    'Content-Type': 'application/json',
  },
});

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: any;
}

export const registerUser = async (data: SignupRQ): Promise<ApiResponse<any>> => {
  try {
    const response: AxiosResponse = await api.post('/api/Auth/Register', data);
    return {
      success: true,
      data: response.data,
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.response?.data?.message || 'Đăng ký thất bại',
      errors: error.response?.data?.errors,
    };
  }
};
