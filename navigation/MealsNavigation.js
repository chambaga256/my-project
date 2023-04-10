// In App.js in a new project

import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "./../screens/CategoriesScreen";
const Stack = createNativeStackNavigator();

function MealsNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={CategoriesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MealsNavigation;
