<template>
  <div class="contact-list">
    <h3 class="title">Contact List</h3>
    <section class="contact-form">
      <input type="text" />
      <button class="search-btn">search</button>
      <button class="add-contact-btn" @click="onShowAddModal">Add Contact</button>
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
    <Modal class="contact-modal" title="添加Contact" v-model="visible" @submit="onSubmit">
      <ContactForm ref="form" />
    </Modal>
  </div>
</template>
<script>
import Modal from "../../components/Modal";
import ContactForm from "../ContactForm";
import ContactItem from "./ContactItem";
import { getContacts, addContact, removeTodo } from "../../services/contacts";
import { fireEvent } from "../../utils/EventBus";
export default {
  components: {
    Modal,
    ContactForm,
    ContactItem
  },
  data() {
    return {
      contacts: [],
      visible: false
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
      location.hash = `contactId=${contactId}`;
      fireEvent("toPage", "detail");
    },
    onShowAddModal() {
      this.visible = true
    },
    onSubmit(){
      const fields = this.$refs.form.getFormFields()
      fields.id = new Date().getTime()
      addContact(fields).then(this.getContacts)
      this.visible = false
    },
    onDelete(contactId) {
      removeTodo(contactId).then(this.getContacts)
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
