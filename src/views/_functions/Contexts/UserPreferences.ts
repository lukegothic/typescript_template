import { createContext } from "react";
import { UserPreferencesCtx } from "domain/UserPreferencesCtx";

export const UserPreferences = createContext<UserPreferencesCtx | undefined>(undefined);