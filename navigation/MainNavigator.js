import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import WeatherStackNavigator from "./WeatherStackNavigator";
import { useDispatch } from "react-redux";
import { setDayTime } from "../store/actions/daytime";
//Screens

const MainNavigator = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setDayTime());
  }, [dispatch]);
  return (
    <NavigationContainer>
      <WeatherStackNavigator />
    </NavigationContainer>
  );
};
export default MainNavigator;
