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
  if (props.data.length === 5) {
    console.log(props.data.length);
    labels.pop;
    labels.pop;
    console.log(labels);
  }
  return (
    <View style={styles.container}>
      <LineChart
        data={{
          labels: labels,
          datasets: [
            {
              data: props.data,
            },
          ],
        }}
        width={Dimensions.get("window").width} // from react-native
        height={200}
        yAxisSuffix={"\u2103"}
        yAxisInterval={0.5} // optional, defaults to 1
        chartConfig={{
          propsForLabels: {
            fontSize: "12",
            fontFamily: "comic-neue",
          },
          backgroundColor: "#00000000",
          backgroundGradientFrom: "transparent",
          backgroundGradientTo: "#2B32B2",
          backgroundGradientFromOpacity: 0.1,
          backgroundGradientToOpacity: 0.4,
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          propsForDots: {
            r: "3",
            strokeWidth: "2",
            stroke: "white",
          },
        }}
        style={
          {
            //
            //
          }
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Chart;
