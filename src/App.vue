<template>
  <div class="app">
    
    <router-view></router-view>
    <Example v-if="false" />
  </div>
</template>
<script>
import Example from './examples'
export default {
  components: {
    Example
  }
}
</script>
<style lang="less">
.app {
  width: 900px;
  margin-left: auto;
  margin-right: auto;
}
ul,
li {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
</style>
