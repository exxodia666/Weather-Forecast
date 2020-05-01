import React from "react";
import MainNavigator from "./navigation/MainNavigator";
import { Provider } from "react-redux";
import Store from "./store/Store";
import { AppLoading } from "expo";
import { useFonts } from '@use-expo/font';

export default function App() {
  
  let [fontsLoaded] = useFonts({
    'comic-neue': require('./assets/fonts/Comic_Neue/ComicNeue-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={Store}>
        <MainNavigator />
      </Provider>
    );
  }
}
