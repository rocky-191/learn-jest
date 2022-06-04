declare namespace globalThis {
  let jsdom: any;
}

declare module "*.less" {
  const content: any;
  export default content;
}
