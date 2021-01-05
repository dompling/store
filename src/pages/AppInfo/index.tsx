import React, { FC } from "react";
import { NavBar, Icon, Flex, Card } from "antd-mobile";
import { CustomerIcon } from "@/pages/Subscribe";
import { IRouteComponentProps, history } from "umi";
import { getSubscribeInfo } from "@/utils";
import { NoneText } from "@/components/PageLoading";
import styles from "./index.module.less";

const AppInfo: FC<IRouteComponentProps> = (props) => {
  const { match } = props;
  const { appId } = match.params as { appId: string };
  const appInfo = getSubscribeInfo(appId);
  console.log(appInfo);
  return (<>
    <NavBar
      mode="light"
      icon={<Icon type="left" />}
      onLeftClick={() => history.goBack()}
    />
    {
      appInfo ? (
        <div className={styles.container}>
          <Card full>
            <Card.Header title="组件信息" extra={
              <CustomerIcon
                icon={"https://img.icons8.com/clouds/344/download-2.png"} />
            } />
            <Card.Body className={styles.container_body}>
              <Flex align={"start"} justify={"start"}>
                <img
                  className={styles.appImg}
                  src={appInfo.thumb}
                  alt={appInfo.name}
                />
                <Flex.Item>
                  <Flex direction={"column"} align={"start"}>
                    <Flex>
                      <h3 className={styles.appTitle}>
                        {appInfo.title}
                      </h3>
                    </Flex>
                    <Flex.Item>
                      <div className={styles.appDesc}>
                        {appInfo.description}
                      </div>
                    </Flex.Item>
                  </Flex>
                </Flex.Item>
              </Flex>
            </Card.Body>
          </Card>
          {appInfo.html &&
          <div dangerouslySetInnerHTML={{ "__html": appInfo.html }} />}
          {appInfo.images && (
            <div className={styles.photos}>
              <Card full>
                <Card.Header title="组件相册" />
                <Card.Body>
                  {
                    appInfo.images.map(img => {
                      return <img src={img} alt="" />;
                    })
                  }
                </Card.Body>
              </Card>

            </div>
          )}
        </div>

      ) : <NoneText>没有找到该组件</NoneText>
    }
  </>);
};
export default AppInfo;
