import React from 'react';
import type { FC } from 'react';
import type { IRouteComponentProps } from 'umi';
import { history } from 'umi';
import { NavBar, Icon, Flex, Card } from 'antd-mobile';
import { CustomerIcon } from '@/pages/Subscribe';

import { getSubscribeInfo } from '@/utils';
import { NoneText } from '@/components/PageLoading';
import styles from './index.module.less';
import { useModel } from '@@/plugin-model/useModel';

const AppInfo: FC<IRouteComponentProps> = (props) => {
  const { match } = props;
  const { appId } = match.params as { appId: string };
  const appInfo = getSubscribeInfo(appId);

  const { isScriptable } = useModel('initialiseModel', (model) => model);
  return (
    <>
      <NavBar mode="light" icon={<Icon type="left" />} onLeftClick={() => history.goBack()} />
      {appInfo ? (
        <div className={styles.container}>
          <Card full>
            <Card.Header
              title="组件信息"
              extra={
                isScriptable ? (
                  <CustomerIcon
                    icon={'https://img.icons8.com/clouds/344/download-2.png'}
                    onClick={() => {
                      const catalogEvent = new CustomEvent('catalog-event', {
                        detail: { ...appInfo, key: 'downloadButtonClicked' },
                      });
                      window.dispatchEvent(catalogEvent);
                      console.log('触发下载功能');
                    }}
                  />
                ) : (
                  <a href={appInfo.scriptURL} download={`${appInfo.name}.js`}>
                    <CustomerIcon icon={'https://img.icons8.com/clouds/344/download-2.png'} />
                  </a>
                )
              }
            />
            <Card.Body className={styles.container_body}>
              <Flex align={'start'} justify={'start'}>
                <img className={styles.appImg} src={appInfo.thumb} alt={appInfo.name} />
                <Flex.Item>
                  <Flex direction={'column'} align={'start'}>
                    <Flex>
                      <h3 className={styles.appTitle}>{appInfo.title}</h3>
                    </Flex>
                    <Flex.Item>
                      <div className={styles.appDesc}>{appInfo.description}</div>
                    </Flex.Item>
                  </Flex>
                </Flex.Item>
              </Flex>
            </Card.Body>
          </Card>
          {appInfo.html && (
            <Card full>
              <Card.Header title="组件描述" />
              <Card.Body>
                <div dangerouslySetInnerHTML={{ __html: appInfo.html.join('') }} />
              </Card.Body>
            </Card>
          )}
          {appInfo.images && (
            <div className={styles.photos}>
              <Card full>
                <Card.Header title="组件相册" />
                <Card.Body>
                  {appInfo.images.map((img, index) => {
                    return <img key={`img${index}`} src={img} alt="" />;
                  })}
                </Card.Body>
              </Card>
            </div>
          )}
        </div>
      ) : (
        <NoneText>没有找到该组件</NoneText>
      )}
    </>
  );
};
export default AppInfo;
