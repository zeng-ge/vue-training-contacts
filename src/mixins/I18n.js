class I18n {
  t(text) {
    return text
  }
}
export default {
  created() {
    this.$i18n = new I18n()
  },
  methods: {
    t(...args) {
      return this.$i18n.t(...args)
    }
  }
}
