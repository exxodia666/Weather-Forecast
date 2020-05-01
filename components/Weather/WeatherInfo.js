import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
//import { Ionicons, Feather, MaterialCommunityIcons } from "@expo/vector-icons";

const WeatherInfo = (props) => {
  return (
    <View style={styles.container}>
      {props.city && (
        <Text style={{ ...styles.text, ...styles.city }}>{props.city}</Text>
      )}

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
  city: {
    fontSize: 25,
    fontFamily: "comic-neue",
  },
  text: { fontSize: 20 },
  row: {
    // borderWidth: 1,
    alignItems: "center",
    //justifyContent: "center",
    flexDirection: "row",
  },
  container: {
    // borderWidth: 1,
    height: "50%",
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
