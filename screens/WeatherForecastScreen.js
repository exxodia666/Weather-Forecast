import { View, Text, Dimensions, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Weather from "../components/Weather";
import Chart from "../components/Chart";
import React, { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { loadWeather } from "../store/actions/weather";

const WeatherForecastScreen = (props) => {
  const cityName = props.route.params.city;
  const [isFetched, setIsFetched] = useState(false);
  const weather = useSelector((state) => state.weather);
  const dispatch = useDispatch();
  console.log(weather);

  const fetchWeather = (city) => {
    dispatch(loadWeather(city));
    setIsFetched(true);
  };

  useEffect(() => {
    fetchWeather(cityName);
  }, [dispatch]);

  if (isFetched === false) {
    return <ActivityIndicator />;
  } else {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={["#1488CC", "#2B32B2"]}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: Dimensions.get("window").height,
          }}
        />
        <Weather
          icon={weather.icon}
          city={weather.city}
          temperature={weather.temperature}
          fetchWeather={() => fetchWeather(cityName)}
        />
        <Chart />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default WeatherForecastScreen;
