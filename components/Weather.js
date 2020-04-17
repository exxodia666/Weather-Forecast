import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

/*
const daytime = {
  night

}

const icons = {
  "broken clouds": "md-partlycloudy",
  "clear sky": "md-sunny",
  "overcast clouds": "md-cloud",
  "few clouds": "md-lightning",
  "haze": "md-fog",
  "": "lightning",
  lightning-rainy
  sunny
  snowy-rainy
  snowy
};
*/

const url = (iconName) => `http://openweathermap.org/img/wn/${iconName}@2x.png`;

const Weather = (props) => {
  console.log("props");
  console.log(props);
  return (
    <View style={styles.weather}>
      <Text style={styles.text}>
        {"City: "} {props.city}
      </Text>
      <View style={styles.row}>
        <Text style={styles.text}>
          {"Temperature: "}
          {(props.temperature - 273.15).toFixed(2) + "\u2103"}
        </Text>
      </View>

      <View>
        <Image
          style={styles.logo}
          source={{
            uri: url(props.icon),
          }}
        />
      </View>
      <TouchableOpacity
        style={styles.refresh}
        onPress={() => props.fetchWeather}
      >
        <Ionicons name={"md-refresh"} size={23} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  weather: {
    width: Dimensions.get("window").width,
    borderRadius: 10,
    overflow: "hidden",
    padding: 20,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
    //borderColor: "black",
    //borderWidth: 1,
  },
  logo: {
    width: 66,
    height: 66,
    margin: 10,
  },
  row: {
    flexDirection: "row",
  },
  text: {
    fontSize: 33,
  },
});

export default Weather;
