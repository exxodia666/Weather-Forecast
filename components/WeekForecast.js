import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Dimensions,
  YellowBox,
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
    // console.log(data);
    return data;
  };
  //console.log("Today: " + new Date().getDay())
  const labels = createWeekDaysArray(new Date().getDay()).map(
    (item) => week[item]
  );

  const func = (item) => {
    let counter = 0;
    return Object.keys(item).map((key) => {
      // console.log(item[key]);
      let daytime = 'Morning';

      if (counter === 2) {
        daytime = "Night";
      } else if (counter === 1) {
        daytime = "Day";
      }
      //console.log(counter);
      if (item[key].date === undefined) {
        counter++;
        return <View style={styles.day}></View>;
      } else {
        counter++;
        return (
          <View style={styles.day}>
            <Text>{daytime}</Text>
            <Image
              style={styles.logo}
              source={{
                uri: url(item[key].icon),
              }}
            />
            <Text>{item[key].temperature}</Text>
          </View>
        );
      }
    });
  }

  const weekMap = (week) => {
    week.pop();
    //console.log(week);
    return week.map((element) => {
      return <View style={styles.week}><Text>{element}</Text></View>;
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {weekMap(labels)}
      </View>
      <View style={styles.row}>
        {weather.map((item) => <View style={styles.column}>
          {func(item)}
        </View>)}
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  week: {
    flex: 1 / 5,
    justifyContent: "center",
    alignItems: "center",
    borderTopStartRadius: 25,
    borderWidth: 0.25,
    borderColor: "black",
  },
  logo: {
    width: 20,
    height: 20,
    //margin: 5,
  },
  row: {
    //justifyContent: 'space-evenly',
    width: Dimensions.get("window").width,
    //backgroundColor: 'yellow',
    flexDirection: 'row',
  },
  container: {
    // height: "100%",
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width,
    //backgroundColor: "grey",
    //elevation: 3,
    //overflow: "hidden",
    //flexDirection: "row",
  },
  day: {
    justifyContent: 'center',
    alignItems: 'center',
   // elevation: 5,
    overflow: "hidden",
    padding: 1,
    //backgroundColor: 'yellow',
    //height: "28%",
    //flex: 1 / 5,
    //borderRadius: 10,
    //borderWidth: 1,
    //borderColor: "black",
  },
  column: {
    //backgroundColor: "white",
    flex: 1 / 6,
    //height: `${1 / 3}%`,
    //flexDirection: "column",
    //borderWidth: 1,
    // borderColor: "black",
  },
});

export default WeekForecast;
