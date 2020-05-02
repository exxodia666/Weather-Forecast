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
import routes from "../navigation/routes";

export default function LocationScreen(props) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const settings = useSelector((state) => state.settings);

  const getLocation = async () => {
    //console.log("not");
    if (location === null) {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }
      const location = await Location.getCurrentPositionAsync({});
      props.navigation.navigate(routes.Weather, {
        lat: location.coords.latitude,
        lon: location.coords.longitude,
      });
    }
  };

  useEffect(() => {
   // console.log("ya tyt");
    const ignore =
      props.route.params !== undefined
        ? props.route.params.ignoreFirstLaunch
        : false;
    //console.log(ignore);

    if (settings.firstLaunсh === true || ignore) {
      getLocation();
    } else {
      props.navigation.navigate(routes.Weather, {
        fetchType: "city",
        city: settings.city,
      });
    }
    return () => {
      setLocation(null);
    };
  }, [props]);

  if (location === null) {
    return (
      <ImageBackgroundComponent
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <ActivityIndicator />
      </ImageBackgroundComponent>
    );
  }

  return (
    <>
      <Text>{errorMsg}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
