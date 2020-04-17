import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import WeatherStackNavigator from "./WeatherStackNavigator";
//Screens
const MainNavigator = () => {
  return (
    <NavigationContainer>
      <WeatherStackNavigator />
    </NavigationContainer>
  );
};
export default MainNavigator;
