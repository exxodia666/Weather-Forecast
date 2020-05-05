import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

const WeatherInfo = (props) => {
  const daytime = useSelector((state) => state.daytime);

  return (
    <View style={styles.container}>
      <View style={{ ...styles.row, ...styles.spaces }}>
        {props.handler && (
          <TouchableOpacity onPress={() => props.handler(props.city)}>
            <Ionicons
              size={30}
              name="md-information-circle"
              color={daytime.time ? "black" : "white"}
            />
          </TouchableOpacity>
        )}

        {props.city && (
          <Text style={{ ...styles.text, ...styles.city }}>{props.city}</Text>
        )}

        {props.confirmation && (
          <TouchableOpacity
            style={styles.button}
            onPress={props.deleteCity && props.deleteCity}
          >
            <Ionicons
              name={"md-trash"}
              color={daytime.time ? "black" : "white"}
              size={30}
            />
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.row}>
        <Image
          style={styles.logo}
          source={{
            uri: props.url,
          }}
        />
        <Text style={styles.text}>{props.description}</Text>
      </View>
      <Text style={{ ...styles.text, ...styles.temperature }}>
        {props.temperature + "\u00b0 "}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  spaces: {
    //width: Dimensions.get('window').width,
    justifyContent: "space-evenly",
  },
  button: {
    padding: 4,
  },
  city: {
   // color: daytime.time ? "black" : "white",
    fontSize: 25,
    fontFamily: "comic-neue",
  },
  text: { 
    
    fontSize: 20 },
  row: {
    // borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  container: {
    // borderWidth: 1,
    //height: "70%",
    //flex: 4 / 5,
    //justifyContent: "center",
    //  alignItems: "center",
  },
  logo: {
    width: 60,
    height: 60,
  },
  temperature: {
    fontSize: 90,
  },
});

export default WeatherInfo;

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
