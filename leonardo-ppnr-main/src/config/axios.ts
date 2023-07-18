import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";

export const BACKEND_URL = "";

export const axiosPublic = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

export const axiosPrivate = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    "Content-Type": "application/json"
  },
  withCredentials: true
});

const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
};

const onResponseError = async (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

axiosPrivate.interceptors.request.use(onRequest, onRequestError);
axiosPrivate.interceptors.response.use(onResponse, onResponseError);
