declare namespace API {
  export type apps = {
    version: string;
    description: string;
    scriptURL: string;
    thumb: string;
    name: string;
    homepage: string;
    title: string;
    html?: string[];
    images?: string[];
    depend: {
      name: string;
      scriptURL: string;
    }[];
  };

  export type subscribe = {
    scriptable: boolean;
    author: string;
    icon: string;
    repo: string;
    apps: apps[];
  };
}
