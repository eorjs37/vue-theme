<template>
  <div class="theme2">
    <Header></Header>
    <Component1></Component1>
    <Component2></Component2>
  </div>
</template>

<script>
import Component1 from './components/Component1.vue';
import Component2 from './components/Component2.vue';
export default {
  name: 'App',
  components: {
    Component1,
    Component2,
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
}
</style>
