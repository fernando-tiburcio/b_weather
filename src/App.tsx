import React from 'react';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AppLoading from "expo-app-loading";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { ThemeProvider } from "styled-components/native";

import Home from './screens/Home';

import THEME from "./theme";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={THEME}>
    <SafeAreaView style={{flex: 1}}>
      <Home />
      <StatusBar style="light" backgroundColor={THEME.COLORS.BACKGROUND} />
    </SafeAreaView>

    </ThemeProvider>
  );
}
