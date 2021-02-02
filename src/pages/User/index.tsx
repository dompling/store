import React from 'react';
import { WingBlank, WhiteSpace, Card, Flex, List, Modal, Toast } from 'antd-mobile';
import { useModel } from '@@/plugin-model/useModel';
import styles from '@/pages/User/index.module.less';
import { NoneText } from '@/components/PageLoading';
import { saveCache } from '@/service/api';
import { avatar_url, getSubscribe, setSubscribe } from '@/utils';
import { useRequest } from '@umijs/hooks';

const { Item } = List;
const { prompt } = Modal;
const Index = () => {
  const BoxJS = useModel('boxjsModel', (model) => model);
  const cache = useRequest(saveCache, { manual: true });
  const dataSource = getSubscribe();
  return BoxJS.data.usercfgs ? (
    <WingBlank size="sm">
      <WhiteSpace size="lg" />
      <WhiteSpace size="lg" />
      <WhiteSpace size="lg" />
      <WhiteSpace size="lg" />
      <Card>
        <Card.Body className={styles.container}>
          <Flex justify={'center'} direction={'column'} className={styles.avatarView}>
            <img
              alt={'头像'}
              src={BoxJS.data.usercfgs.icon || avatar_url}
              className={styles.avatar}
            />
            <span>{BoxJS.data.usercfgs.name}</span>
          </Flex>
          <WhiteSpace size="lg" />
          <List>
            <Item
              thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
              arrow="horizontal"
              onClick={async () => {
                window.loadingEvent.detail.setLoading(true, '备份中');
                const cacheData = [
                  {
                    key: 'scriptable',
                    val: JSON.stringify(dataSource, null, `\t`),
                  },
                  {
                    key: 'chavy_boxjs_cur_sessions',
                    val: JSON.stringify(BoxJS.data.curSessions),
                  },
                ];
                const res = await cache.run(cacheData);
                window.loadingEvent.detail.setLoading(false, '');
                if (res) BoxJS.setBoxJS(res);
              }}
            >
              备份订阅
            </Item>
            <Item
              thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
              onClick={() => {
                if (BoxJS.data.datas.scriptable) {
                  setSubscribe(JSON.parse(BoxJS.data.datas.scriptable));
                  Toast.success('恢复成功');
                } else {
                  Toast.fail('暂未找到备份订阅');
                }
              }}
              arrow="horizontal"
            >
              恢复订阅
            </Item>
          </List>
        </Card.Body>
      </Card>
    </WingBlank>
  ) : (
    <NoneText>
      <div
        onClick={() => {
          prompt(
            'BoxJS域名设置',
            '',
            [
              { text: '取消' },
              {
                text: '确定',
                onPress: async (value) => {
                  localStorage.setItem('boxjs', value);
                  Toast.success(`设置成功\n当前 BoxJS 域名为：${value}`);
                },
              },
            ],
            'default',
            localStorage.getItem('boxjs') || 'boxjs.net',
          );
        }}
      >
        BoxJS 连接失败
        <WhiteSpace size="lg" />
        <span style={{ color: 'red' }}> 点击设置 BoxJS 域名</span>
      </div>
    </NoneText>
  );
};

export default Index;
