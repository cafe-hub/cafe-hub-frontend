/// <reference types="react-scripts" />

declare module '*.svg' {
  // eslint-disable-next-line
  const content: any;
  export default content;
}

declare module '*.png' {
  const value: string;
  export default value;
}
