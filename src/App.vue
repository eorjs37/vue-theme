<template>
  <Header></Header>
  <Component1></Component1>
  <div class="container"></div>

  <div class="theme2">
    <div class="layout"></div>
  </div>
</template>

<script>
import Component1 from './components/Component1.vue';
export default {
  name: 'App',
  components: {
    Component1,
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
}
</style>
