import React, { useState, useEffect } from "react";
import {
  Dimensions,
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import * as Location from "expo-location";
import { useDispatch, useSelector } from "react-redux";
import ImageBackgroundComponent from "../components/ImageBackgroundComponent";

export default function LocationScreen(props) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const dispatch = useDispatch();
  const settings = useSelector((state) => state.settings);

  useEffect(() => {
    if (settings.geolocation) {
      (async () => {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== "granted") {
          setErrorMsg("Permission to access location was denied");
        }
        const location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      })();
    }
  }, []);
  if (location === null) {

    return (
      <ImageBackgroundComponent style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator />
    </ImageBackgroundComponent>
    );
  }
  if (location) {
    console.log('da ti ahuel');
    props.navigation.navigate("Weather", {
      lat: location.coords.latitude,
      lon: location.coords.longitude,
    });
  }

  return<></>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
