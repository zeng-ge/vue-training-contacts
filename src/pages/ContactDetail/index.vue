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
          <span>{{ getTelphones() }}</span>
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
    </div>
  </div>
</template>
<script>
import { getContactById } from "../../services/contacts";
import { fireEvent } from "../../utils/EventBus";
export default {
  data() {
    return {
      contact: {}
    };
  },
  mounted() {
    const params = location.hash.replace("#", "").split("=");
    const contactId = params[1];
    getContactById(contactId).then(response => (this.contact = response.data));
  },
  methods: {
    toListPage() {
      fireEvent("toPage", "list");
    },
    onEdit() {},
    getTelphones() {
      const telphones = this.contact.telphones || [];
      return telphones.map(item => `${item.type} ${item.mobile}`).join(" ");
    },
    getTags() {
      const tags = this.contact.tags || [];
      return tags.join(" ");
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
