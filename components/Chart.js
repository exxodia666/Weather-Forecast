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

//const url = (iconName) => `http://openweathermap.org/img/wn/${iconName}@2x.png`;

//const week = [  "Sunday", "Monday", "Tuesday","Wednesday", "Thursday","Friday", "Saturday",];

const Chart = (props) => {
  const week = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Satur"];
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
        height={220}
        yAxisSuffix={"\u2103"}
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          propsForLabels: {
            fontSize: "12",
          },
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#1488CC",
          backgroundGradientTo: "#2B32B2",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "white",
          },
        }}
        style={{
          marginVertical: 8,
          padding: 10,
          //borderRadius: 16,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Chart;
