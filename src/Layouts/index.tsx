import type { FC } from 'react';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Toast, Modal } from 'antd-mobile';
import type { IRouteComponentProps } from 'umi';

const { alert } = Modal;

window.Toast = new CustomEvent('Toast', {
  detail: {
    success: (msg: string, timer = 2) => Toast.success(msg, timer),
    fail: (msg: string, timer = 2) => Toast.fail(msg, timer),
  },
});

const confirmEvent = new CustomEvent('confirmSuccess', { detail: 1 });

window.Confirm = new CustomEvent('Confirm', {
  detail: {
    confirm: (title?: string, message?: string) => {
      alert(title, message, [
        {
          text: '取消',
          style: 'default',
        },
        {
          text: '确定',
          onPress: () => {
            window.dispatchEvent(confirmEvent);
          },
        },
      ]);
    },
  },
});

const Index: FC<IRouteComponentProps> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  useEffect(() => {
    window.loadingEvent = new CustomEvent('setLoading', {
      detail: {
        setLoading: (type: boolean, text: string) => {
          setMessage(text);
          setLoading(type);
        },
      },
    });
  }, [setLoading, loading]);
  return (
    <>
      <ActivityIndicator toast text={`${message}...`} animating={loading} />
      {children}
    </>
  );
};

export default Index;
