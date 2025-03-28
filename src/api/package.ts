import { AxiosResponse } from 'axios';
import api, { ApiResponse } from '.';
import { PackageModel } from '../types';
import { useQuery } from '@tanstack/react-query';
import request, { BASE_URL } from '../data/request';

export const getAllPackages = async (): Promise<ApiResponse<PackageModel[]>> => {
  try {
    const response: AxiosResponse = await api.get('/api/Package/Get_All_Packages');
    if (response.status >= 200 && response.status < 300) {
      return {
        success: true,
        data: response.data,
      };
    } else {
      return {
        success: false,
        message: response.data?.message || 'Không thể lấy danh sách gói chụp ảnh',
        errors: response.data?.errors,
      };
    }
  } catch (error: any) {
    return {
      success: false,
      message:
        error.response?.data?.message ||
        error.message ||
        'Lỗi hệ thống, vui lòng thử lại sau',
      errors: error.response?.data?.errors || null,
    };
  }
};

export const useGetAllPackages = () => {
  return useQuery({
    queryKey: ['packages'],
    queryFn: async () => await getAllPackages(),
  })
}

export const createPackage = async (data: PackageModel): Promise<ApiResponse<any>> => {
  try {
    const response: AxiosResponse = await api.post('/api/Package/Create_Package', data);
    if (response.status >= 200 && response.status < 300) {
      return {
        success: true,
        data: response.data,
      };
    } else {
      return {
        success: false,
        message: response.data?.message || 'Không thể tạo gói chụp ảnh',
        errors: response.data?.errors,
      };
    }
  } catch (error: any) {
    return {
      success: false,
      message:
        error.response?.data?.message ||
        error.message ||
        'Lỗi hệ thống, vui lòng thử lại sau',
      errors: error.response?.data?.errors || null,
    };
  }
}

export const getPackageById = async (token: string, id: string): Promise<PackageModel> => {
  return await request.get(`${BASE_URL}/api/Package/Get_Package_By_Id?id=${id}`, {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  })
}

export const useGetPackageById = (token: string, id: string) => {
  return useQuery({
    queryKey: ['package', id],
    queryFn: () => getPackageById(token, id),
  })
}