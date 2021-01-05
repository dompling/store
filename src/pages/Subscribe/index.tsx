import React, { FC, Dispatch, SetStateAction } from "react";
import {
  SwipeAction,
  Card,
  Flex,
  WingBlank,
  Badge,
  Modal,
  ActivityIndicator
} from "antd-mobile";
import styles from "./index.module.less";
import { getSubscribe, setSubscribe } from "@/utils";
import { fetchJSONStore } from "@/service/api";

const prompt = Modal.prompt;

export const CustomerIcon: FC<{ icon: string } & React.HtmlHTMLAttributes<any>> = ({
  icon,
  ...props
}) => {
  return <img className={styles.icon} alt="" src={icon} {...props} />;
};

const AppAuthor: FC<{
  update: Dispatch<SetStateAction<{ [key: string]: API.subscribe; }>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  dataSource: {
    url: string; counts: number
  } & API.subscribe;
}>
  = ({ dataSource, update, setLoading }) => {
  return (
    <SwipeAction
      autoClose
      right={[
        {
          text: "更新",
          onPress: () => {
            setLoading(true);
            return fetchJSONStore(dataSource.url).then(() => {
              const data = getSubscribe();
              update(data);
            }).finally(() => {
              setLoading(false);
            });
          },
          style: { backgroundColor: "#77cad1", color: "white" }
        },
        {
          text: "删除",
          onPress: () => {
            const data = getSubscribe();
            delete data[dataSource.url];
            setSubscribe(data);
            update(data);
          },
          style: { backgroundColor: "red", color: "white" }
        }
      ]}
      style={{ marginBottom: 10, padding: "10px 0" }}
    >
      <Badge text={dataSource.counts} size="small" corner>
        <Flex>
          <img
            className={styles.avatar}
            src={dataSource.icon}
            alt="" />
          <div>
            <Flex className={styles.user_info} direction="column"
                  justify={"start"}>
              <div
                className={styles.user_title}>{dataSource.author}组件
              </div>
              <div>{dataSource.repo}</div>
              <div className={styles.user_text}>{dataSource.author}</div>
            </Flex>
          </div>
          <div style={{ marginLeft: "auto" }}>
            <a href={dataSource.repo} target="_blank">
              <CustomerIcon
                icon={"https://img.icons8.com/clouds/344/github.png"}
                style={{ width: "3rem", height: "3rem" }}
              />
            </a>
          </div>
        </Flex>
      </Badge>
    </SwipeAction>
  );
};

export default () => {
  const dataSource = getSubscribe();
  const [data, setData] = React.useState<{ [key: string]: API.subscribe }>(
    dataSource);
  const [loading, setLoading] = React.useState<boolean>(false);
  return (
    <WingBlank className={styles.container}>
      <ActivityIndicator toast animating={loading} />
      <Card>
        <Card.Header
          className={styles.widgetTitle}
          title={`组件订阅(${Object.keys(data).length})`}
          extra={
            <div className={styles.extra}>
              <CustomerIcon
                icon={"https://img.icons8.com/clouds/344/cloud-refresh.png"}
                onClick={async () => {
                  const fetchUri = Object.keys(data);
                  setLoading(true);
                  for (const url of fetchUri) {
                    await fetchJSONStore(url);
                  }
                  setData(getSubscribe());
                  setLoading(false);
                }}
              />
              <CustomerIcon
                icon={"https://img.icons8.com/clouds/344/add.png"}
                onClick={() => prompt(
                  "输入组件订阅地址", "", [
                    { text: "取消" },
                    {
                      text: "确定",
                      onPress: async (value) => {
                        setLoading(true);
                        await fetchJSONStore(value);
                        setData(getSubscribe());
                        setLoading(false);
                      }
                    }
                  ])}
              />
            </div>
          }
        />
        <Card.Body style={{ minHeight: 100 }}>
          {Object.keys((data)).map((github) => {
            const item = data[github];
            const dataItem = { ...item, counts: item.apps.length, url: github };
            return (
              <AppAuthor
                key={github}
                dataSource={dataItem}
                update={setData}
                setLoading={setLoading}
              />
            );
          })}
        </Card.Body>
      </Card>
    </WingBlank>
  );
}
