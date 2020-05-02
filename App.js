import React, { useEffect } from "react";
import MainNavigator from "./navigation/MainNavigator";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { AppLoading } from "expo";
import { useFonts } from "@use-expo/font";
import { PersistGate } from "redux-persist/integration/react";
import { AsyncStorage } from "react-native";
//import AsyncStorage from "@react-native-community/async-storage";

export default function App() {
  let [fontsLoaded] = useFonts({
    "comic-neue": require("./assets/fonts/Comic_Neue/ComicNeue-Bold.ttf"),
  });
 // useEffect(() => console.log(AsyncStorage));
  const { store, persistor } = configureStore();

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <PersistGate loading={<AppLoading />} persistor={persistor}>
          <MainNavigator />
        </PersistGate>
      </Provider>
    );
  }
}
