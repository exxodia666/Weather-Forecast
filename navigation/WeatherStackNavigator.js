import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
//Screens
import StartScreen from "../screens/StartScreen";
import WeatherForecastScreen from "../screens/WeatherForecastScreen";
import ChartScreen from "../screens/ChartScreen";
import routes from "./routes";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";

const Stack = createStackNavigator();

const WeatherStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={routes.Start}
      screenOptions={(props) => {
        return {
          headerRight: () => {
            return (
              <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                  title="Stash"
                  iconName="md-cloud"
                  onPress={() => {
                    props.navigation.navigate(routes.Chart);
                  }}
                />
              </HeaderButtons>
            );
          },
          headerStyle: {
            backgroundColor: "red",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        };
      }}
    >
      <Stack.Screen name={routes.Start} component={StartScreen} />
      <Stack.Screen name={routes.Weather} component={WeatherForecastScreen} />
     
    </Stack.Navigator>
  );
};
export default WeatherStackNavigator;
