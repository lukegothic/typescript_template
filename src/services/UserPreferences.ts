import { defaults, localStorageKey } from "conf/UserPreferences";
import { UserPreferences } from "domain/UserPreferences";

export const load = async () : Promise<UserPreferences> => {
  const localSettings : string | null = localStorage.getItem(localStorageKey);
  if (localSettings) {
    return { ...defaults, ...JSON.parse(localSettings) };
  } else {
    return { ...defaults };
  }
}

export const save = async (userPreferences) : Promise<boolean> => {
  const currentUserPreferences: UserPreferences = await load();
  try {
    localStorage.setItem(localStorageKey, JSON.stringify({ ...currentUserPreferences, ...userPreferences }));
    return true;
  } catch {   // Storage is full
    return false;
  }
}