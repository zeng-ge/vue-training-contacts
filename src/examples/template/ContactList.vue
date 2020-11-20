<template>
  <table>
    <thead>
      <tr>
        <td>姓名</td>
        <td>电话</td>
        <td>性别</td>
        <td>标签</td>
        <td>地址</td>
        <td>操作</td>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(contact, index) of list"
        :key="contact.id"
        :class="{ active: index % 2 === 0 }"
      >
        <td>{{ contact.name }}</td>
        <td>{{ contact.telphone.mobile }}</td>
        <td>{{ contact.gender }}</td>
        <td>
          <span v-for="tag of contact.tags" :key="tag">{{ tag }}</span>
        </td>
        <td>{{ contact.address }}</td>
        <td><button @click="onDelete(contact)">删除</button></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  methods: {
    onDelete(contact) {
      const index = this.list.indexOf(contact)
      this.list.splice(index, 1)
    }
  },
  data() {
    return {
      list: [
        {
          name: '懂王',
          telphone: { type: 'home', mobile: 123 },
          gender: '男',
          tags: ['中介', '外卖'],
          address: '漂亮国',
          id: 1
        },
        {
          name: '雷电法王',
          telphone: { type: 'home', mobile: '123456789' },
          gender: '男',
          tags: ['网隐', '高'],
          address: '河北',
          id: 2
        }
      ]
    }
  }
}
</script>

<style lang="less"></style>
