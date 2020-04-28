import React, { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Weather from "../components/Weather";
import { loadWeather } from "../store/actions/weather";


const WeatherScreen = (props) => {
  const cityName = props.route.params.city;
  const [isFetched, setIsFetched] = useState(false);
  const weather = useSelector((state) => state.weather);
  const dispatch = useDispatch();
  //console.log(weather);
  
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
      <Weather
        icon={weather.icon}
        city={weather.city}
        temperature={weather.temperature}
        fetchWeather={() => fetchWeather(cityName)}
      />
    );
  }
};

export default WeatherScreen;
