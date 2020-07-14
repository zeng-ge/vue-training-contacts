<template>
  <div class="contact-detail">
    <h3 class="title">contact-detail</h3>
    <section>
      <ul>
        <li class="contact-property">
          <span>姓名：</span>
          <span>{{ contact.name }}</span>
        </li>
        <li class="contact-property">
          <span>电话：</span>
          <span>{{ contact.telphone.type }} {{ contact.telphone.mobile }}</span>
        </li>
        <li class="contact-property">
          <span>性别：</span>
          <span>{{ contact.gender }}</span>
        </li>
        <li class="contact-property">
          <span>标签：</span>
          <span>{{ getTags() }}</span>
        </li>
        <li class="contact-property">
          <span>地址：</span>
          <span>{{ contact.address }}</span>
        </li>
      </ul>
    </section>
    <div class="footer">
      <button @click="onEdit">编辑 Contact</button>
      <button @click="toListPage">返回Contact列表</button>
      <!-- <router-link :to="'/contacts'">返回Contact列表</router-link> -->
    </div>
    <Modal class="contact-modal" width="1000" height="300" title="修改Contact" v-model="visible">
      <ContactForm ref="form" :contact="contact" @submit="onSubmit" />
    </Modal>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Modal from "../../components/Modal";
import ContactForm from "../ContactForm";

export default {
  components: {
    Modal,
    ContactForm
  },
  data() {
    return {
      visible: false
    };
  },
  computed: {
    ...mapState("contact", {
      contact: "contactDetail"
    })
  },
  mounted() {
    this.getContactById(this.$route.params.id);
  },
  methods: {
    ...mapActions("contact", ["getContactById", "updateContact"]),
    toListPage() {
      this.$router.push("/contacts");
    },
    onEdit() {
      this.visible = true;
    },
    getTags() {
      const tags = this.contact.tags || [];
      return tags.join(" ");
    },
    onSubmit() {
      const fields = this.$refs.form.getFormFields();
      fields.id = this.contact.id;
      this.updateContact(fields);
      this.visible = false;
    }
  }
};
</script>
<style lang="less">
.contact-detail {
  .title {
    text-align: center;
  }
  ul {
    width: 400px;
    margin-left: auto;
    margin-right: auto;
  }
  .footer {
    margin-top: 20px;
    text-align: center;
  }
}
</style>
