import type { FC } from 'react';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Toast } from 'antd-mobile';
import type { IRouteComponentProps } from 'umi';
import { useRequest } from '@umijs/hooks';
import { getBoxJS } from '@/service/api';
import { useModel } from '@@/plugin-model/useModel';
import PageLoading from '@/components/PageLoading';

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
  const box = useRequest(getBoxJS, { manual: true });
  const BoxJS = useModel('boxjsModel', (model) => model);
  useEffect(() => {
    window.loadingEvent = new CustomEvent('setLoading', {
      detail: {
        setLoading: (type: boolean, text: string) => {
          setMessage(text);
          setLoading(type);
        },
      },
    });
    box.run().then((response) => {
      if (response) BoxJS.setBoxJS(response);
    });
  }, []);
  return (
    <>
      <ActivityIndicator toast text={`${message}...`} animating={loading} />
      {!box.loading ? <main>{children}</main> : <PageLoading />}
    </>
  );
};

export default Index;
