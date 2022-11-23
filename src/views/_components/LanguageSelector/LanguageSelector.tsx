import React, { useContext } from "react"
import { AvailableLanguages } from "conf/I18n";
import { LanguageSelectorButton } from "./LanguageSelectorButton.styled";
import { UserPreferencesContext } from "views/_functions/Contexts";

export const LanguageSelector: React.FC = () => {
  const { userPreferences, setLang } = useContext(UserPreferencesContext)!;
  return (
    <>
      { AvailableLanguages.map(l => <LanguageSelectorButton active={userPreferences.lang === l} key={l} onClick={() => setLang(l)}>{l.toUpperCase()}</LanguageSelectorButton>) }
    </>
  )
}