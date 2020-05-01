import { View, Text, Dimensions, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

const Footer = (props) => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontFamily: "comic-neue" }}>
          Updated: {props.fetchTime}
        </Text>
        <TouchableOpacity
          style={styles.refresh}
          onPress={() => props.fetchWeather()}
        >
          <Ionicons name={"md-refresh"} size={15} />
        </TouchableOpacity>
      </View>
      <Text style={{ fontFamily: "comic-neue" }}>Powered by: Open Weather</Text>
    </View>
  );
};
export default Footer;
const styles = StyleSheet.create({
  refresh: {
    padding: 10,
  },
});
