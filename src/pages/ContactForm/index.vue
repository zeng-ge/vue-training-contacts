<template>
  <div class="contact-form">
    <div class="form-control">
      <label>姓名</label>
      <input type="text" v-model="name" />
    </div>
    <div class="form-control">
      <label>电话</label>
      <div style="display: inline-block;">
        <select v-model="telphone.type">
          <option value="home">home</option>
          <option value="work">work</option>
        </select>
        <input v-model.number="telphone.mobile" type="number" />
      </div>
    </div>
    <div class="form-control">
      <label>性别</label>
      <input type="radio" v-model="gender" value="男" />男
      <input type="radio" v-model="gender" value="女" />女
    </div>
    <div class="form-control">
      <label>标签</label>
      <input type="checkbox" v-model="tags" value="高" />高
      <input type="checkbox" v-model="tags" value="帅" />帅
      <input type="checkbox" v-model="tags" value="富" />富
    </div>
    <div class="form-control">
      <label>地址</label>
      <textarea v-model="address"></textarea>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    contact: {
      type: Object,
      default(){
        return {}
      }
    } 
  },
  data() {
    const contact = this.$props.contact || { type: "home", mobile: "" }
    debugger
    return {
      name: contact.name,
      telphone: { type: contact.telphone.type, mobile: contact.telphone.mobile },
      gender: contact.gender,
      tags: contact.tags,
      address: contact.address
    };
  },
  methods: {
    getFormFields(){
      return {
        name: this.name,
        telphone: { type: this.telphone.type, mobile: this.telphone.mobile },
        gender: this.gender,
        tags: this.tags,
        address: this.address
      }
    }
  }
};
</script>
<style lang="less">
  .contact-form{
    .form-control{
      margin-bottom: 10px;
      label{
        display: inline-block;
        width: 80px;
        line-height: 32px;
        height: 32px;
      }
      input, select{
        box-sizing: border-box;
        line-height: 30px;
        height: 32px;
      }
    }
  }
</style>