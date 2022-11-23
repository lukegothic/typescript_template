import { I18n } from "./I18n"
import { UserPreferencesCtx } from "./UserPreferencesCtx"

export type UseApp = {
  userPreferences: UserPreferencesCtx,
  i18n: I18n,
  loaded: boolean
}