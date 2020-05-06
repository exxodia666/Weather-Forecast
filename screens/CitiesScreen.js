import React, { useEffect, useState } from "react";
import { StyleSheet, Dimensions, ShadowPropTypesIOS } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { ScrollView } from "react-native";
import { deleteCity } from "../store/actions/city";
import { loadWeatherCity } from "../store/actions/weatherCity";
import Weather from "../components/Weather/Weather";
import { countTemp } from "../constants/constants";
import ImageBackgroundComponent from "../components/ImageBackgroundComponent";
import { loadForecast } from "../store/actions/forecast";
import { loadWeather } from "../store/actions/weather";
import routes from "../navigation/routes";

const CitiesScreen = (props) => {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.city);
  const weatherCity = useSelector((state) => state.weatherCity);
  const deleteCityHander = (city) => dispatch(deleteCity(city));
  const settings = useSelector((state) => state.settings);
  
  useEffect(() => {
   // console.log('useEffect');
    cities.forEach((item) => {
      dispatch(loadWeatherCity(item.city));
    });
  }, [cities]);

  const weatherOnPress = async (city) => {
    await dispatch(loadWeather(city));
    await dispatch(loadForecast(city));
    props.navigation.navigate(routes.Weather, { isFetched: true });
  };

  return (
    <ImageBackgroundComponent>
      <ScrollView style={styles.container}>
        {cities.length !== 0 &&
          cities.map((city) => {
            const weather = weatherCity.find(
              (weather) => weather.city === city.city
            );
            if (weather === undefined) {
              return;
            }
            return (
              <Weather
                handler={weatherOnPress}
                confirmation={true}
                deleteCity={() => deleteCityHander(weather.city)}
                key={Math.random() * 1000}
                city={city}
                style={styles.weather}
                icon={weather.icon}
                city={weather.city}
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
            );
          })}
      </ScrollView>
    </ImageBackgroundComponent>
  );
};

const styles = StyleSheet.create({
  weather: {
    borderBottomWidth: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 2,
  },
  container: {
    flex: 1,
  },
});
export default CitiesScreen;
