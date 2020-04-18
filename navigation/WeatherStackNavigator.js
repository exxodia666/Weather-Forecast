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
                  iconName="md-options"
                  onPress={() => {
                    props.navigation.navigate(routes.Options);
                  }}
                />
              </HeaderButtons>
            );
          },
          headerStyle: {
            backgroundColor: "#0043A4",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        };
      }}
    >
      <Stack.Screen
        name={routes.Start}
        component={StartScreen}


      />
      <Stack.Screen
        name={routes.Weather}
        component={WeatherForecastScreen}
        options={
          ({ route }) => ({
            title: route.params.city,
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontFamily: 'comic-neue',
            },
          })}
      />

    </Stack.Navigator>
  );
};
export default WeatherStackNavigator;
