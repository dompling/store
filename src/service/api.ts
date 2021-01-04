import { request } from "umi";

export const fetchJSONStore = async (url: string) => {
  const response = await request(url, { method: "get" });
  return { data: response };
};
