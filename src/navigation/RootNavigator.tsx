import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { CountriesScreen } from "../screens/CountriesScreen";
import { CountryDetailsScreen } from "../screens/CountryDetailsScreen";
import { Country } from "../types";

export type RootStackParamList = {
  Countries: undefined;
  CountryDetails: { country: Country };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Countries" component={CountriesScreen} />
          <Stack.Screen
            name="CountryDetails"
            component={CountryDetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
