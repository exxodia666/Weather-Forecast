import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
//
import routes from "./routes";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
//Screens
import WeatherForecastScreen from "../screens/WeatherForecastScreen";
import SettingsScreen from "../screens/SettingsScreen";
import CitiesScreen from "../screens/CitiesScreen";
import AddNewCityScreen from "../screens/AddNewCityScreen";

import { Dimensions } from "react-native";

const Stack = createStackNavigator();

const WeatherStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={routes.Weather}
      screenOptions={(props) => {
        return {
          //headerLeft: () => <></>,
          headerRight: () => {
            return (
              <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                  title="Cities"
                  onPress={() => {
                    props.navigation.navigate(routes.Cities);
                  }}
                />

                {/*
                <Item
                  title="Info"
                  iconName="md-information-circle"
                  onPress={() => {
                    props.navigation.navigate(routes.Info);
                  }}
                />*/}
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
            overflow: "hidden",
            fontWeight: "bold",
          },
        };
      }}
    >
      <Stack.Screen
        name={routes.Weather}
        component={WeatherForecastScreen}
        options={(props) => {
          //  console.log(props);
          return {
            headerTintColor: "#fff",
            headerTitleStyle: {
              width: Dimensions.get("window").width / 2,
              overflow: "hidden",
              fontFamily: "comic-neue",
            },
          };
        }}
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
          title: "Add NewCity",
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontFamily: "comic-neue",
          },
        })}
      />
      {/*
      <Stack.Screen
        name={routes.Info}
        component={InfoScreen}
        options={({ route }) => ({
          title: "Info",
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontFamily: "comic-neue",
          },
        })}
      />
      */}
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
