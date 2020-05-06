import { BackHandler, Alert, Text } from "react-native";
import Weather from "../components/Weather/Weather";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadWeather } from "../store/actions/weather";
import WeekForecast from "../components/WeekForecast";
import { loadForecast, geoLoadForecast } from "../store/actions/forecast";
import ImageBackgroundComponent from "../components/ImageBackgroundComponent";
import Footer from "../components/Footer";
import { countTemp } from "../constants/constants";

const WeatherForecastScreen = (props) => {
  const [isFetched, setIsFetched] = useState(false);
  const weather = useSelector((state) => state.weather);
  const settings = useSelector((state) => state.settings);
  const cities = useSelector((state) => state.city);

  const dispatch = useDispatch();

  const fetchWeather = async (cityName) => {
    await dispatch(loadWeather(cityName));
    await dispatch(loadForecast(cityName));
    if (Object.keys(weather).length !== 0) setIsFetched(true);
  };

  useEffect(() => {
    //console.log(cities);
    if (cities.length !== 0) {
      fetchWeather(cities[0].city);
    }
  }, [cities]);

  useEffect(() => {
    //console.log(props.route.params);
    if (props.route.params !== undefined) {
     // console.log(props.route.params);
      setIsFetched(props.route.params.isFetched);
    }
  }, [props]);

  useEffect(() => {
    if (Object.keys(weather).length !== 0) {
      props.navigation.setOptions({ title: weather.city });
     // console.log(weather);
      setIsFetched(true);
    }
  }, [weather]);

  //console.log(isFetched);
  if (!isFetched) {
    return (
      <ImageBackgroundComponent
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <Text style={{ fontSize: 24 }}>Add cities!!!</Text>
      </ImageBackgroundComponent>
    );
  } else {
    return (
      <ImageBackgroundComponent>
        <Weather
          touchable="disabled"
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
          //fetchWeather={() => fetchWeatherCity(city)}
          fetchTime={weather.fetchTime}
        />
        <WeekForecast />
        <Footer
          fetchTime={weather.fetchTime}
          fetchWeather={() => fetchWeather(weather.city)}
        />
      </ImageBackgroundComponent>
    );
  }
};

export default WeatherForecastScreen;
/**


  useEffect(() => {
    const useLocation =
      props.route.params !== undefined ? props.route.params.useLocation : false;
    console.log(useLocation);
    if (useLocation) {
      setIsFetched(false);
      getLocation();
      console.log(location);
      if (location) {
        fetchWeather(location.lat, location.lon);
        if (weatherLength !== 0) {
          setLocation(null);
          props.navigation.setOptions({ useLocation: null });
        }
      }
    }
    return () => {
      setIsFetched(true);
      setDiplay(false);
    };
  }, [props.route.params, settings, weatherLength, location]);

  //(display);

 */

/*







  useEffect(() => {
    if (props.route.params.fetchType === "city" && !settings.firstLaunch) {
      (-1);
      fetchWeatherCity(props.route.params.city);
      if (weather.error === false) {
        dispatch(saveFirstLaunch(weather.city));
      }
    }
  }, [props]);

  useEffect(() => {
    if (props.route.params.fetchType === "city" && settings.firstLaunch) {
      (1);
      fetchWeatherCity(props.route.params.city);
      if (weather.error === false) {
        dispatch(saveFirstLaunch(weather.city));
      }
    }
  }, [props]);

  useEffect(() => {
    if (props.route.params.fetchType !== "city") {
      (2);
      fetchWeather(lat, lon);
      if (weather.error === false) {
        dispatch(saveFirstLaunch(weather.city));
      }
    }
  }, []);

  //(props.route.params.fetchType);

  useEffect(() => {
    if (props.route.params.fetchType == "city" && props.route.params.from == "start") {
      (3);
      //(props.route.params.city);
      fetchWeatherCity(props.route.params.city);
    }
  }, [props]);

**/
