const path = require('path');
const CracoLessPlugin = require('craco-less');
const theme = require('./theme')
const resolve = dir => path.resolve(__dirname, dir);
// const { getThemeVariables } = require('antd/dist/theme')
module.exports = {
  webpack: {
    // 别名
    alias: {
      "@": resolve("src"),
      "@utils": resolve("src/utils"),
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            // modifyVars: getThemeVariables({
            //   dark: true, // 开启暗黑魔神
            //   compact: true  // 开启紧凑模式
            // })
            // 自定义主题颜色
            modifyVars: theme,
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  babel: {
    plugins: [
      ["@babel/plugin-proposal-decorators", { legacy: true }],  //装饰器
      [
        "import",
        {
          "libraryName": "antd",
          "libraryDirectory": "es",
          "style": true //设置为true即是less
        }
      ]
    ]
  },

};
