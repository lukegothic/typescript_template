import { createContext } from "react";
import { I18n as TI18n } from "domain/I18n";

export const I18n = createContext<TI18n | undefined>(undefined);