import * as Location from "expo-location";
const getLocation = async () => {
  const status = await (await Location.requestPermissionsAsync()).granted;
  //console.log(status);
  if (!status) {
    console.log("Deny");
    return false;
  } else if (status) {
    Location.getCurrentPositionAsync({})
      .then((res) => {
        return {
          lat: res.coords.latitude,
          lon: res.coords.longitude,
        };
      })
      .catch((err) => {
        console.log(err);
      });
    return true;
  }
};
export default getLocation;
/**
 * 
  if (status.granted) {
    const location = await Location.getCurrentPositionAsync({}).catch(() => {
      if (!settings.firstLaunсh) {
        props.navigation.navigate(routes.Weather, {
          fetchType: "city",
          city: settings.city,
        });
      } else if (settings.firstLaunсh) {
        setLocation(false);
        setErrorMsg("Permission to access location was denied");
      }
    });
    props.navigation.navigate(routes.Weather, {
      lat: location.coords.latitude,
      lon: location.coords.longitude,
    });
  }
 */
