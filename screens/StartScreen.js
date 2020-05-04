import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import ImageBackgroundComponent from "../components/ImageBackgroundComponent";
import routes from "../navigation/routes";
import InputComponent from "../components/InputComponent";
import { useDispatch } from "react-redux";
import { loadWeather } from "../store/actions/weather";

const StartScreen = (props) => {
  const dispatch = useDispatch();

  const handler = (cityName) => {
    dispatch(loadWeather(cityName));
    props.navigation.navigate(routes.Weather, {
      city: cityName,
      //searchOrWeather: true,
    });
  };
  return (
    <ImageBackgroundComponent style={styles.container}>
      <InputComponent icon="md-add" handler={handler} />
    </ImageBackgroundComponent>
  );
};
export default StartScreen;

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
