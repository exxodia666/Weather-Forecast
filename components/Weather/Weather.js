import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import WeatherInfo from "./WeatherInfo";
import Description from "./Description";

import { url } from "../../constants/constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

const Weather = (props) => {
  let newStr = props.description[0].toUpperCase() + props.description.slice(1);
  return (
    <View style={{ ...styles.container, ...props.style }}>
      <WeatherInfo
        handler={props.handler}
        confirmation={props.confirmation}
        deleteCity={props.deleteCity}
        style={props.style}
        city={props.city}
        url={url(props.icon)}
        temperature={props.temperature}
        description={newStr}
      />
      <Description
        style={props.style}
        clouds={props.clouds}
        pressure={props.pressure}
        humidity={props.humidity}
        wind={props.wind}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 4,
  },
  container: {
    width: Dimensions.get("window").width,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Weather;

/*
descriptionRow: {

},
image: {
  width: 20,
  height: 20,
  margin: 5,
},
infoText: {
  fontSize: 15,
},
icon: {
  borderWidth:1,
  margin: 5,
},
city: {
  fontSize: 30,
},
space_between: {
  alignItems: "center",
  justifyContent: "space-between",
},
description: {
  borderBottomWidth: 2,
  borderColor: "rgba(0, 0, 0, 0.3)",
  fontSize: 18,
},
info: {
  borderWidth: 1,
  color: "black",
  padding: 10,
  justifyContent: "center",
  alignItems: "flex-start",
},

block: {
 width: '50%',

  justifyContent: "flex-end",
  alignItems: "flex-end",
  //backgroundColorwidth: '100%',
 borderWidth: 1,
  //borderColor: 'rgba(10,10,10,0.2)',
},
weather: {
  width: Dimensions.get("window").width * 0.95,
  marginVertical: 10,
  //padding: 20,
 borderWidth: 1,
  //borderRightWidth: 1,
  borderRadius: 10,
  alignItems: 'center',
  justifyContent: "space-between",
},
logo: {
  width: 60,
  height: 60,
  // margin: 0,
  borderWidth: 1,
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
  padding: 10,
},
temperature: {
 // justifyContent: "center",
 // alignItems: "center",
  fontSize: 90,
},*/
