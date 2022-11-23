import { THEME } from "./Theme";

export const localStorageKey: string = "user_preferences";

export const defaults = {
  lang: window.navigator.language.substring(0, 2),
  theme: THEME.CARTO
}