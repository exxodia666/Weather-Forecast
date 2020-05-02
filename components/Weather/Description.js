import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { Ionicons, Feather, MaterialCommunityIcons } from "@expo/vector-icons";

const Description = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Ionicons name="md-cloud" size={20} style={styles.icon} />
        <Text style={{ ...styles.text, ...styles.infoText }}>
          {props.clouds}%
        </Text>
      </View>

      <View style={styles.row}>
        <View style={styles.image}></View>
        <Text style={{ ...styles.text, ...styles.infoText }}>
          {props.pressure / 100} Pa
        </Text>
      </View>
      <View style={styles.row}>
        <Feather name="wind" size={20} style={styles.icon} />
        <Text style={{ ...styles.text, ...styles.infoText }}>
          {props.wind} m/s
        </Text>
      </View>
      <View style={styles.row}>
        <MaterialCommunityIcons
          name="water-percent"
          size={20}
          style={styles.icon}
        />
        <Text style={{ ...styles.text, ...styles.infoText }}>
          {props.humidity}%
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    margin: 2,
  },
  row: {
    borderRadius: 5,
    height: 30,
    margin: 2,
    padding: 2,
    borderWidth: 1,
    flexDirection: "row",
  },
  container: {
    //  borderWidth: 1,
    padding: 4,
    flexDirection: "row",
    //flex: 3 / 5,
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  text: {
    padding: 2,
    fontSize: 16,
    fontFamily: "comic-neue",
  },
});

export default Description;

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
