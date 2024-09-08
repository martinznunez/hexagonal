import { RequestOptions } from "../../../../lib/domain/types";
import fetcher from "../../../../lib/http/fetcher";

interface UserResponse {
  results: string[];
}

export const getAllUser = async (
  endpoint: string,
  options: RequestOptions,
): Promise<UserResponse> => {
  return fetcher(endpoint, options);
};
