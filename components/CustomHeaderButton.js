import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons, Feather } from "@expo/vector-icons";
import { Platform } from "react-native";
import React from "react";

const CustomHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={props.type === 'Feather' ? Feather : Ionicons}
      iconSize={20}
      color={Platform.OS === "android" ? "white" : "black "}
    />
  );
};
export default CustomHeaderButton;
