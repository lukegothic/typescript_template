import { I18n } from "domain/I18n";
import React, { useContext } from "react";
import { I18nContext } from "views/_functions/Contexts";
import {
  IndexHeader,
  IndexContainer,
  IndexMain,
  IndexNav,
  IndexAside,
  IndexFooter
} from "./IndexPage.styled";

export const IndexPage: React.FC = () => {
  const i18n: I18n = useContext(I18nContext)!;
  return (
    <>
      <IndexHeader>{ i18n.welcome }</IndexHeader>
      <IndexContainer>
        <IndexMain>main content</IndexMain>
        <IndexNav>NAVLINK1, NAVLINK2, NAVLINK3</IndexNav>
        <IndexAside>aside</IndexAside>
      </IndexContainer>
      <IndexFooter>footer</IndexFooter>
    </>
  );
};
