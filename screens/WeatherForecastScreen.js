import { View, Text, Dimensions, StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Weather from "../components/Weather";
import Chart from "../components/Chart";
import React, { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { loadWeather } from "../store/actions/weather";
import { setDayTime } from "../store/actions/daytime";

const WeatherForecastScreen = (props) => {
  const cityName = props.route.params.city;

  const [isFetched, setIsFetched] = useState(false);

  const weather = useSelector((state) => state.weather);
  const daytime = useSelector((state) => state.daytime.time);


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDayTime());
  }, []);

  console.log(daytime);
  const image = (daytime) ? require('../assets/day.png') : require('../assets/night.png');



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

      <ImageBackground source={image} style={styles.image}>
        <View style={{ flex: 1 / 2, justifyContent: 'center' }}>
          <Weather
            icon={weather.icon}
            city={weather.city}
            temperature={weather.temperature}
            fetchWeather={() => fetchWeather(cityName)}
          />
        </View>

        <View style={{ flex: 1 / 2, justifyContent: 'flex-end' }}>
          {<Chart />
          }
          <Text style={{ fontFamily: 'comic-neue' }}>
            Powered by: Open Weather
          </Text>
        </View>
      </ImageBackground>
    );
  }
};

const styles = StyleSheet.create({
  image: {
    paddingTop: 10,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
});
export default WeatherForecastScreen;
