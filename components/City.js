import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { url } from "../constants/constants";
import { Ionicons } from "@expo/vector-icons";
const City = (props) => {
  return (
    <View style={styles.weather}>
      <TouchableOpacity
        style={styles.delete}
        onPress={() => props.deleteCity()}
      >
        <Ionicons name="md-trash" size={30} />
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.text}>{props.city} </Text>
        <Text style={{ ...styles.text, ...styles.temperature }}>
          {(props.temperature - 273.15).toFixed(0) + "\u00b0"}
        </Text>
        <Image style={styles.logo} source={{ uri: url(props.icon) }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  delete: {
    padding: 15,
  },
  weather: {
    width: "100%",
    backgroundColor: "yellow",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "blue",
    borderWidth: 1,
    overflow: "hidden",
    width: Dimensions.get("window").width,
  },
  logo: {
    width: 60,
    height: 60,
    borderWidth: 1,
    // margin: 0,
  },
  row: {},
  text: {
    fontSize: 30,
    textShadowColor: "black",
    //textShadowRadius: 1,
    fontFamily: "comic-neue",
  },
  temperature: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default City;
