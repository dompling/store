export const getSubscribe = (): { [key: string]: API.subscribe } => {
  return JSON.parse(
    localStorage.getItem("dataSource") ||
    "{}");
};

export const getSubscribeInfo = (id: string): API.apps | undefined => {
  const dataSource = getSubscribe();
  const apps: API.apps[] = [];
  Object.keys(dataSource).forEach(key => apps.push(...dataSource[key].apps));
  return apps.find(item => item.name === id);
};

export const setSubscribe = (dataSource: any) => {
  return localStorage.setItem("dataSource", JSON.stringify(dataSource));
};
