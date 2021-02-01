declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.txt';
declare module '*.svg' {
  export function ReactComponent(props: React.SVGProps<SVGSVGElement>): React.ReactElement;

  const url: string;
  export default url;
}

interface Window {
  loadingEvent: CustomEvent;
  Toast: CustomEvent;
  Confirm: CustomEvent;
  Clipboard: any;
}
