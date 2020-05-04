import React from "react";
import { ActivityIndicator } from "react-native";
import ImageBackgroundComponent from "../components/ImageBackgroundComponent";

const Loader = () => {
  return (
    <ImageBackgroundComponent
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <ActivityIndicator />
    </ImageBackgroundComponent>
  );
};

export default Loader;
