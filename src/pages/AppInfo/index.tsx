import React, { useEffect, useState } from 'react';
import type { FC } from 'react';
import type { IRouteComponentProps } from 'umi';
import { history, useParams } from 'umi';
import SwiperCore, { Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { NavBar, Icon, Flex, Card, NoticeBar } from 'antd-mobile';
import { CustomerIcon } from '@/pages/Subscribe';
import webStore from '@/assets/webStore.txt';
import { getSubscribeInfo } from '@/utils';
import { NoneText } from '@/components/PageLoading';
import { useModel } from '@@/plugin-model/useModel';
import styles from './index.module.less';
import 'swiper/components/scrollbar/scrollbar.less';
import 'swiper/swiper.less';

SwiperCore.use([Scrollbar]);

const AppInfo: FC<IRouteComponentProps> = () => {
  const { appId, author } = useParams<{ appId: string; author: string }>();
  const appInfo = getSubscribeInfo(author, appId);
  const { isScriptable } = useModel('initialiseModel', (model) => model);
  const [version, setVersion] = useState<string>('暂无更新');
  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent('catalog-event', {
        detail: {
          ...appInfo,
          key: 'fetchAppInfo',
        },
      }),
    );

    function setLocalWidgetVersion(event: any) {
      setVersion(event.detail);
      window.removeEventListener('getLocalWidgetVersion', setLocalWidgetVersion);
    }

    window.addEventListener('getLocalWidgetVersion', setLocalWidgetVersion);
  }, [appInfo, setVersion]);
  const depend = appInfo && appInfo.depend ? `&depend=${JSON.stringify(appInfo.depend)}` : '';

  return (
    <>
      <NavBar mode="light" icon={<Icon type="left" />} onLeftClick={() => history.goBack()} />
      {!isScriptable && (
        <div style={{ marginTop: 10 }}>
          <NoticeBar
            mode="link"
            marqueeProps={{ loop: true }}
            action={
              <span
                onClick={() => {
                  window.Clipboard.copy(webStore);
                  window.location.href = 'scriptable:///add';
                }}
              >
                复制
              </span>
            }
          >
            使用网页版安装，请确保 Scriptable 里面存在 WebStore，点此复制代码,自动打开 app
            之后，请自行修改脚本名字为 WebStore
          </NoticeBar>
        </div>
      )}
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
                        detail: {
                          ...appInfo,
                          key: 'downloadButtonClicked',
                        },
                      });
                      window.dispatchEvent(catalogEvent);
                      console.log('触发下载功能');
                    }}
                  />
                ) : (
                  <span
                    onClick={() => {
                      window.location.href = `scriptable:///run?scriptName=WebStore&title=${appInfo.title}&name=${appInfo.name}&scriptURL=${appInfo.scriptURL}&version=${appInfo.version}${depend}`;
                    }}
                  >
                    <CustomerIcon icon={'https://img.icons8.com/clouds/344/download-2.png'} />
                  </span>
                )
              }
            />
            <Card.Body className={styles.container_body}>
              <Flex align={'start'} justify={'start'}>
                <div>
                  <img className={styles.appImg} src={appInfo.thumb} alt={appInfo.name} />
                  <div
                    style={{
                      textAlign: 'center',
                      fontSize: 12,
                    }}
                  >
                    版本号：{appInfo.version}
                  </div>
                </div>
                <Flex.Item>
                  <Flex direction={'column'} align={'start'}>
                    <div>
                      <h3 className={styles.appTitle}>{appInfo.title}</h3>
                      <div
                        style={{
                          textAlign: 'center',
                          fontSize: 12,
                        }}
                      >
                        本地版本：{version}
                      </div>
                    </div>
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
                  <Swiper scrollbar={{ draggable: true }} spaceBetween={10} slidesPerView={1.2}>
                    {appInfo.images.map((img, index) => {
                      return (
                        <SwiperSlide key={`img${index}`}>
                          <img style={{ maxWidth: '100%', width: 'auto' }} src={img} alt="" />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
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
