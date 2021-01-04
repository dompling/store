import React from "react";
import { useRequest } from "umi";
import * as services from "@/service/api";
import PageLoading from "@/components/PageLoading";

export default () => {
  const { data } = useRequest(() => {
    return services.fetchJSONStore(
      "https://raw.githubusercontent.com/dompling/Scriptable/master/install.json");
  });
  const row = (obj: any) => {
    return (
      <div key={obj.title} style={{ marginBottom: 10 }}>
        <div style={{ padding: "0 15px", background: "#fff" }}>
          <div
            style={{
              lineHeight: "50px",
              color: "#888",
              fontSize: 18,
              borderBottom: "1px solid #F6F6F6"
            }}
          >{obj.title}</div>
          <div style={{
            display: "flex",
            padding: "15px 0"
          }}>
            <img
              style={{ height: "64px", marginRight: "15px", width: "64px  " }}
              src={obj.thumb}
              alt=""
            />
            <div style={{ lineHeight: 1 }}>
              <div style={{
                marginBottom: "8px",
                fontWeight: "bold"
              }}>{obj.description}</div>
              <div>
              <span
                style={{ fontSize: "30px", color: "#FF6E27" }}>{obj.name}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return data ? data.apps.map((item: any) => row(item)) : <PageLoading />;
}
