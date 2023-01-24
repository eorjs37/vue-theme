const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "~@/assets/styles/reset.scss"; // reset.scss
          @import "~@/assets/styles/_variables.scss"; // _variables.scss를 통해 색을 관리
          @import "~@/assets/styles/styles.scss"; // _variables.scss를 통해 프로젝트 공통 scss 관리
        `,
      },
    },
  },
});
