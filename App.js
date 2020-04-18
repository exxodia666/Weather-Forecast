import React from "react";
import MainNavigator from "./navigation/MainNavigator";
/*
  //basic template
  //@react-navigation/native
  //@react-navigation/stack
  //reactotron-react-native
*/
//kek
//import Reactotron from "reactotron-react-native";
//import { AsyncStorage } from "react-native";
import { Provider } from "react-redux";
import Store from "./store/Store";
import { AppLoading } from "expo";
import { useFonts } from '@use-expo/font';
/*
Reactotron.setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .configure() // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!
*/
export default function App() {
  let [fontsLoaded] = useFonts({
    'comic-neue': require('./assets/fonts/ComicNeue-Bold.ttf'),
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
