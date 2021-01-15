import React, { useState } from 'react';
import type { FC } from 'react';
import type { IRouteComponentProps } from 'umi';
import { history, useParams } from 'umi';
import SwiperCore, { Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { NavBar, Icon, Flex, Card, ActivityIndicator } from 'antd-mobile';
import { CustomerIcon } from '@/pages/Subscribe';
import { getSubscribeInfo } from '@/utils';
import { NoneText } from '@/components/PageLoading';
import { useModel } from '@@/plugin-model/useModel';
import styles from './index.module.less';
import 'swiper/components/scrollbar/scrollbar.less';
import 'swiper/swiper.less';

SwiperCore.use([Scrollbar]);

const AppInfo: FC<IRouteComponentProps> = () => {
  const { appId, author } = useParams<{ appId: string; author: string }>();
  const [loading, setLoading] = useState<boolean>(false);
  const appInfo = getSubscribeInfo(author, appId);
  const { isScriptable } = useModel('initialiseModel', (model) => model);
  return (
    <>
      <NavBar mode="light" icon={<Icon type="left" />} onLeftClick={() => history.goBack()} />
      <ActivityIndicator toast text="Loading..." animating={loading} />
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
                          setLoading: (value: boolean) => {
                            setLoading(value);
                          },
                        },
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
