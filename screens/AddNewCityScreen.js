import React, { useState } from "react";
import { Text, StyleSheet, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { Feather } from "@expo/vector-icons";
import { addCity } from "../store/actions/city";
import ImageBackgroundComponent from "../components/ImageBackgroundComponent";
import InputComponent from "../components/InputComponent";
import * as Location from "expo-location";
import Loader from "../components/Loader";
import { geoLoadWeather } from "../store/actions/weather";
import Axios from "axios";
import { cityReqUrl, geoReqUrl } from "../constants/constants";

const AddNewCityScreen = (props) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState(null);
  const weather = useSelector((state) => state.weather.city);

  const getLocation = () => {
    //console.log("use location");
    Location.getCurrentPositionAsync({}).then((res) => {
      console.log(res);
      return Axios.get(geoReqUrl(res.coords.latitude, res.coords.longitude))
        .then((response) => {
          console.log(response.data.name);
          addCityHandler(response.data.name);
        })
        .catch((error) => {});
    });
  };

  const useLocation = () => {
    setLoading(true);
    getLocation();
  };

  const fetchWeather = async (lat, lon) => {
    // console.log(lat, " ", lon);
    await dispatch(geoLoadWeather(lat, lon));
  };

  const addCityHandler = (city) => {
    dispatch(addCity(city));
    props.navigation.goBack();
  };

  if (loading) {
    return <Loader />;
  } else if (!loading) {
    return (
      <ImageBackgroundComponent style={styles.container}>
        <InputComponent icon="md-add" handler={addCityHandler} />

        <TouchableOpacity
          onPress={() => {
            useLocation();
          }}
          style={styles.inputContainer}
        >
          <Text style={styles.text}>Use Geolocation</Text>

          <Feather name="map-pin" size={40} />
        </TouchableOpacity>
      </ImageBackgroundComponent>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    margin: 10,
    fontSize: 23,
    fontFamily: "comic-neue",
  },
  inputContainer: {
    backgroundColor: "white",
    marginTop: 40,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width * 0.8,
    //height: Dimensions.get("window").height * 0.5,
    borderRadius: 5,
    overflow: "hidden",
    elevation: 5,
  },
});

export default AddNewCityScreen;
