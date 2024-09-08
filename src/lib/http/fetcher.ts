import { AxiosRequestConfig } from "axios";

import { RequestOptions } from "../domain/types";

import createHttpInstance from "./createHttpInstance";

const httpInstance = createHttpInstance();

const fetcher = async <T>(
  endpoint: string,
  options?: RequestOptions,
): Promise<T> => {
  try {
    const axiosConfig: AxiosRequestConfig = {
      method: options?.method || "GET",
      url: endpoint,
      headers: options?.headers || {},
      data: options?.body,
    };

    const response = await httpInstance.request<T>(axiosConfig);

    return response.data;
  } catch (error: any) {
    const errorMessage = error.response
      ? `Request failed with status ${error.response.status}`
      : error.request
        ? "No response received from server"
        : "Failed to send request";

    throw new Error(errorMessage);
  }
};

export default fetcher;
