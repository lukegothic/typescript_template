import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { getTheme } from "services/Theme";
import { AppRouteList } from "conf/Routes";
import { LoadingPage } from "views/pages";
import { UserPreferencesContext, I18nContext } from "views/_functions/Contexts";
import { useApp } from "views/_functions/Hooks";
import { GlobalStyle } from "views/_theme/GlobalStyle";

const App = () => {
  const { userPreferences, i18n, loaded: isAppLoaded } = useApp();
  console.log("render"); // solo debe salir un render por operacion

  // THINK: considerar persistir el estado de react en localStorage para recuperarlo tras sesiones

  return (
    <>
      <GlobalStyle />
      {isAppLoaded ? (
        <UserPreferencesContext.Provider value={userPreferences}>
          <I18nContext.Provider value={i18n}>
            <ThemeProvider theme={getTheme(userPreferences.theme)}>
              <Router>
                <Routes>
                  {AppRouteList.map(route => (
                    <Route
                      key={route.id}
                      path={route.path}
                      element={route.element}
                    />
                  ))}
                </Routes>
              </Router>
            </ThemeProvider>
          </I18nContext.Provider>
        </UserPreferencesContext.Provider>
      ) : (
        <LoadingPage />
      )}
    </>
  );
};

export default App;
