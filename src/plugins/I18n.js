import I18nMixin from '../mixins/I18n'
export default class I18nPlugin {}

I18nPlugin.install = Vue => {
  Vue.mixin(I18nMixin)
}
