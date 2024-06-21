import { AxiosRequestConfig } from "axios";

import { RequestOptions } from "../domain/types";

import createHttpInstance from "./createHttpInstance";

const fetcher = async <T>(
  endpoint: string,
  options?: RequestOptions,
): Promise<T> => {
  try {
    const axiosConfig: AxiosRequestConfig = {
      method: options?.method || "GET",
      url: endpoint,
      headers: {
        ...(options?.headers && typeof options.headers === "object"
          ? options.headers
          : {}),
        "X-Custom-Header": "",
      },
      data: options?.body,
    };

    const httpInstance = createHttpInstance({
      baseURL: endpoint,
      ...axiosConfig,
    });

    const response = await httpInstance.request(axiosConfig);

    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(`Request failed with status ${error.response.status}`);
    } else if (error.request) {
      throw new Error("No response received from server");
    } else {
      throw new Error("Failed to send request");
    }
  }
};

export default fetcher;
