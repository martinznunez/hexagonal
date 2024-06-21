import { RequestOptions } from "../../../infrastructure/domain/types";
import fetcher from "../../../infrastructure/http/fetcher";

interface UserResponse {
  results: string[];
}

export const getAllUser = async (
  endpoint: string,
  options: RequestOptions,
): Promise<UserResponse> => {
  return fetcher(endpoint, options);
};
