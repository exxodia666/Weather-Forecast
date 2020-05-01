import React, { useState, useEffect } from "react";
import { StyleSheet, View, Dimensions, Text } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { regEx } from "../constants/constants";

const InputComponent = (props) => {
  const [cityName, setCity] = useState("");

  const setCityName = (city) => {
    if (regEx.test(city)) {
      setCity(city);
    }
  };
  const inputHandler = (city) => {
    console.log(city);
    props.handler(city);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter City"
        value={cityName}
        onChangeText={(text) => setCityName(text)}
      />
      <TouchableOpacity
        style={styles.refresh}
        onPress={() => inputHandler(cityName)}
      >
        <Ionicons name={props.icon} size={23} />
      </TouchableOpacity>
    </View>
  );
};
export default InputComponent;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "white",
    marginTop: 40,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width * 0.8,
    //height: Dimensions.get("window").height * 0.5,
    borderRadius: 5,
    overflow: "hidden",
    elevation: 5,
  },
  textInput: {
    padding: 3,
    fontSize: 24,
    borderBottomColor: "grey",
    borderBottomWidth: 2,
    width: "90%",
    margin: 20,
  },
});
