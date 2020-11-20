<template>
  <div>
    <div>name => {{ 'name' | i18n }}</div>
    <div>address => {{ 'address' | i18n }}</div>
  </div>
</template>
<script>
import Vue from 'vue'
import { I18nPlugin } from './plugin'
Vue.use(I18nPlugin)

const resources = {
  zh: {
    name: '名字',
    gender: '姓别',
    type: '类型',
    phone: '手机号',
    tag: '标签',
    address: '地址'
  },
  en: {
    name: 'name',
    gender: 'gender',
    type: 'type',
    phone: 'phone',
    tag: 'tag',
    address: 'address'
  }
}

new I18nPlugin('zh', resources)

export default {
  mounted() {
    console.log(this.$t('gender'))
  }
}
</script>
