<template>
  <div class="app">
    <component :is="contactComponent"></component>
  </div>
</template>
<script>
import ContactsList from "./pages/ContactList";
import ContactDetail from "./pages/ContactDetail";
import { addEventListener } from "./utils/EventBus";

export default {
  components: {
    ContactsList,
    ContactDetail
  },
  data() {
    return {
      contactComponent: ContactsList
    };
  },
  mounted() {
    addEventListener("toPage", page => {
      if (page === "detail") {
        this.toDetail();
      } else {
        this.toList();
      }
    });
  },
  methods: {
    toList() {
      this.contactComponent = ContactsList;
    },
    toDetail() {
      this.contactComponent = ContactDetail;
    }
  }
};
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
