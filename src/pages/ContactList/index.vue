<template>
  <div class="contact-list">
    <h3 class="title">{{ "Contact List" | uppercase }}</h3>
    <ContactForm @submit="onSubmit" />
    <section class="search-form">
      <input v-focus type="text" v-model="keyword" @keydown.enter="onSearch" />
      <button class="search-btn" @click="onSearch">search</button>
    </section>
    <section>
      <ul class="contact-items">
        <ContactItem
          v-for="contact of filterContacts"
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
import ContactForm from "../ContactForm";
import ContactItem from "./ContactItem";
import focus from "../../directives/focus";
import uppercase from "../../filters/uppercase";
import { getContacts, addContact, removeTodo } from "../../services/contacts";
import { fireEvent } from "../../utils/EventBus";
export default {
  directives: {
    focus,
  },
  filters: {
    uppercase,
  },
  components: {
    ContactForm,
    ContactItem,
  },
  data() {
    return {
      keyword: "",
      filterCondition: "",
      contacts: [],
    };
  },
  mounted() {
    this.getContacts();
  },
  computed: {
    filterContacts() {
      if (!this.filterCondition) {
        return this.contacts;
      }
      return this.contacts.filter((item) => {
        return item.name.indexOf(this.filterCondition) !== -1;
      });
    },
  },
  methods: {
    getContacts() {
      getContacts().then((response) => {
        this.contacts = response.data;
      });
    },
    toDetialPage(contactId) {
      location.hash = `contactId=${contactId}`;
      fireEvent("toPage", "detail");
    },
    onSearch() {
      this.filterCondition = this.keyword;
    },
    onSubmit(fields) {
      fields.id = new Date().getTime();
      addContact(fields).then(this.getContacts);
    },
    onDelete(contactId) {
      removeTodo(contactId).then(this.getContacts);
    },
  },
};
</script>
<style lang="less">
.contact-list {
  .title {
    text-align: center;
  }
  .search-form {
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
