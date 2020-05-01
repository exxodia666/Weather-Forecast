import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { addCity } from "../store/actions/city";
import ImageBackgroundComponent from "../components/ImageBackgroundComponent";
import InputComponent from "../components/InputComponent";

const AddNewCityScreen = (props) => {
  const dispatch = useDispatch();
  const addCityHandler = (city) => {
    dispatch(addCity(city));
    props.navigation.goBack();
  };
  return (
    <ImageBackgroundComponent style={styles.container}>
      <InputComponent icon="md-add" handler={addCityHandler} />
    </ImageBackgroundComponent>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});

export default AddNewCityScreen;
