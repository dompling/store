import { request } from 'umi';
import { Toast } from 'antd-mobile';
import { useModel } from '@@/plugin-model/useModel';

export const fetchJSONStore = async (url: string) => {
  const response = await request<API.subscribe>(url, { method: 'get' });
  try {
    if (response.scriptable) {
      const dataSource = JSON.parse(localStorage.getItem('dataSource') || '{}') as Record<
        string,
        any
      >;
      dataSource[url] = response;
      localStorage.setItem('dataSource', JSON.stringify(dataSource));
    } else {
      Toast.fail('订阅地址错误');
    }
  } catch (e) {
    Toast.fail(JSON.stringify(e));
  }
};

export const getBoxJS = async (): Promise<any | boolean> => {
  const response = await request<{ datas: Record<string, any> }>(
    `http://${localStorage.getItem('boxjs') || 'boxjs.net'}/query/boxdata`,
  );
  try {
    return response;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const saveCache = async (data: any): Promise<any | boolean> => {
  try {
    const response = await request(
      `http://${localStorage.getItem('boxjs') || 'boxjs.net'}/api/save`,
      {
        method: 'POST',
        data,
      },
    );
    Toast.success('备份成功');
    return response;
  } catch (e) {
    console.log(e);
    Toast.fail('备份失败');
    return false;
  }
};
