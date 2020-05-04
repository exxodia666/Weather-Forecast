import { BackHandler } from "react-native";
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

  //console.log(weather);
  const city = weather.city;

  const [location, setLocation] = useState(null);
  //  const [error, setError] = useState(null);

  const [display, setDiplay] = useState(false);
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    if (!weather.error) props.navigation.setOptions({ title: weather.city });
  }, [weather]);

  const fetchWeather = (lat, lon) => {
    console.log("LOCATION: ", lat, " ", lon);

    dispatch(geoLoadForecast(lat, lon));
    dispatch(geoLoadWeather(lat, lon));
    if (!weather.error && weather.error !== undefined) {
      setIsFetched(true);
      setDiplay(false);
    }
  };

  const fetchWeatherCity = (city) => {
    dispatch(loadForecast(city));
    dispatch(loadWeather(city));
    if (!weather.error && weather.error !== undefined) {
      // console.log("disp save");
      dispatch(saveFirstLaunch(weather.city));
      setIsFetched(true);
      setDiplay(false);
      // console.log(settings.city);
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
        if (!props.route.params.useLocation) setDiplay(true);
      });
  };

  //console.log(weather);

  const cityHandler = (city) => {
    //console.log(city);
    fetchWeatherCity(city);
    //  console.log("dispal");
    if (!weather.error && weather.error !== undefined) {
      //console.log("disp save");
      dispatch(saveFirstLaunch(weather.city));
    }
  };

  useEffect(() => {
    if (settings.firstLaunсh) {
      //console.log(settings.city);
      // console.log(settings.city);
      if (!settings.city) getLocation();
      if (location) {
        fetchWeather(location.lat, location.lon);
        //console.log(weather);
        if (!weather.error && weather.error !== undefined) {
          // console.log("disp save");
          dispatch(saveFirstLaunch(weather.city));
        }
      } else {
      }
    } else if (!settings.firstLaunсh) {
      //console.log("Fetching");
      fetchWeatherCity(settings.city);
      if (!weather.error && weather.error !== undefined) {
        // console.log(weather);
      }
    }
    return () => {
      setDiplay(false);
      setIsFetched(false);
      setLocation(null);
    };
  }, [weather, settings, location]);

  useEffect(() => {
    const useLocation =
      props.route.params !== undefined ? props.route.params.useLocation : false;
    console.log(useLocation);
    if (useLocation) {
      getLocation();
      if (location) {
        fetchWeather(location.lat, location.lon);
        setLocation(null);
      }
    }
    return () => {
      setIsFetched(true);
      setDiplay(false);
    };
  }, [props, settings, isFetched]);

  //console.log(display);

  if (display) {
    return <InputComponent icon="md-search" handler={cityHandler} />;
  }
  if (!isFetched) {
    return <Loader />;
  } else if (!weather.error && weather.error !== undefined) {
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
      console.log(-1);
      fetchWeatherCity(props.route.params.city);
      if (weather.error === false) {
        dispatch(saveFirstLaunch(weather.city));
      }
    }
  }, [props]);

  useEffect(() => {
    if (props.route.params.fetchType === "city" && settings.firstLaunch) {
      console.log(1);
      fetchWeatherCity(props.route.params.city);
      if (weather.error === false) {
        dispatch(saveFirstLaunch(weather.city));
      }
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
  }, []);

  //console.log(props.route.params.fetchType);

  useEffect(() => {
    if (props.route.params.fetchType == "city" && props.route.params.from == "start") {
      console.log(3);
      //console.log(props.route.params.city);
      fetchWeatherCity(props.route.params.city);
    }
  }, [props]);

**/
