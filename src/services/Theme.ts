import { THEME } from "conf/Theme";
import { Theme } from "domain/Theme";
import { CartoTheme, OwnTheme } from "views/_theme";

export const getTheme = (theme: string) : Theme => {
  switch(theme) {
    case THEME.CARTO:
      return CartoTheme;
    case THEME.OWN:
      return OwnTheme;
    default:
      throw Error(`'${theme}' theme not available`);
  }
}