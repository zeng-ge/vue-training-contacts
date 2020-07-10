<template>
  <div class="contact-list">
    contact-list
    <button @click="toDetialPage">to detail</button>
  </div>
</template>
<script>
import { fireEvent } from "../../utils/EventBus";
export default {
  methods: {
    toDetialPage() {
      fireEvent("toPage", "detail");
    }
  }
};
</script>
