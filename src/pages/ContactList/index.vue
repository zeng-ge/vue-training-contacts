<template>
  <div class="contact-list">
    <h3 class="title">Contact List</h3>
    <section class="contact-form">
      <input type="text" />
      <button class="search-btn">search</button>
      <button class="add-contact-btn">Add Contact</button>
    </section>
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
  </div>
</template>
<script>
import ContactItem from "./ContactItem";
import { getContacts } from "../../services/contacts";
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
  mounted() {
    this.getContacts();
  },
  methods: {
    getContacts() {
      getContacts().then(response => {
        this.contacts = response.data;
      });
    },
    toDetialPage(contactId) {
      location.hash = `contactId=${contactId}`
      fireEvent("toPage", "detail");
    },
    onDelete(contactId) {
      console.log(contactId);
    }
  }
};
</script>
<style lang="less">
.contact-list {
  .title {
    text-align: center;
  }
  .contact-form {
    display: flex;
    flex-grow: row nowrap;
    padding-bottom: 10px;
    input {
      flex: 1;
      height: 32px;
    }
    button {
      width: 100px;
    }
  }
}
</style>
