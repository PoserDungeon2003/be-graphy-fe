import axios, { AxiosRequestConfig } from "axios";

export const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export function setTokenHeader(token: string) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;
}

async function _get<T>(url: string, options?: AxiosRequestConfig): Promise<T> {
  const response = await axios.get(url, { ...options });
  return response.data;
}

async function _post(url: string, data?: any, options?: AxiosRequestConfig<string> | undefined) {
  const response = await axios.post(url, JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  return response.data;
}

async function _postMultiPart(
  url: string,
  formData: FormData,
  options?: AxiosRequestConfig,
) {
  const response = await axios.post(url, formData, {
    headers: { "Content-Type": "multipart/form-data" },
    ...options,
  });
  return response.data;
}
async function _putMultiPart(
  url: string,
  formData: FormData,
  options?: AxiosRequestConfig,
) {
  const response = await axios.put(url, formData, {
    headers: { "Content-Type": "multipart/form-data" },
    ...options,
  });
  return response.data;
}

async function _put(url: string, data?: any) {
  const response = await axios.put(url, JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
}

async function _delete<T>(url: string): Promise<T> {
  const response = await axios.delete(url);
  return response.data;
}

async function _deleteWithOptions<T>(
  url: string,
  options?: AxiosRequestConfig,
): Promise<T> {
  const response = await axios.delete(url, { ...options });
  return response.data;
}

async function _patch(url: string, data?: any, options?: any) {
  const response = await axios.patch(url, JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  return response.data;
}

export default {
  get: _get,
  post: _post,
  postMultiPart: _postMultiPart,
  putMultiPart: _putMultiPart,
  put: _put,
  delete: _delete,
  deleteWithOptions: _deleteWithOptions,
  patch: _patch,
};
