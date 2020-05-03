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
import InputComponent from "../components/InputComponent";

export default function LocationScreen(props) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const settings = useSelector((state) => state.settings);


  //console.log(settings.firstLaunсh);

  useEffect(() => {
    const ignore =
      props.route.params !== undefined
        ? props.route.params.ignoreFirstLaunch
        : false;
    if (!settings.firstLaunсh && !ignore) {
      console.log("Alo huesos");
      props.navigation.navigate(routes.Weather, {
        fetchType: "city",
        city: settings.city,
      });
    } if (settings.firstLaunсh) {
      getLocation();
    }
  }, []);


  const getLocation = async () => {
    // console.log(location);
    if (location === null) {
      const status = await Location.requestPermissionsAsync();
      if (status.granted) {
        const location = await Location.getCurrentPositionAsync({}).catch(() => {
          if (!settings.firstLaunсh) {
            props.navigation.navigate(routes.Weather, {
              fetchType: "city",
              city: settings.city,
            });
          }
          else if (settings.firstLaunсh) {
            setLocation(false);
            setErrorMsg("Permission to access location was denied");
          }
        });
        props.navigation.navigate(routes.Weather, {
          lat: location.coords.latitude,
          lon: location.coords.longitude,
        });
      }
    }
    //console.log(location);
  };

  const handleInput = (city) => {
    props.navigation.navigate(routes.Weather, {
      fetchType: "city",
      city: city,
      //from: 'start'
    });
  };
  useEffect(() => {
    console.log(settings.firstLaunсh);
    if (!settings.firstLaunсh) {
      console.log('Suka');
      getLocation();
    }
  });
  useEffect(() => {
    const ignore =
      props.route.params !== undefined
        ? props.route.params.ignoreFirstLaunch
        : false;
   // console.log('Lol:' + ignore);
    if (ignore) {
     // console.log('alo blya');
      getLocation();
    } else if (!settings.firstLaunсh) {
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
  //console.log(location);
  if (!location) {
    return (
      <ImageBackgroundComponent style={styles.container}>
        <InputComponent icon="md-search" handler={handleInput} />
        <Text>{errorMsg}</Text>
      </ImageBackgroundComponent>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
    //   flex: 1,
    //justifyContent: "center",
    //    alignItems: "center",
  },
});
