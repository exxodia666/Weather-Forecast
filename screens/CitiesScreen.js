import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { ScrollView } from "react-native";
import { deleteCity } from "../store/actions/city";
import { loadWeatherCity } from "../store/actions/weatherCity";
import { ActivityIndicator } from "react-native";
import Weather from "../components/Weather/Weather";
//import { deleteCity } from "../store/actions/city";
import { countTemp } from "../constants/constants";
import ImageBackgroundComponent from "../components/ImageBackgroundComponent";

const CitiesScreen = () => {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.city);
  const weatherCity = useSelector((state) => state.weatherCity);
  const [isFetched, setIsFetched] = useState(false);
  const deleteCityHander = (city) => dispatch(deleteCity(city));
  const settings = useSelector((state) => state.settings);
  console.log(weatherCity);

  useEffect(() => {
    cities.forEach((item) => {
      dispatch(loadWeatherCity(item.city));
      if (!weatherCity.error) {
        setIsFetched(true);
      }
    });
  }, [cities]);

  if (isFetched === false) {
    return (
      <ImageBackgroundComponent style={styles.container}>
        <ActivityIndicator />
      </ImageBackgroundComponent>
    );
  }
  return (
    <ImageBackgroundComponent>
      <ScrollView style={styles.container}>
        {cities.map((city) => {
          const weather = weatherCity.find(
            (weather) => weather.city === city.city
          );
          if (weather === undefined) {
            return;
          }
          console.log(weather);

          return (
            <Weather
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
