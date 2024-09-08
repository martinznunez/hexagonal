export type HttpMethod =
  | "GET"
  | "POST"
  | "PUT"
  | "DELETE"
  | "PATCH"
  | "OPTIONS";

export interface RequestOptions {
  method: HttpMethod;
  headers?: Record<string, string>;
  body?: any;
}
