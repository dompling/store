import React, { useEffect } from 'react';
import { SearchBar, Grid, Accordion } from 'antd-mobile';
import { NoneText } from '@/components/PageLoading';
import { getSubscribe } from '@/utils';
import { Link } from 'umi';
import { useDebounce } from '@umijs/hooks';
import { fetchJSONStore } from '@/service/api';
import styles from './index.module.less';

const updateApi = async () => {
  const dataSource = getSubscribe();
  const fetchUri = Object.keys(dataSource);
  // eslint-disable-next-line no-restricted-syntax
  for (const url of fetchUri) {
    // eslint-disable-next-line no-await-in-loop
    await fetchJSONStore(url);
  }
};

export default () => {
  const dataSource = getSubscribe();
  const [data, setData] = React.useState<Record<string, API.subscribe>>(dataSource);
  const debouncedValue = useDebounce(data, 500);
  useEffect(() => {
    updateApi().then(() => {
      setData(getSubscribe());
    });
  }, [setData]);
  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <SearchBar
          placeholder="请输入"
          onClear={() => setData(dataSource)}
          onChange={(value) => {
            if (!value) {
              setData(dataSource);
              return;
            }
            const newData: Record<string, API.subscribe> = {};
            Object.keys(dataSource).forEach((key) => {
              const dataItem = dataSource[key];
              const apps = dataItem.apps.filter((app) => app.title.includes(value));
              if (apps) newData[key] = { ...dataItem, apps };
            });
            setData(newData);
          }}
        />
      </div>
      {Object.keys(debouncedValue).length ? (
        <Accordion defaultActiveKey={Object.keys(debouncedValue)}>
          {Object.keys(debouncedValue).map((key) => {
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
                      <Link to={`/app/info/${author}/${item.name}`}>
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
