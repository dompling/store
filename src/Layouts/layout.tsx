import type { FC, ReactElement } from 'react';
import React, { useEffect, useState } from 'react';
import { TabBar } from 'antd-mobile';
import type { IRouteComponentProps } from 'umi';
import { history, useModel } from 'umi';
import styles from './layout.module.less';

const MenuIcon: FC<{ icon: string }> = ({ icon }) => {
  return <div className={`${styles.tabBarIcon} ${styles[icon]}`} />;
};

type menuProps = {
  title: string;
  link: string;
  icon: ReactElement;
};

const menuConfig: menuProps[] = [
  {
    title: '首页',
    link: '/menu',
    icon: <MenuIcon icon={'homeIcon'} />,
  },
  {
    title: '订阅',
    link: '/menu/subscribe',
    icon: <MenuIcon icon={'subscribe'} />,
  },
  {
    title: '',
    link: '/menu/myInfo',
    icon: <MenuIcon icon={'my'} />,
  },
];

const Layout: FC<IRouteComponentProps> = (props) => {
  const { children, location } = props;
  const { scriptable } = location.query as { scriptable: string };
  const { setScriptable, isScriptable } = useModel('initialiseModel', (model) => model);
  const BoxJS = useModel('boxjsModel', (model) => model);
  const [menu, setMenu] = useState<menuProps[]>([]);

  useEffect(() => {
    if (!!scriptable !== isScriptable && !isScriptable) setScriptable(!!scriptable);
    if (BoxJS.data.usercfgs) {
      menuConfig[2].icon = (
        <img alt={'头像'} src={BoxJS.data.usercfgs.icon} className={styles.avatar} />
      );
    }
    setMenu(menuConfig);
  }, [BoxJS.data, isScriptable, scriptable, setScriptable]);

  return (
    <>
      {children}
      <footer className={styles['fixed-bottom']}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          noRenderContent
        >
          {menu.map((item) => {
            return (
              <TabBar.Item
                title={item.title}
                key={item.link}
                icon={item.icon}
                selectedIcon={item.icon}
                selected={location.pathname === item.link}
                onPress={() => {
                  if (location.pathname === item.link) return;
                  history.push(item.link);
                }}
              />
            );
          })}
        </TabBar>
      </footer>
    </>
  );
};
export default Layout;
