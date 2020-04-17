import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

import { Platform } from "react-native";
import React from "react";

const CustomHeaderButton = props => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={20}
      color={Platform.OS === "android" ? "white" : "red "}
    />
  );
};
export default CustomHeaderButton;
