import axios from "axios";
import { defaults } from "conf/UserPreferences";
import { I18n } from "domain/I18n";

type GetLocaleResponse = {
  data: I18n
}

export const getLocaleStrings = async (lang: string) => {
  try {
    const { data } = await axios.get<GetLocaleResponse>(`/locales/${lang}/strings.json`);
    return data;
  } catch { // fallback a idioma por defecto
    const { data } = await axios.get<GetLocaleResponse>(`/locales/${defaults.lang}/strings.json`);
    return data;
  }
}
