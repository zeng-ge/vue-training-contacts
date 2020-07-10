<template>
  <div class="contact-detail">
    contact-detail
    <button @click="toListPage">to list</button>
  </div>
</template>
<script>
import { fireEvent } from "../../utils/EventBus";
export default {
  methods: {
    toListPage() {
      fireEvent("toPage", "list");
    }
  }
};
</script>
