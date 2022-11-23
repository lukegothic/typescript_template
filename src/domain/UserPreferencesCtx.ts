import { Theme } from "./Theme"
import { UserPreferences } from "./UserPreferences"

export type UserPreferencesCtx = {
  userPreferences: UserPreferences,
  setLang: (lang: string) => {},
  setTheme: (theme: Theme) => {}
}