import React, { useState } from "react";
import { View, Text, Dimensions, StyleSheet, CheckBox, Button, Alert } from "react-native";
import { Switch } from "react-native-gesture-handler";
import units from "../constants/units";
import { useDispatch, useSelector } from "react-redux";

import { saveSettings } from "../store/actions/settings";


const Settings = props => {
    const dispatch = useDispatch();
    const settings = useSelector((state) => state.settings);
    const [isGeolocation, setIsGeolocation] = useState(settings.geolocation);
    const [celsiusIsSelected, setCelsiusIsSelected] = useState(settings.temperatureUnits[units.Celsius]);
    const [farenheitIsSelected, setFarenheitIsSelected] = useState(settings.temperatureUnits[units.Farenheit]);
    const [kelvinIsSelected, setKelvinIsSelected] = useState(settings.temperatureUnits[units.Kelvin]);

    const toggleSwitch = () => setIsGeolocation(previousState => !previousState);

    const submitOptionts = () => {
        dispatch(saveSettings({
            geolocation: isGeolocation,
            celsius: celsiusIsSelected,
            farenheit: farenheitIsSelected,
            kelvin: kelvinIsSelected,
        }));
        Alert.alert("Succesfully saved!!!")
    }
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
        <View style={styles.settings}>
            <Text style={{ ...styles.text, ...styles.head }}>Settings</Text>
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
                    onValueChange={() => selectTempOption(units.Celsius)}
                    style={styles.checkbox}
                />
                <Text>{units.Celsius}</Text>
                <CheckBox
                    value={farenheitIsSelected}
                    onValueChange={() => selectTempOption(units.Farenheit)}
                    style={styles.checkbox}
                />
                <Text>{units.Farenheit}</Text>
                <CheckBox
                    value={kelvinIsSelected}
                    onValueChange={() => selectTempOption(units.Kelvin)}
                />
                <Text>{units.Kelvin}</Text>
            </View>

            <Button
                title='Save changes'
                onPress={submitOptionts}
            />
            <Text>geolocation: {settings.geolocation.toString()} </Text>
            <Text>Celsius: {celsiusIsSelected.toString()} </Text>
            <Text>Farenheit: {farenheitIsSelected.toString()} </Text>
            <Text>Kelvin: {kelvinIsSelected.toString()} </Text>
        </View>
    );
}

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
        overflow: "hidden",
        elevation: 3,
        height: Dimensions.get("window").height * 0.85,
        width: Dimensions.get("window").width * 0.9,
    },
});
export default Settings;