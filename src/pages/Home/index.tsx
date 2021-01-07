import React from 'react';
import { SearchBar, Grid, Accordion } from 'antd-mobile';
import { NoneText } from '@/components/PageLoading';
import { getSubscribe } from '@/utils';
import { Link } from 'umi';
import styles from './index.module.less';

let timer: any;
export default () => {
  const dataSource = getSubscribe();
  const [data, setData] = React.useState<Record<string, API.subscribe>>(dataSource);

  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <SearchBar
          placeholder="请输入"
          onClear={() => {
            setData(dataSource);
          }}
          onChange={(value) => {
            if (!value) {
              setData(dataSource);
              return;
            }
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => {
              const newData: Record<string, API.subscribe> = {};
              Object.keys(dataSource).forEach((key) => {
                const dataItem = data[key];
                const apps = dataItem.apps.filter((app) => app.title.indexOf(value) > -1);
                if (apps) newData[key] = { ...dataItem, apps };
              });
              setData(newData);
            }, 500);
          }}
        />
      </div>
      {Object.keys(data).length ? (
        <Accordion defaultActiveKey={Object.keys(data)}>
          {Object.keys(data).map((key) => {
            const appsInfo = data[key];
            const { apps, author, icon } = appsInfo as API.subscribe;
            return (
              <Accordion.Panel
                key={key}
                header={
                  <div className={styles.avatar}>
                    <img className={styles.avatar_img} src={icon} alt="" />
                    {author}
                  </div>
                }
              >
                <Grid
                  data={apps}
                  columnNum={4}
                  square={false}
                  hasLine={false}
                  renderItem={(dataItem) => {
                    const item = dataItem as API.apps;
                    return (
                      <Link to={`/app/info/${item.name}`}>
                        <div className={styles.list_item}>
                          <img alt="" src={item.thumb} className={styles.list_item_img} />
                          <div className={styles.list_item_desc}>
                            <span>{item.title}</span>
                          </div>
                        </div>
                      </Link>
                    );
                  }}
                />
              </Accordion.Panel>
            );
          })}
        </Accordion>
      ) : (
        <NoneText>暂无数据</NoneText>
      )}
    </div>
  );
};
