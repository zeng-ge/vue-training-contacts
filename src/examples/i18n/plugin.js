import {
  i18nMixin
} from './mixin'
import {
  translateService
} from './service'
export class I18nPlugin {
  constructor(language, resources) {
    translateService.setLanguage(language)
    translateService.setResources(resources)
  }
}

I18nPlugin.install = Vue => {
  Vue.mixin(i18nMixin)
  Vue.prototype.$t = function (key) {
    return translateService.translate(key)
  }
}