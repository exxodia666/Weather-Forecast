import React, { useState } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  CheckBox,
  Button,
  Alert,
} from "react-native";
import { Switch } from "react-native-gesture-handler";
import units from "../constants/units";
import { useDispatch, useSelector } from "react-redux";

import { saveSettings, restoreDefault } from "../store/actions/settings";
import ImageBackgroundComponent from "./ImageBackgroundComponent";

const Settings = (props) => {
  const dispatch = useDispatch();
  const settings = useSelector((state) => state.settings);

  //    const [isGeolocation, setIsGeolocation] = useState(settings.geolocation);
  const [celsiusIsSelected, setCelsiusIsSelected] = useState(
    settings.temperatureUnits[units.Celsius]
  );
  const [farenheitIsSelected, setFarenheitIsSelected] = useState(
    settings.temperatureUnits[units.Farenheit]
  );
  const [kelvinIsSelected, setKelvinIsSelected] = useState(
    settings.temperatureUnits[units.Kelvin]
  );

  const toggleSwitchC = () =>
    setCelsiusIsSelected((previousState) => !previousState);

  const toggleSwitchF = () =>
    setFarenheitIsSelected((previousState) => !previousState);

  const toggleSwitchK = () =>
    setKelvinIsSelected((previousState) => !previousState);

  const submitOptionts = () => {
    dispatch(
      saveSettings({
        celsius: celsiusIsSelected,
        farenheit: farenheitIsSelected,
        kelvin: kelvinIsSelected,
      })
    );
    Alert.alert("Succesfully saved!!!");
  };
  const selectTempOption = (temp) => {
    if (temp === units.Celsius) {
      setCelsiusIsSelected(true);
      setKelvinIsSelected(false);

      setFarenheitIsSelected(false);
    } else if (temp === units.Farenheit) {
      setFarenheitIsSelected(true);
      setCelsiusIsSelected(false);

      setKelvinIsSelected(false);
    } else if (temp === units.Kelvin) {
      setKelvinIsSelected(true);
      setCelsiusIsSelected(false);

      setFarenheitIsSelected(false);
    }
  };

  return (
    <ImageBackgroundComponent style={styles.container}>
      <View style={styles.settings}>
        <View style={{ alignItems: "flex-start" }}>
          <View style={styles.row}>
            <Switch
              style={styles.switch}
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={celsiusIsSelected ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => selectTempOption(units.Celsius)}
              value={celsiusIsSelected}
            />
            <Text style={styles.text}>{units.Celsius}</Text>
          </View>
          <View style={styles.row}>
            <Switch
              style={styles.switch}
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={farenheitIsSelected ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => selectTempOption(units.Farenheit)}
              value={farenheitIsSelected}
            />
            <Text style={styles.text}>{units.Farenheit}</Text>
          </View>
          {/*}
          <View style={styles.row}>
            <Switch
              style={styles.switch}
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={kelvinIsSelected ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => selectTempOption(units.Kelvin)}
              value={kelvinIsSelected}
            />

            <Text style={styles.text}>{units.Kelvin}</Text>
  </View>*/}
        </View>
        <View style={styles.button}>
          <Button title="Save changes" onPress={submitOptionts} />
        </View>
        <View style={styles.button}>
          <Button
            title="Restore settings"
            onPress={() => dispatch(restoreDefault())}
          />
        </View>
      </View>
    </ImageBackgroundComponent>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 6,
  },
  switch: {
    padding: 10,
  },
  text: {
    fontFamily: "comic-neue",
    fontSize: 25,
  },
  row: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  container: {
    paddingTop: 40,
    flex: 1,
    alignItems: "center",
  },
  settings: {
    padding: 20,
    justifyContent: "center",
    borderRadius: 5,
    overflow: "hidden",
  },
});
export default Settings;
