import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Dimensions,
} from "react-native";
//import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { LineChart } from "react-native-chart-kit";
import { withTheme } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import weatherSort from "../utils/weatherSort";

//const url = (iconName) => `http://openweathermap.org/img/wn/${iconName}@2x.png`;

//const week = [  "Sunday", "Monday", "Tuesday","Wednesday", "Thursday","Friday", "Saturday",];

const WeekForecast = (props) => {
  const weather = weatherSort(useSelector((state) => state.forecast.weather));

  const week = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Satur"];

  //console.log(weather);

  const url = (iconName) =>
    `http://openweathermap.org/img/wn/${iconName}@2x.png`;

  const createWeekDaysArray = (day) => {
    const firstDay = day;
    const data = [];
    while (day <= 6) {
      data.push(day);
      day++;
    }
    day = 0;
    while (day < firstDay) {
      data.push(day);
      day++;
    }
    return data;
  };

  const labels = createWeekDaysArray(new Date().getDay()).map(
    (item) => week[item]
  );

  return (
    <View style={styles.container}>
      <View style={styles.column}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width,
    backgroundColor: "white",
    elevation: 3,
    overflow: "hidden",
    flexDirection: "row",
  },
  day: {
    height: "100%",
    flex: 1 / 5,
    borderWidth: 1,
    borderColor: "grey",
  },
});

export default WeekForecast;
