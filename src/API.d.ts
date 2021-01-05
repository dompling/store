declare namespace API {
  export interface apps {
    version: string;
    description: string;
    scriptURL: string;
    thumb: string;
    name: string;
    homepage: string;
    title: string;
    html?: string;
    images?: string[];
    depend: {
      name: string;
      scriptURL: string;
    } []
  }

  export interface subscribe {
    scriptable: boolean;
    author: string;
    icon: string;
    repo: string;
    apps: apps[]
  }
}
