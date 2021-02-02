export const getSubscribe = (): Record<string, API.subscribe> => {
  return JSON.parse(localStorage.getItem('dataSource') || '{}');
};

export const getSubscribeInfo = (author: string, id: string): API.apps | undefined => {
  const dataSource = getSubscribe();
  const resKey =
    Object.keys(dataSource).find((key) => {
      return dataSource[key].author === author;
    }) || '';
  const apps: API.apps[] = dataSource[resKey].apps || [];
  return apps.find((item) => item.name === id);
};

export const setSubscribe = (dataSource: any) => {
  return localStorage.setItem('dataSource', JSON.stringify(dataSource));
};

export const avatar_url = 'https://gitee.com/scriptableJS/store/raw/master/public/icon.png';
