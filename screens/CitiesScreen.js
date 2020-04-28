import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";

const CitiesScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Cities</Text>
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
export default CitiesScreen;
