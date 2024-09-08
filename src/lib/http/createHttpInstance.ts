import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const createHttpInstance = (
  axiosConfig?: AxiosRequestConfig,
): AxiosInstance => {
  const defaultHeaders = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "X-Custom-Header": "",
  };

  const instance = axios.create({
    baseURL: axiosConfig?.baseURL,
    headers: {
      ...defaultHeaders,
      ...axiosConfig?.headers,
    },
  });

  instance.interceptors.request.use(
    (config) => config,
    (error) => Promise.reject(error),
  );

  instance.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error),
  );

  return instance;
};

export default createHttpInstance;
