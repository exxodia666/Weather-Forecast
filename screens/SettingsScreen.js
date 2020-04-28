import React, { useState } from "react";
import { View, Text, Dimensions, StyleSheet, CheckBox, Button } from "react-native";

import { Switch } from "react-native-gesture-handler";

const SettingsScreen = () => {
  const [celsiusIsSelected, setCelsiusIsSelected] = useState(true);
  const [farenheitIsSelected, setFarenheitIsSelected] = useState(false);
  const [kelvinIsSelected, setKelvinIsSelected] = useState(false);
  const [isGeolocation, setIsGeolocation] = useState(false);

  const toggleSwitch = () => setIsGeolocation(previousState => !previousState);


  const selectTempOption = (temp) => {
    if (temp === 'c') {
      setCelsiusIsSelected(true);
      setKelvinIsSelected(false);
      setFarenheitIsSelected(false);
    } else if (temp === 'f') {
      setFarenheitIsSelected(true);
      setCelsiusIsSelected(false);
      setKelvinIsSelected(false);
    } else if (temp === 'k') {
      setKelvinIsSelected(true);
      setCelsiusIsSelected(false);
      setFarenheitIsSelected(false);
    }
  };

  //Your Sities todod tipzzzzzzzz
  return (
    <View style={styles.container}>
      <View style={styles.settings}>
        <Text style={{ ...styles.text, ...styles.head }}>Settings Coming Soon...</Text>
        <View style={styles.row}>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isGeolocation ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isGeolocation}
          />
          <Text>Use geolocation</Text>
        </View>

        <View style={styles.row}>
          <CheckBox
            value={celsiusIsSelected}
            onValueChange={() => selectTempOption('c')}
            style={styles.checkbox}
          />
          <Text>Celsius</Text>
          <CheckBox
            value={farenheitIsSelected}
            onValueChange={() => selectTempOption('f')}
            style={styles.checkbox}
          />
          <Text>Farenheit</Text>
          <CheckBox
            value={kelvinIsSelected}
            onValueChange={() => selectTempOption('k')}
          />
          <Text>Kelvin</Text>
        </View>

        <Button
          title='Save changes'
        />

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
