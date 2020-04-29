import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";
import { url } from "../constants/constants";
const Weather = (props) => {
  const description = 'light rain';
  //const tempUnits = 'C';
  const humidity = 87; //%
  const pressure = '1004';//hPa 10^2Pa
  const wind = 4;
  const feels_like = 276.79;
  const clouds = 75;//%

  let newStr = description[0].toUpperCase() + description.slice(1);
  return (
    <View style={styles.weather}>

      <View style={{ ...styles.row, ...styles.space_between }}>
        <View style={styles.block}>
          <View style={{ ...styles.row }}>
            <Image
              style={styles.logo}
              source={{
                uri: url(props.icon),
              }}
            />
            <Text style={{ ...styles.text, ...styles.description }}>{newStr}</Text>
          </View>
          <View style={styles.temperature}>
            <Text style={{ ...styles.text, ...styles.temperature }}>
              {(props.temperature).toFixed(0) + "\u00b0 "}
            </Text>
          </View>

        </View>

        <View style={styles.block}>
          <View style={styles.info}>
            <Text style={{ ...styles.text, ...styles.infoText }}>Clouds: {clouds}%</Text>
            <Text style={{ ...styles.text, ...styles.infoText }}>Pressure: {pressure / 100} Pa</Text>
            <Text style={{ ...styles.text, ...styles.infoText }}>Wind speed: {wind} m/s</Text>
            <Text style={{ ...styles.text, ...styles.infoText }}>Humidity: {humidity}%</Text>
          </View>
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  space_between: {
    alignItems: 'center',
    justifyContent: "space-between",
  },
  description: {
    borderBottomWidth: 2,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    fontSize: 22,
  },
  info: {
    color: 'black',
    padding: 10,
    //justifyContent: "center",
    //alignItems: 'flex-start'
  },
  block: {
    //width: '100%',
    //borderWidth: 1,
    //borderColor: 'rgba(10,10,10,0.2)',
  },
  weather: {
    overflow: 'hidden',
   // elevation: 10,
   // borderWidth: 2,
    //borderRightWidth: 1,
    borderRadius: 5,
    width: Dimensions.get("window").width * 0.85,
    padding: 20,
    //alignItems: "center",
    //justifyContent: "center",
  },
  logo: {
    width: 60,
    height: 60,
    // margin: 0,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textShadowColor: "black",
    //textShadowRadius: 1,
    fontFamily: "comic-neue",
  },
  refresh: {
    padding: 10
  },
  temperature: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 90,
  }
});

export default Weather;
