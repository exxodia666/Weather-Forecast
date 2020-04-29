import React, { useState, useEffect } from 'react';
import { Dimensions, Text, View, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import { loadWeather, geoLoadWeather } from '../store/actions/weather';
import { useDispatch } from 'react-redux';
import { geoLoadForecast } from '../store/actions/forecast';




export default function LocationScreen(props) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const dispatch = useDispatch();
  
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }
      const location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, [dispatch]);

  useEffect(() => {
    if (location) {
      dispatch(geoLoadForecast(location.coords.latitude, location.coords.longitude));
      dispatch(geoLoadWeather(location.coords.latitude, location.coords.longitude));
    }
  });

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location.coords.longitude + ' ' + location.coords.latitude);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    padding: 30,
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
  },
});
