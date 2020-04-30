import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { deleteCity } from "../store/actions/city";
import { loadWeatherCity } from "../store/actions/weatherCity";
import { ActivityIndicator } from "react-native";
import City from "../components/City";
//import { deleteCity } from "../store/actions/city";

const CitiesScreen = () => {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.city);
  const weatherCity = useSelector((state) => state.weatherCity);
  const [isFetched, setIsFetched] = useState(false);
  const deleteCityHander = (city) => dispatch(deleteCity(city));

  useEffect(() => {
    cities.forEach((item) => {
      dispatch(loadWeatherCity(item.city));
      if (weatherCity) {
        setIsFetched(true);
      }
    });
  }, [cities]);

  if (isFetched === false) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        {cities.map((city) => {
          const weather = weatherCity.find(
            (weather) => weather.city === city.city
          );
          if (weather === undefined) {
            return;
          }
          console.log(weather);

          return (
            <City
              deleteCity={ () => deleteCityHander(city)}
              city={city.city}
              icon={weather.icon}
              temperature={weather.feels_like}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {},
});
export default CitiesScreen;
