import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";

import { useSelector } from "react-redux";
import weatherSort from "../utils/weatherSort";
import {
  week,
  url,
  createWeekDaysArray,
  countTemp,
} from "../constants/constants";

const WeekForecast = (props) => {
  const weather = weatherSort(useSelector((state) => state.forecast.weather));
  const settings = useSelector((state) => state.settings);
  //console.log(settings.temperatureUnits);

  const labels = createWeekDaysArray(new Date().getDay()).map(
    (item) => week[item]
  );

  const func = (item) => {
    let counter = 0;
    return Object.keys(item).map((key) => {
      let daytime = "Morning";
      if (counter === 2) {
        daytime = "Night";
      } else if (counter === 1) {
        daytime = "Day";
      }
      if (item[key].date === undefined) {
        counter++;
      } else {
        counter++;
        return (
          <View style={styles.day}>
            <Text style={styles.text}>{daytime}</Text>
            <Image
              style={styles.logo}
              source={{
                uri: url(item[key].icon),
              }}
            />
            <Text style={styles.text}>
              {countTemp(settings.temperatureUnits, item[key].temperature)}{" "}
              {"\u00b0"}
            </Text>
          </View>
        );
      }
    });
  };

  const weekMap = (week) => {
    week.pop();
    return week.map((element) => {
      return (
        <View style={styles.week}>
          <Text style={styles.text}>{element}</Text>
        </View>
      );
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>{weekMap(labels)}</View>

      <View style={styles.row}>
        {weather.map((item) => (
          <View style={styles.column}>{func(item)}</View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "comic-neue",
    fontSize: 12,
  },
  week: {
    flex: 1 / 5,
    justifyContent: "center",
    alignItems: "center",
    margin: 1,
    borderBottomRightRadius: 10,
    borderBottomWidth: 1,
    borderRightWidth: 1,
  },
  logo: {
    width: 20,
    height: 20,
  },
  row: {
    width: Dimensions.get("window").width,
    flexDirection: "row",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width,
  },
  day: {
    //borderColor: 'black',
    margin: 1,
    borderBottomRightRadius: 5,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    padding: 1,
  },
  column: {
    flex: 1 / 6,
  },
});

export default WeekForecast;
