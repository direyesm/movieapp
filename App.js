import React, { useMemo, useState } from "react";
import { StatusBar } from "react-native";
import {
  Provider as PaperProvider,
  DarkTheme as DarKThemePaper,
  DefaultTheme as DefaultThemePaper,
} from "react-native-paper";
import {
  NavigationContainer,
  DarkTheme as DarkThmeNavigation,
  DefaultTheme as DefaultThemeNavigation,
} from "@react-navigation/native";

import Navigation from "./src/navigation/Navigation";

import PreferencesContext from "./src/context/PreferencesContext";

export default function App() {
  const [theme, setTheme] = useState("dark");

  DefaultThemePaper.colors.primary = "#121317";
  DarKThemePaper.colors.primary = "#F2E205";
  DarKThemePaper.colors.accent = "#121317";

  DarkThmeNavigation.colors.background = "#121317";
  DarkThmeNavigation.colors.card = "#121317";

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "ligth" : "dark");
  };

  const Preference = useMemo(
    () => ({
      toggleTheme,
      theme,
    }),
    [theme]
  );

  return (
    <PreferencesContext.Provider value={Preference}>
      <PaperProvider
        theme={theme === "dark" ? DarKThemePaper : DefaultThemePaper}
      >
        <StatusBar
          barStyle={theme === "dark" ? "light-content" : "dark-content"}
        />
        <NavigationContainer
          theme={theme === "dark" ? DarkThmeNavigation : DefaultThemeNavigation}
        >
          <Navigation />
        </NavigationContainer>
      </PaperProvider>
    </PreferencesContext.Provider>
  );
}
