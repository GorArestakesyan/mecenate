import React, { ReactNode } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { ServicesProvider } from "@services";
import { QueryProvider } from "@providers/QueryProvider";

const AppProviders = ({ children }: React.PropsWithChildren) => (
  <SafeAreaProvider>
    <ServicesProvider>
      <QueryProvider>
        <NavigationContainer>{children}</NavigationContainer>
      </QueryProvider>
    </ServicesProvider>
  </SafeAreaProvider>
);

export default AppProviders;
