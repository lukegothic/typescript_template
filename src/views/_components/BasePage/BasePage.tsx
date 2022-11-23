import { I18n } from "domain/I18n";
import { useContext } from "react";
import { I18nContext } from "views/_functions/Contexts";
import { LanguageSelector, ThemeSelector } from "..";
import './BasePage.css';
import { Main } from "./BasePage.styled";

export const BasePage = ({ children }) => {
  const i18n: I18n = useContext(I18nContext)!;
  return (
    <section id="page">
      <header>{ i18n.welcome }</header>
      <nav>{ i18n.welcome } <LanguageSelector /><ThemeSelector /></nav>
      <Main>
        { children }
      </Main>
      <footer>{ i18n.welcome }</footer>
    </section>
  );
}