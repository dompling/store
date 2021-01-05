import { request } from "umi";
import { Toast } from "antd-mobile";

export const fetchJSONStore = async (url: string) => {
  const response = await request<API.subscribe>(url, { method: "get" });
  try {
    if (response.scriptable) {
      const dataSource = (JSON.parse(
        localStorage.getItem("dataSource") || "{}")) as { [key: string]: any };
      dataSource[url] = response;
      localStorage.setItem("dataSource", JSON.stringify(dataSource));
    } else {
      Toast.fail("订阅地址错误");
    }
  } catch (e) {
    Toast.fail(JSON.stringify(e));
  }
};
