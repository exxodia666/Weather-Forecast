import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
//
import routes from "./routes";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
//Screens
import StartScreen from "../screens/StartScreen";
import WeatherForecastScreen from "../screens/WeatherForecastScreen";
//import ChartScreen from "../screens/ChartScreen";
//import WeatherForecastChartScreen from "../screens/WeatherForecastChartScreen";
import SettingsScreen from "../screens/SettingsScreen";
import CitiesScreen from "../screens/CitiesScreen";
import AddNewCityScreen from "../screens/AddNewCityScreen";
import LocationScreen from "../screens/LocationScreen";


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
                  title="Cities"
                  onPress={() => {
                    props.navigation.navigate(routes.Cities);
                  }}
                />
                <Item
                  title="Settings"
                  iconName="md-settings"
                  onPress={() => {
                    props.navigation.navigate(routes.Settings);
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
      <Stack.Screen name={routes.Start} component={LocationScreen} />

      <Stack.Screen
        name={routes.Weather}
        component={WeatherForecastScreen}
        options={({ route }) => ({
          title: route.params.city,
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontFamily: "comic-neue",
          },
        })}
      />

      <Stack.Screen
        name={routes.Settings}
        component={SettingsScreen}
        options={({ route }) => ({
          title: "Settings",
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontFamily: "comic-neue",
          },
        })}
      />

      <Stack.Screen
        name={routes.AddNewCity}
        component={AddNewCityScreen}
        options={({ route }) => ({
          title: "AddNewCity",
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontFamily: "comic-neue",
          },
        })}
      />
      <Stack.Screen
        name={routes.Cities}
        component={CitiesScreen}
        options={(props) => {
          return {
            headerRight: () => {
              return (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              
                  <Item
                    title="Add"
                    iconName="md-add"
                    onPress={() => {
                      props.navigation.navigate(routes.AddNewCity);
                    }}
                  />
                  <Item
                    title="Settings"
                    iconName="md-settings"
                    onPress={() => {
                      props.navigation.navigate(routes.Settings);
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
      />
    </Stack.Navigator>
  );
};
export default WeatherStackNavigator;
