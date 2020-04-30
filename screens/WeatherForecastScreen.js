import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ImageBackground,
} from "react-native";
import Weather from "../components/Weather";
import React, { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { loadWeather, geoLoadWeather } from "../store/actions/weather";
import { setDayTime } from "../store/actions/daytime";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import WeekForecast from "../components/WeekForecast";
import { loadForecast, geoLoadForecast } from "../store/actions/forecast";
import units from "../constants/units";
import * as Location from "expo-location";
import { Button } from "react-native-elements";

const WeatherForecastScreen = (props) => {
  const [isFetched, setIsFetched] = useState(false);
  const settings = useSelector((state) => state.settings);
  const weather = useSelector((state) => state.weather);
  const daytime = useSelector((state) => state.daytime.time);

  const lat = props.route.params.lat;
  const lon = props.route.params.lon;

  const city = weather.city;
  useEffect(() => {
    props.navigation.setOptions({ title: weather.city });
  }, [weather]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setDayTime());
  }, [dispatch]);

  const image = daytime
    ? require("../assets/day.png")
    : require("../assets/night.png");

  const countTemp = (settings, temperature) => {
    const temp = settings[units.Celsius]
      ? temperature - 273.15
      : settings[units.Farenheit]
      ? (temperature - 273.15) * 1.8 + 32
      : temperature;
    return temp;
  };

  const fetchWeather = (lat, lon) => {
    dispatch(geoLoadForecast(lat, lon));
    dispatch(geoLoadWeather(lat, lon));
    if (weather) {
      setIsFetched(true);
    }
  };

  const fetchWeatherCity = (city) => {
    // setIsFetched(false);
    dispatch(loadForecast(city));
    dispatch(loadWeather(city));
    if (weather) {
      setIsFetched(true);
    }
  };

  useEffect(() => {
    fetchWeather(lat, lon);
  }, []);

  if (isFetched === false) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    );
  } else {
    return (
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.temperature}>
          <Weather
            icon={weather.icon}
            city={weather.city}
            temperature={countTemp(
              settings.temperatureUnits,
              weather.temperature
            )}
            fetchWeather={() => fetchWeatherCity(city)}
            fetchTime={weather.fetchTime}
          />
        </View>
        <WeekForecast />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontFamily: "comic-neue" }}>
            Updated: {weather.fetchTime}
          </Text>
          <TouchableOpacity
            style={styles.refresh}
            onPress={() => fetchWeatherCity(city)}
          >
            <Ionicons name={"md-refresh"} size={15} />
          </TouchableOpacity>
        </View>
        <Text style={{ fontFamily: "comic-neue" }}>
          Powered by: Open Weather
        </Text>
      </ImageBackground>
    );
  }
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "comic-neue",
  },
  temperature: {
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  refresh: {
    padding: 10,
  },
  image: {
    paddingTop: 10,
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
export default WeatherForecastScreen;
