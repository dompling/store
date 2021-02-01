import type { FC } from 'react';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Toast } from 'antd-mobile';
import type { IRouteComponentProps } from 'umi';

window.Clipboard = (function (window, document) {
  let textArea: HTMLElement;

  function createTextArea(text: string) {
    textArea = document.createElement('textArea');
    // @ts-ignore
    textArea.value = text;
    document.body.appendChild(textArea);
    // @ts-ignore
    textArea.select();
  }

  function copyToClipboard() {
    document.execCommand('copy');
    document.body.removeChild(textArea);
  }

  const copy = (text: string) => {
    createTextArea(text);
    copyToClipboard();
  };

  return { copy };
})(window, document);

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
      <main>{children}</main>
    </>
  );
};

export default Index;
