<template>
  <div v-if="visible">{{ name }} <button @click="onClose()">关闭</button></div>
</template>
<script>
export default {
  model: {
    prop: "visible",
    event: "change",
  },
  props: {
    visible: Boolean,
    name: {
      type: String,
      default: () => "moon",
    },
  },
  methods: {
    onClose() {
      this.$emit("change", false);
    },
  },
};
</script>
