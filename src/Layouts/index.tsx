import type { FC } from 'react';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Toast } from 'antd-mobile';
import type { IRouteComponentProps } from 'umi';

window.Toast = new CustomEvent('Toast', {
  detail: {
    success: (msg: string, timer = 2) => Toast.success(msg, timer),
    fail: (msg: string, timer = 2) => Toast.fail(msg, timer),
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
