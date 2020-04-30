import React, { useState } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  CheckBox,
  Button,
} from "react-native";
const InfoScreen = () => {
  //Your Sities todod tipzzzzzzzz
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
          Coming soon...
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {},
});

export default InfoScreen;
