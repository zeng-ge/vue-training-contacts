import { translateService } from './service'
export const i18nFilter = key => {
  return translateService.translate(key)
}
