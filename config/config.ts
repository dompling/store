import path from 'path';
import { defineConfig } from 'umi';
// @ts-ignore
import px2rem from 'postcss-plugin-px2rem';
import routers from './routers';

const productPath = process.env.NODE_ENV === 'production' ? '/store/' : '/';
// const precomposed = 'https://img.icons8.com/nolan/452/windows-10.png';
const precomposed = 'https://gitee.com/scriptableJS/store/raw/master/public/icon.png';
// @ts-ignore
export default defineConfig({
  outputPath: 'docs',
  favicon: productPath + 'favicon.ico',
  nodeModulesTransform: {
    type: 'none',
  },
  alias: {
    '@': path.resolve(__dirname, 'src'),
  },
  routes: routers,
  dynamicImport: {
    loading: '@/components/PageLoading',
  },
  fastRefresh: {},
  hash: true,
  history: { type: 'hash' },
  chainWebpack: (config) => {
    const isDev = process.env.NODE_ENV === 'development';
    const hash = !isDev ? '.[contenthash:8]' : '';
    config.output.chunkFilename(`js/[name]${hash}.async.js`);
    config.plugin('extract-css').tap((args) => [
      {
        ...args[0],
        chunkFilename: `css/[name]${hash}.chunk.css`,
      },
    ]);
  },
  metas: [
    {
      name: 'apple-mobile-web-app-title',
      content: 'WidgetStore',
    },
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'default',
    },
    {
      name: 'viewport',
      content:
        'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover',
    },
  ],
  links: [
    {
      rel: 'apple-touch-icon',
      href: precomposed,
    },
  ],
  dva: {},
  title: 'WidgetStore',
  publicPath: productPath,
  extraPostCSSPlugins: [
    //https://www.npmjs.com/package/postcss-plugin-px2rem
    px2rem({
      rootValue: 256, //开启hd后需要换算：rootValue=designWidth*100/750,此处设计稿为1920，所以1920*100/750=256
      propBlackList: [
        'border',
        'border-top',
        'border-left',
        'border-right',
        'border-bottom',
        'border-radius',
      ], //这些属性不需要转换
      exclude: '/node_modules',
    }),
  ],
});
