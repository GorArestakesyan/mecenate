import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  useFonts,
  Manrope_400Regular,
  Manrope_500Medium,
  Manrope_600SemiBold,
  Manrope_700Bold,
} from "@expo-google-fonts/manrope";
import { RootNavigator } from "@navigation";
import AppProviders from "@providers/AppProviders";

export default function App() {
  const [fontsLoaded] = useFonts({
    Manrope_400Regular,
    Manrope_500Medium,
    Manrope_600SemiBold,
    Manrope_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.main}>
        <ActivityIndicator size="large" color="#6115CD" />
      </View>
    );
  }

  return (
    <AppProviders>
      <StatusBar style="dark" />
      <RootNavigator />
    </AppProviders>
  );
}

const styles = StyleSheet.create({
  main: { flex: 1, alignItems: "center", justifyContent: "center" },
});
