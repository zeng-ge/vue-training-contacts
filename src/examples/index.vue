<template>
  <div>
    focus: <input ref="focusElement" v-model="name" v-focus="focus" />
    <div>{{ date | dateFormat }}</div>
    <ContactList
      v-bind:list="contacts"
      :deleteContact="onDelete"
      v-on:delete="onDelete(contact)"
    ></ContactList>
    <ContactCreate ref="abc"></ContactCreate>
    <I18nComponent></I18nComponent>
    <Panel>
      <template v-slot:header>header</template>
      <template v-slot:body>body abc</template>
      <template v-slot:footer>footer</template>
      <div>ddd</div>
    </Panel>

    <JSXPanel>
      <template v-slot:header>jsx header</template>
      <div>jsx body</div>
      <template v-slot:footer>jsx footer</template>
    </JSXPanel>
    <IfComponent :show="true">show</IfComponent>
    <IfComponent :show="false">false</IfComponent>
    <vModelComponent v-model="visible" name="sky"></vModelComponent>
    <File />
  </div>
</template>
<script>
import axios from "axios";
import ContactList from "./template/ContactList";
import ContactCreate from "./form/ContactCreate";
import I18nComponent from "./i18n/I18nComponent";
import Panel from "./slot/Panel";
import JSXPanel from "./jsx/JSXPanel";
import IfComponent from "./jsx/IfComponent";
import vModelComponent from "./component/vModelComponent";
import File from "./File";
const mixin = {
  created() {
    console.log("created");
  },
  methods: {
    mixin() {},
  },
};
export default {
  mixins: [mixin],
  components: {
    ContactList,
    ContactCreate,
    I18nComponent,
    Panel,
    JSXPanel,
    IfComponent,
    vModelComponent,
    File,
  },
  directives: {
    focus: function(el, binding) {
      console.log(binding);
      el.focus();
    },
  },
  filters: {
    dateFormat(date) {
      return date.getFullYear();
    },
  },
  created() {
    console.log("component created");
  },
  methods: {
    onDelete(contact) {
      const index = this.contacts.indexOf(contact);
      this.contacts.splice(index, 1);
    },
    async loadContacts() {
      const { data } = await axios.get("/api/contacts");
      this.contacts = data;
    },
  },
  mounted() {
    this.loadContacts();
    window.vue1 = this;
    console.log(this.$refs);
    this.name = "ddd";
    console.log(this.$refs.focusElement.value);
    this.$nextTick(() => {
      console.log(this.$refs.focusElement.value);
    });
  },
  data() {
    return {
      date: new Date(),
      focus: true,
      user: {},
      name: "abc",
      visible: true,
      contacts: [],
      // [
      //   {
      //     name: "懂王",
      //     telphone: { type: "home", mobile: 123 },
      //     gender: "男",
      //     tags: ["中介", "外卖"],
      //     address: "漂亮国",
      //     id: 1,
      //   },
      //   {
      //     name: "雷电法王",
      //     telphone: { type: "home", mobile: "123456789" },
      //     gender: "女",
      //     tags: ["网隐", "高"],
      //     address: "河北",
      //     id: 2,
      //   },
      // ],
    };
  },
};
</script>
