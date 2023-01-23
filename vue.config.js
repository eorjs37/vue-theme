const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "~@/assets/styles/reset.scss";
          @import "~@/assets/styles/_variables.scss";
          @import "~@/assets/styles/styles.scss";
          @import "~@/assets/styles/theme1.scss";
        `,
      },
    },
  },
});
