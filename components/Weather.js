import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";
import { url } from "../constants/constants";
//props{
//tempUnits - F, C, K
//
//}
/**
 * 
 * 
 */
const Weather = (props) => {
  const description = 'fog';
  const tempUnits = 'K';
  const humidity = 87; //%
  const pressure = '1004';
  const wind = 1004;//hPa 10^2Pa
  const feels_like = 276.79;
  const clouds = 75;//%

  let newStr = description[0].toUpperCase() + description.slice(1);
  return (
    <View style={styles.weather}>

      <View style={styles.block}>
        <View style={styles.row}>
          <Image
            style={styles.logo}
            source={{
              uri: url(props.icon),
            }}
          />
          <View>
            <Text style={{ ...styles.text, ...styles.temperature }}>
              {(props.temperature) + "\u00b0 " + tempUnits}
            </Text>
            <Text style={{ ...styles.text, ...styles.temperature }}>{newStr}</Text>
          </View>
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
  );
};

const styles = StyleSheet.create({
  info: {
    padding: 10,
    justifyContent: "center",
    alignItems: 'flex-start'
  },
  block: {
    width: '100%',
    //borderWidth: 1,
    //borderColor: 'rgba(10,10,10,0.2)',
  },
  weather: {
    elevation: 4,
    borderWidth: 1,
    width: Dimensions.get("window").width,
    // padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 120,
    height: 120,
    margin: 0,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textShadowColor: "grey",
    textShadowRadius: 5,
    fontFamily: "comic-neue",
  },
  refresh: {
    padding: 10
  },
  temperature: {
    fontSize: 20,
  }
});

export default Weather;
