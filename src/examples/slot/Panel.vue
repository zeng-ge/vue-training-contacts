<template>
  <div class="panel">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="body">
      <slot name="body" :user="user"></slot>
    </div>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    window.vue2 = this;
  },
  data() {
    return {
      user: { name: "sky" },
    };
  },
};
</script>

<style lang="less">
.panel {
  width: 1000px;
  height: 500px;
}
.header {
  height: 100px;
}
.body {
  height: 800px;
}
.footer {
  height: 100px;
}
</style>
