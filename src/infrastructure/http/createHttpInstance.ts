import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const createHttpInstance = (
  axiosConfig?: AxiosRequestConfig,
): AxiosInstance => {
  const instance = axios.create({
    baseURL: axiosConfig?.baseURL,
    headers: axiosConfig?.headers,
  });

  instance.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      console.error("Error:", error);

      return Promise.reject(error);
    },
  );

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      console.error("Error en respuesta:", error);

      return Promise.reject(error);
    },
  );

  return instance;
};

export default createHttpInstance;
