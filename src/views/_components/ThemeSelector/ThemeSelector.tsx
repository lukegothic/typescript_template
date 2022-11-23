import { AvailableThemes } from "conf/Theme";
import React, { useContext } from "react";
import { getTheme } from "services/Theme";
import { UserPreferencesContext } from "views/_functions/Contexts";

export const ThemeSelector: React.FC = () => {
  const { userPreferences, setTheme } = useContext(UserPreferencesContext)!;
  return (
    <select defaultValue={userPreferences.theme} onChange={(e) => setTheme(getTheme(e.target.value))}>{ AvailableThemes.map(t => <option key={t} value={t}>{t}</option>) }</select>
  );
}