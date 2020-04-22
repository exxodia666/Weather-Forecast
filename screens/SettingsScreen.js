import React from "react";
import { View, Text, Dimensions, StyleSheet, CheckBox } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.settings}>
      <Text>Your Sities todod tipzzzzzzzz</Text>
        <Text style={styles.text}>Settings</Text>
        <Text>Farenheit</Text>
        <Text>Celsius</Text>
        <Text>Kelvin</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    //width: Dimensions.get("window").width,
    //height: Dimensions.get("window").height,
  },
  settings: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    //borderWidth: 1,
    //borderColor: "white",
    overflow: "hidden",
    elevation: 3,
    height: Dimensions.get("window").height * 0.85,
    width: Dimensions.get("window").width * 0.9,
  },
});
export default SettingsScreen;
