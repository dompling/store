import React, { FC, ReactElement } from "react";
import { TabBar } from "antd-mobile";
import { IRouteComponentProps, history } from "umi";
import styles from "./layout.module.less";

const MenuIcon: FC<{ icon: string }> = ({ icon }) => {
  return <div className={`${styles.tabBarIcon} ${styles[icon]}`} />;
};

const menuConfig: {
  title: string,
  link: string,
  icon: ReactElement,
}[] = [
  {
    title: "首页",
    link: "/menu",
    icon: <MenuIcon icon={"homeIcon"} />
  },
  {
    title: "订阅",
    link: "/menu/subscribe",
    icon: <MenuIcon icon={"subscribe"} />
  }
];

const layout: FC<IRouteComponentProps> = (props) => {
  const { children, location } = props;
  return (
    <div className={styles.container}>
      <main>{children}</main>
      <footer className={styles["fixed-bottom"]}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          noRenderContent
        >
          {menuConfig.map((menu) => {
            return (
              <TabBar.Item
                title={menu.title}
                key={menu.link}
                icon={menu.icon}
                selectedIcon={menu.icon}
                selected={location.pathname === menu.link}
                onPress={() => {
                  if (location.pathname === menu.link) return;
                  history.push(menu.link);
                }}
              />
            );
          })}

        </TabBar>
      </footer>
    </div>
  );
};
export default layout;
