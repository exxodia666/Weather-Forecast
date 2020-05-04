import { BackHandler, Alert } from "react-native";
import Weather from "../components/Weather/Weather";
import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { loadWeather, geoLoadWeather } from "../store/actions/weather";
import WeekForecast from "../components/WeekForecast";
import { loadForecast, geoLoadForecast } from "../store/actions/forecast";
import ImageBackgroundComponent from "../components/ImageBackgroundComponent";
import Footer from "../components/Footer";
import { countTemp } from "../constants/constants";
import { saveFirstLaunch } from "../store/actions/settings";
import Loader from "../components/Loader";
import * as Location from "expo-location";
import routes from "../navigation/routes";
import InputComponent from "../components/InputComponent";

const WeatherForecastScreen = (props) => {
  const dispatch = useDispatch();

  const settings = useSelector((state) => state.settings);
  const weather = useSelector((state) => state.weather);
  const weatherLength = Object.keys(weather).length;
  const [location, setLocation] = useState(null);
  //  const [error, setError] = useState(null);

  const [display, setDiplay] = useState(false);
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    if (!weather.error) props.navigation.setOptions({ title: weather.city });
  }, [weather]);

  const fetchWeather = async (lat, lon) => {
    "LOCATION: ", lat, " ", lon;
    await dispatch(geoLoadForecast(lat, lon));
    await dispatch(geoLoadWeather(lat, lon));
    if (weatherLength) {
      setIsFetched(true);
      setDiplay(false);
      setLocation(null);
    }
  };

  const fetchWeatherCity = async (city) => {
    await dispatch(loadForecast(city));
    await dispatch(loadWeather(city));
    if (weatherLength !== 0 && true) {
      ("display");
      setIsFetched(true);
      setDiplay(false);
    }
    if (settings.firstLaunсh) {
      dispatch(saveFirstLaunch(weather.city));
    }
  };

  const getLocation = async () => {
    Location.getCurrentPositionAsync({})
      .then((res) => {
        console.log(res);
        setLocation({
          lat: res.coords.latitude,
          lon: res.coords.longitude,
        });
        console.log(location);
      })
      .catch((err) => {
        // Alert.alert('You shold allow geolocation!')
        const useLocation =
          props.route.params !== undefined
            ? props.route.params.useLocation
            : false;
        if (!useLocation) setDiplay(true);
      });
  };

  //(weather);

  const cityHandler = (city) => {
    fetchWeatherCity(city);
    if (weatherLength !== 0) {
      dispatch(saveFirstLaunch(weather.city));
    }
  };

  useEffect(() => {
    if (weatherLength == 0) {
      if (settings.firstLaunсh) {
        if (!settings.city) {
          getLocation();
          if (location) {
            fetchWeather(location.lat, location.lon);
            if (weatherLength !== 0) {
              dispatch(saveFirstLaunch(weather.city));
            }
          } else {
            //  Alert.alert("Error");
          }
        }
      } else if (!settings.firstLaunсh) {
        ("Fetching");
        fetchWeatherCity(settings.city);
        if (!weather.error && weather.error !== undefined) {
          // (weather);
        }
      }
    }
    return () => {
      setDiplay(false);
      setIsFetched(false);
      setLocation(null);
    };
  }, [location, weatherLength]);

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

  if (display) {
    return <InputComponent icon="md-search" handler={cityHandler} />;
  }
  if (weatherLength == 0) {
    return <Loader />;
  } else if (weatherLength !== 0) {
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
