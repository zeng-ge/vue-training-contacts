const focus = el => {
  el.focus()
}
export default {
  bind() {},
  inserted(el) {
    focus(el)
  },
  updated() {},
  componentUpdated() {},
  unbind() {}
}
