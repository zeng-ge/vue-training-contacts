<template>
  <table class="table">
    <thead>
      <tr>
        <td>姓名<input v-model="user.name" /></td>
        <td>电话</td>
        <td>性别</td>
        <td>标签</td>
        <td>地址</td>
        <td>操作</td>
      </tr>
    </thead>
    <tbody>
      <tr
        :id="contact.id"
        v-for="(contact, index) of this.list"
        :key="contact.id"
        :class="{ event: index % 2 === 0, abc: false }"
        :style="{ color: index % 2 === 0 ? 'red' : 'black' }"
      >
        <td v-if="contact.name">{{ contact.name }}</td>
        <td>{{ contact.telphone.mobile }}</td>
        <td>{{ contact.gender }}</td>
        <td>
          <span v-for="tag of contact.tags" :key="tag">{{ tag }}</span>
        </td>
        <td>{{ contact.address }}</td>
        <td><button v-on:click="onDelete(contact, $event)">删除</button></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
    deleteContact: Function,
  },
  methods: {
    onDelete(contact) {
      // this.deleteContact(contact);
      // this.$listeners.delete(contact);
      this.$emit("delete", contact);
      // const index = this.list.indexOf(contact);
      // this.list.splice(index, 1);
    },
    getBoy() {
      console.log("get boy");
      return this.list.filter((item) => item.gender === "男");
    },
  },
  computed: {
    boy() {
      console.log("computed get boy");
      return this.list.filter((item) => item.gender === "男");
    },
  },
  watch: {
    name: function() {},
    user: {
      handler(value, old) {
        console.log(value, old);
      },
      deep: true,
    },
  },
  data() {
    return {
      name: "",
      user: {
        name: "",
      },
    };
  },
};
</script>

<style lang="less">
.table {
  background-color: white;
}
</style>
