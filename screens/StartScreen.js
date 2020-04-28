import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  StyleSheet,
  View,
  Dimensions,
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { setDayTime } from "../store/actions/daytime";

const StartScreen = (props) => {
  const [cityName, setCity] = useState("London");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDayTime());
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter City"
          value={cityName}
          onChangeText={(text) => setCity(text)}
        />
        <TouchableOpacity
          style={styles.refresh}
          onPress={() =>
            props.navigation.navigate("Weather", { city: cityName })
          }
        >
          <Ionicons name={"md-search"} size={23} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default StartScreen;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "white",
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
  container: {
    paddingTop: 30,
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
  },
});
