import React from "react";
import { useRequest } from "umi";
import * as services from "@/service/api";
import PageLoading from "@/components/PageLoading";
import styles from "./index.module.less";

export default () => {
  const { data } = useRequest(() => {
    return services.fetchJSONStore(
      "https://raw.githubusercontent.com/dompling/Scriptable/master/install.json");
  });
  const row = (obj: any) => {
    return (
      <div key={obj.title} className={styles.list}>
        <div className={styles.list_item}>
          <div className={styles.list_item_title}>{obj.title}</div>
          <div className={styles.flex}>
            <img
              className={styles.list_item_img}
              src={obj.thumb}
              alt=""
            />
            <div>
              <div className={styles.list_item_en}>{obj.name}</div>
              <div className={styles.list_item_desc}>{obj.description}</div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return data ? data.apps.map((item: any) => row(item)) : <PageLoading />;
}
