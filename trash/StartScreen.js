import React from "react";
import { StyleSheet, View, Dimensions, Text } from "react-native";
import ImageBackgroundComponent from "../components/ImageBackgroundComponent";
import routes from "../navigation/routes";
import InputComponent from "../components/InputComponent";
import { useDispatch } from "react-redux";
import { loadWeather } from "../store/actions/weather";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

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
    <ImageBackgroundComponent>
      <View>
        <InputComponent icon="md-add" handler={handler} />
       
      </View>
    </ImageBackgroundComponent>
  );
};
export default StartScreen;

const styles = StyleSheet.create({});
