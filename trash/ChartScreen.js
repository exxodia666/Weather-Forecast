import React from "react";
//import { LineChart, Grid } from "react-native-svg-charts";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import { LineChart } from "react-native-chart-kit";

import { LinearGradient } from "expo-linear-gradient";

const week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const ChartScreen = () => {
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
      <LinearGradient
        colors={["#4b6cb7", "#182848"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: Dimensions.get("window").height,
        }}
      >
        <View style={styles.weather}>
          <Weather />
        </View>

        <View style={styles.date}></View>

        <View style={styles.chart}>
          <LineChart
            data={{
              labels: labels,
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                  ],
                },
              ],
            }}
            width={Dimensions.get("window").width} // from react-native
            height={Dimensions.get("window").height / 3}
            yAxisSuffix={"\u2103"}
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              propsForLabels: {
                fontSize: "9",
              },
              backgroundGradientFrom: "#005c97",
              backgroundGradientTo: "#363795",
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255  , ${opacity})`,
              style: {
                //borderRadius: 16,
              },
              propsForDots: {
                r: "6",
                strokeWidth: "1.5",
                stroke: "#1A2980",
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              //borderRadius: 16,
            }}
          />
        </View>

        <View style={styles.footer}></View>

        {/*</LinearGradient>*/}
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  chart: {
    fontSize: 10,
    fontWeight: "bold",
  },
});
export default ChartScreen;
