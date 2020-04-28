import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const AddNewCityScreen = () => {
  return (
    <View style={styles.container}>
      <Text>
          Add new city
      </Text>
      <TextInput 
        placeholder='Enter city'
      />
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
