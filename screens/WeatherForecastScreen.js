import { View, Text, Dimensions, StyleSheet, BackHandler } from "react-native";
import Weather from "../components/Weather/Weather";
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
import ImageBackgroundComponent from "../components/ImageBackgroundComponent";
import Footer from "../components/Footer";
import { countTemp } from "../constants/constants";
import routes from "../navigation/routes";
import { saveFirstLaunch } from "../store/actions/settings";

const WeatherForecastScreen = (props) => {
  const settings = useSelector((state) => state.settings);
  const weather = useSelector((state) => state.weather);

  const lat = props.route.params.lat;
  const lon = props.route.params.lon;

  const city = weather.city;
  const dispatch = useDispatch();

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", function () {
      return true;
    });
    props.navigation.setOptions({ title: weather.city });
  }, [weather]);

  const fetchWeather = (lat, lon) => {
    dispatch(geoLoadForecast(lat, lon));
    dispatch(geoLoadWeather(lat, lon));
  };

  const fetchWeatherCity = (city) => {
    dispatch(loadForecast(city));
    dispatch(loadWeather(city));
  };
  
  useEffect(() => {
    if (props.route.params.fetchType === "city" && settings.firstLaunch) {
      console.log(1);
      fetchWeatherCity(props.route.params.city);
    }
  }, [props]);

  useEffect(() => {
    if (props.route.params.fetchType !== "city") {
      console.log(2);
      fetchWeather(lat, lon);
      if (weather.error === false) {
        dispatch(saveFirstLaunch(weather.city));
      }
    }
  }, [props]);

  useEffect(() => {
    if (props.route.params.fetchType === "city" && !settings.firstLaunch) {
      console.log(3);
      console.log(props.route.params.city);
      fetchWeatherCity(props.route.params.city);
      if (weather.error === false) {
        dispatch(saveFirstLaunch(weather.city));
      }
    }
  }, [props]);

  if (weather.error === true || weather.error === undefined) {
    return (
      <ImageBackgroundComponent
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <ActivityIndicator />
      </ImageBackgroundComponent>
    );
  } else {
    return (
      <ImageBackgroundComponent>
        <Weather
          confirmation={false}
          icon={weather.icon}
          temperature={countTemp(
            settings.temperatureUnits,
            weather.temperature
          )}
          clouds={weather.clouds}
          pressure={weather.pressure}
          wind={weather.wind}
          humidity={weather.humidity}
          description={weather.description}
          fetchWeather={() => fetchWeatherCity(city)}
          fetchTime={weather.fetchTime}
        />
        <WeekForecast />
        <Footer
          fetchTime={weather.fetchTime}
          fetchWeather={() => fetchWeatherCity(city)}
        />
      </ImageBackgroundComponent>
    );
  }
};

export default WeatherForecastScreen;
