import React from "react";
import { ImageBackground } from "react-native";
import { StyleSheet, Dimensions } from "react-native";
import { useSelector } from "react-redux";

const ImageBackgroundComponent = (props) => {
  const daytime = useSelector((state) => state.daytime.time);
  const image = daytime
    ? require("../assets/day.png")
    : require("../assets/night.png");
  return (
    <ImageBackground source={image} style={{ ...styles.image, ...props.style }}>
      {props.children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default ImageBackgroundComponent;
