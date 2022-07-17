import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Okey Icon',
  mode: 'site',
  locales: [['zh-CN', '中文']],
  // more config: https://d.umijs.org/config
  navs: [
    null, // A null value means to retain the conventionally generated navigation and only do incremental configuration
    {
      title: 'GitHub',
      path: 'https://github.com/zsasjy/okey-icon',
    },
  ],
});
