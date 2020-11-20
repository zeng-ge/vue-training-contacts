class TranslateService {
  language = null
  resources = {}
  setLanguage(language) {
    this.language = language
  }
  setResources(resources) {
    this.resources = resources
  }
  translate(key) {
    const languageResources = this.resources[this.language]
    return languageResources[key] || key
  }
}

export const translateService = new TranslateService()
