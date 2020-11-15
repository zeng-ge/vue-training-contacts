<template>
  <li class="contact-item">
    <div class="contact-name">{{ contact.name }}</div>
    <div class="contact-telphone">
      {{ contact.telphone.type }} {{ contact.telphone.mobile }}
    </div>
    <div class="contact-address">{{ contact.address }}</div>
    <div class="contact-operations">
      <!-- <router-link :to="`/contacts/${contact.id}`">详情</router-link> -->
      <button @click="toDetail" :data-testid="`detail-link-${contact.id}`">
        详情
      </button>
      <button @click="onDelete">删除</button>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    contact: Object
  },
  methods: {
    toDetail() {
      this.$router.push(`/contacts/${this.contact.id}`)
    },
    onDelete() {
      const { deleteContact } = this.$listeners
      deleteContact && deleteContact(this.contact.id)
    }
  }
}
</script>
<style lang="less">
.contact-item {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  list-style: none;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid white;
  background-color: #f3f3f3;
  &:hover {
    background-color: #ddd;
  }
  .contact-name {
    width: 100px;
  }
  .contact-telphone {
    display: flex;
    width: 300px;
    padding: 0 10px;
  }
  .contact-address {
    flex: 1;
  }
  .contact-operations {
    width: 150px;
    text-align: center;
    button {
      margin-right: 10px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
