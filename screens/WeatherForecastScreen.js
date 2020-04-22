import { View, Text, Dimensions, StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Weather from "../components/Weather";
import Chart from "../components/Chart";
import React, { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { loadWeather } from "../store/actions/weather";
import { setDayTime } from "../store/actions/daytime";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import WeekForecast from "../components/WeekForecast";
import { loadForecast } from "../store/actions/forecast";

const WeatherForecastScreen = (props) => {
  const cityName = props.route.params.city;

  const [isFetched, setIsFetched] = useState(false);

  const weather = useSelector((state) => state.weather);
  const daytime = useSelector((state) => state.daytime.time);
  //console.log(weather);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDayTime());
  }, []);

  //console.log(daytime);
  const image = (daytime) ? require('../assets/day.png') : require('../assets/night.png');



  const fetchWeather = () => {
    dispatch(loadWeather(cityName));
    dispatch(loadForecast(cityName));
    setIsFetched(true);
  };

  useEffect(() => {
    fetchWeather();
  }, [dispatch]);

  if (isFetched === false) {
    return <ActivityIndicator />;
  } else {
    return (

      <ImageBackground source={image} style={styles.image}>
        <View style={styles.temperature}>
          <Weather
            icon={weather.icon}
            city={weather.city}
            temperature={weather.temperature}
            fetchWeather={() => fetchWeather()}
            fetchTime={weather.fetchTime}
          />
        </View>
        <WeekForecast />
        <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: "center"
        }}
        >
          <Text style={{ fontFamily: 'comic-neue' }}>
            Updated: {weather.fetchTime}
          </Text>
          <TouchableOpacity
            style={styles.refresh}
            onPress={() => fetchWeather()}
          >
            <Ionicons name={"md-refresh"} size={15} />
          </TouchableOpacity>
        </View>
        <Text style={{ fontFamily: 'comic-neue' }}>
          Powered by: Open Weather
          </Text>

      </ImageBackground >
    );
  }
};

const styles = StyleSheet.create({
  temperature: {
    height:'50%',
    //backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  refresh: {
    padding: 10,
  },
  image: {
    //backgroundColor:'yellow',
    paddingTop: 10,
    flex: 1,
    //backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
});
export default WeatherForecastScreen;
