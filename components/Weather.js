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

const url = (iconName) => `http://openweathermap.org/img/wn/${iconName}@2x.png`;

const Weather = (props) => {
  console.log("props");
  console.log(props);
  return (
    <View style={styles.weather}>

      <View style={styles.row}>
        <Image
          style={styles.logo}
          source={{
            uri: url(props.icon),
          }}
        />
        <Text style={styles.text}>
          {(props.temperature - 273.15).toFixed(0) + '\u00b0'}
        </Text>

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
    padding: 20,
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
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    paddingHorizontal: 5,
    fontFamily: 'comic-neue',
    fontSize: 50,
  },
});

export default Weather;
