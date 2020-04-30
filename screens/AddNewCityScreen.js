import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { addCity } from "../store/actions/city";

const AddNewCityScreen = props => {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();

  const addCityHandler = city => {
    dispatch(addCity(city))
    props.navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <Text>
        Coming Soon...
      </Text>
      <TextInput
        onChangeText={(city)=>setCity(city)}
        placeholder='Enter city'
      />
      <Button onPress={() => addCityHandler(city)} title='Add'/>
      {/*
      <TouchableOpacity>
        <Ionicons name='md-add-circle' size={40} />
      </TouchableOpacity>
      */}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AddNewCityScreen;
