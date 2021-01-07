import type { FC, Dispatch, SetStateAction } from 'react';
import React, { forwardRef } from 'react';
import arrayMove from 'array-move';
import { SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';
import { SwipeAction, Card, Flex, WingBlank, Badge, Modal, ActivityIndicator } from 'antd-mobile';
import styles from './index.module.less';
import { getSubscribe, setSubscribe } from '@/utils';
import { fetchJSONStore } from '@/service/api';
import { NoneText } from '@/components/PageLoading';

const { prompt } = Modal;
export type CIconProps = { icon: string } & React.HtmlHTMLAttributes<any>;

export const CustomerIcon = forwardRef<any, CIconProps>(({ icon, ...props }, ref) => {
  return <img ref={ref} className={styles.icon} alt="" src={icon} {...props} />;
});

type AppAuthorProps = {
  update: Dispatch<SetStateAction<Record<string, API.subscribe>>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  dataSource: {
    url: string;
    counts: number;
  } & API.subscribe;
};

const DragHandle = SortableHandle(({ counts }: { counts: number }) => (
  <Badge style={{ userSelect: 'none' }} text={counts} size="small" />
));

const AppAuthor: FC<AppAuthorProps> = ({ dataSource, update, setLoading }) => {
  return (
    <SwipeAction
      className={styles.subList}
      autoClose
      right={[
        {
          text: '更新',
          onPress: () => {
            setLoading(true);
            return fetchJSONStore(dataSource.url)
              .then(() => {
                const data = getSubscribe();
                update(data);
              })
              .finally(() => {
                setLoading(false);
              });
          },
          style: { backgroundColor: '#77cad1', color: 'white' },
        },
        {
          text: '删除',
          onPress: () => {
            const data = getSubscribe();
            delete data[dataSource.url];
            setSubscribe(data);
            update(data);
          },
          style: { backgroundColor: 'red', color: 'white' },
        },
      ]}
      style={{ marginBottom: 10, padding: '10px 0' }}
    >
      <Flex>
        <img className={styles.avatar} alt="" src={dataSource.icon} />
        <div>
          <Flex className={styles.user_info} direction="column" justify={'start'}>
            <div className={styles.user_title}>{dataSource.author} 组件</div>
            <div>{dataSource.repo}</div>
            <div className={styles.user_text}>@{dataSource.author}</div>
          </Flex>
        </div>
        <DragHandle counts={dataSource.counts} />
        <div style={{ marginLeft: 'auto' }}>
          <a href={dataSource.repo} target="_blank">
            <CustomerIcon
              icon={'https://img.icons8.com/clouds/344/github.png'}
              style={{ width: '3rem', height: '3rem' }}
            />
          </a>
        </div>
      </Flex>
    </SwipeAction>
  );
};

const SortableItem = SortableElement((props: AppAuthorProps) => <AppAuthor {...props} />);

const SortableList = SortableContainer(({ children }: any) => {
  return <div>{children}</div>;
});

export default () => {
  const dataSource = getSubscribe();
  const [data, setData] = React.useState<Record<string, API.subscribe>>(dataSource);
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
                icon={'https://img.icons8.com/clouds/344/cloud-refresh.png'}
                onClick={async () => {
                  const fetchUri = Object.keys(data);
                  setLoading(true);
                  // eslint-disable-next-line no-restricted-syntax
                  for (const url of fetchUri) {
                    // eslint-disable-next-line no-await-in-loop
                    await fetchJSONStore(url);
                  }
                  setData(getSubscribe());
                  setLoading(false);
                }}
              />
              <CustomerIcon
                icon={'https://img.icons8.com/clouds/344/add.png'}
                onClick={() =>
                  prompt('输入组件订阅地址', '', [
                    { text: '取消' },
                    {
                      text: '确定',
                      onPress: async (value) => {
                        setLoading(true);
                        await fetchJSONStore(value);
                        setData(getSubscribe());
                        setLoading(false);
                      },
                    },
                  ])
                }
              />
            </div>
          }
        />
        <Card.Body style={{ minHeight: 100 }}>
          <SortableList
            useDragHandle
            helperClass={styles['row-dragging']}
            onSortEnd={({ oldIndex, newIndex }: any) => {
              const sortDataKey = Object.keys(data);
              const updateSort = arrayMove(sortDataKey, oldIndex, newIndex);
              const newDataSource: any = {};
              updateSort.forEach((key) => {
                newDataSource[key] = dataSource[key];
              });
              setSubscribe(newDataSource);
              setData(newDataSource);
            }}
          >
            {Object.keys(data).length ? (
              Object.keys(data).map((github, index) => {
                const item = data[github];
                const dataItem = {
                  ...item,
                  counts: item.apps.length,
                  url: github,
                };
                return (
                  <SortableItem
                    key={github}
                    index={index}
                    dataSource={dataItem}
                    update={setData}
                    setLoading={setLoading}
                  />
                );
              })
            ) : (
              <NoneText style={{ height: '5rem' }}>暂未添加相关订阅</NoneText>
            )}
          </SortableList>
        </Card.Body>
      </Card>
    </WingBlank>
  );
};
