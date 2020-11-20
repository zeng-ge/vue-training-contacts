<template>
  <form>
    <div>
      <input v-model.trim="name" />
    </div>
    <div>
      <select v-model="telphone.type">
        <option value="home">home</option>
        <option value="job">job</option>
      </select>
      <input v-model.number="telphone.mobile" />
    </div>
    <div>
      <input type="radio" value="男" v-model="gender" />男
      <input type="radio" value="女" v-model="gender" />女
    </div>
    <div>
      <input type="checkbox" value="中介" v-model="tags" />中介
      <input type="checkbox" value="外卖" v-model="tags" />外卖
    </div>
    <div>
      <textarea v-model="address"></textarea>
    </div>
    <button @click.prevent="alert()">提交</button>
  </form>
</template>
<script>
export default {
  methods: {
    alert() {
      alert(
        `${this.name} ${this.telphone.mobile} ${this.gender} ${this.tags} ${this.address}`
      )
    }
  },
  data() {
    return {
      name: '',
      telphone: {
        type: 'home',
        mobile: ''
      },
      gender: '男',
      tags: [],
      address: ''
    }
  }
}
</script>
<style lang="less"></style>
