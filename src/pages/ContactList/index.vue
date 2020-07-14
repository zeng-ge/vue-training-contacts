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
          @deleteContact="onDelete"
        />
      </ul>
    </section>
  </div>
</template>
<script>
import { mapGetters, mapActions, mapState } from "vuex";
import ContactForm from "../ContactForm";
import ContactItem from "./ContactItem";
import focus from "../../directives/focus";
import uppercase from "../../filters/uppercase";

export default {
  directives: {
    focus
  },
  filters: {
    uppercase
  },
  components: {
    ContactForm,
    ContactItem
  },
  data() {
    return {
      keyword: ""
    };
  },
  mounted() {
    this.getContacts();
  },
  computed: {
    ...mapGetters("contact", ["filterContacts"]),
    ...mapState("contact", {
      filterCondition: state => state.keyword
    })
  },
  methods: {
    ...mapActions("contact", [
      "getContacts",
      "addContact",
      "removeContact",
      "updateKeyword"
    ]),
    // getContacts() {
    //   this.$store.dispatch("contact/getContacts");
    // },

    onSearch() {
      this.updateKeyword(this.keyword);
      // this.$store.dispatch("contact/updateKeyword", this.keyword);
    },
    onSubmit(fields) {
      fields.id = new Date().getTime();
      this.addContact(fields);
      // this.$store.dispatch("contact/addContact", fields);
    },
    onDelete(contactId) {
      this.removeContact(contactId);
      // this.$store.dispatch("contact/removeContact", contactId);
    }
  }
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
