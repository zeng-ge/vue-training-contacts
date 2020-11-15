<template>
  <div class="contact-form" data-testid="contact-form">
    <h3>Contact Form</h3>
    <div class="form-control">
      <span class="label">姓名</span>
      <input type="text" v-model="name" data-testid="name" />
    </div>
    <div class="form-control">
      <span class="label">电话</span>
      <div style="display: inline-block;">
        <select v-model="telphone.type" data-testid="telphone.type">
          <option value="home">home</option>
          <option value="work">work</option>
        </select>
        <input
          v-model.number="telphone.mobile"
          type="number"
          data-testid="telphone.mobile"
        />
      </div>
    </div>
    <div class="form-control">
      <span class="label">性别</span>
      <label>
        <input
          type="radio"
          v-model="gender"
          value="男"
          data-testid="gender.male"
        />
        <span>男</span>
      </label>
      <label>
        <input
          type="radio"
          v-model="gender"
          value="女"
          data-testid="gender.female"
        />
        <span>女</span>
      </label>
    </div>
    <div class="form-control">
      <span class="label">标签</span>
      <label>
        <input
          type="checkbox"
          v-model="tags"
          value="中介"
          data-testid="tags.agent"
        />中介
      </label>
      <label>
        <input
          type="checkbox"
          v-model="tags"
          value="外卖"
          data-testid="tags.takeout"
        />外卖
      </label>
      <label>
        <input
          type="checkbox"
          v-model="tags"
          value="诈骗"
          data-testid="tags.cheat"
        />诈骗
      </label>
    </div>
    <div class="form-control">
      <span class="label" style="vertical-align: top;">地址</span>
      <textarea
        v-model="address"
        name="address"
        data-testid="address"
      ></textarea>
    </div>
    <div class="form-control">
      <button @click="onSubmit" data-testid="create-contact">
        {{ editMode ? '修改Contact' : '添加Contact' }}
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    contact: {
      type: Object
    }
  },
  data() {
    const contact = this.$props.contact || this.getDefaultFields()
    return {
      name: contact.name,
      telphone: {
        type: contact.telphone.type,
        mobile: contact.telphone.mobile
      },
      gender: contact.gender,
      tags: contact.tags,
      address: contact.address,
      editMode: !!this.$props.contact
    }
  },
  methods: {
    getDefaultFields() {
      return {
        telphone: { type: 'home', mobile: '' },
        tags: [],
        gender: '男'
      }
    },
    resetFields() {
      this.name = ''
      this.telphone = { type: 'home', mobile: '' }
      this.tags = []
      this.address = ''
    },
    onSubmit() {
      const { submit } = this.$listeners
      const fields = this.getFormFields()
      if (!fields.name || !fields.telphone.mobile) {
        alert('please type name or phone')
        return
      }
      submit && submit(this.getFormFields())
      this.resetFields()
    },
    getFormFields() {
      return {
        name: this.name,
        telphone: { type: this.telphone.type, mobile: this.telphone.mobile },
        gender: this.gender,
        tags: this.tags,
        address: this.address
      }
    }
  }
}
</script>
<style lang="less">
.contact-form {
  .form-control {
    display: inline-block;
    width: 400px;
    margin-bottom: 10px;
    vertical-align: top;
    .label {
      display: inline-block;
      width: 60px;
      line-height: 32px;
      height: 32px;
    }
    input[type='text'],
    input[type='number'],
    select {
      box-sizing: border-box;
      line-height: 30px;
      height: 32px;
    }
  }
}
</style>
