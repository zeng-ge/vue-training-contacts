<template>
  <div class="contact-list">
    <h3 class="title">Contact List</h3>
    <section>
      <ul class="contact-items">
        <ContactItem
          v-for="contact of contacts"
          :contact="contact"
          :key="contact.id"
          @viewDetail="toDetialPage"
          @deleteContact="onDelete"
        />
      </ul>
    </section>
    <section></section>
  </div>
</template>
<script>
import ContactItem from "./ContactItem";
import { getContacts } from "../../services/contacts"
import { fireEvent } from "../../utils/EventBus";
export default {
  components: {
    ContactItem
  },
  data() {
    return {
      contacts: []
    };
  },
  mounted(){
    this.getContacts()
  },
  methods: {
    getContacts() {
      getContacts().then(response => {
        this.contacts = response.data;
      });
    },
    toDetialPage(contactId) {
      fireEvent("toPage", "detail", contactId);
    },
    onDelete(contactId) {
      console.log(contactId);
    }
  }
};
</script>
<style lang="less">
  .contact-list{
    .title{
      text-align: center;
    }
  }
</style>
