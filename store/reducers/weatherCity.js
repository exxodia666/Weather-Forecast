import { LOAD_WEATHER_CITY } from "../actions/weatherCity";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_WEATHER_CITY:
      const newArray = [...state];
      if (state.find((city) => city.city === action.data.city) === undefined) {
        const weatherCity = {
          city: action.data.name,
          clouds: action.data.clouds.all,
          description: action.data.weather[0].description,
          icon: action.data.weather[0].icon,
          temperature: action.data.main.temp,
          feels_like: action.data.main.feels_like,
          humidity: action.data.main.humidity,
          pressure: action.data.main.pressure,
          rain: action.data.rain,
          snow: action.data.snow,
          wind: action.data.wind.speed,
          fetchTime: action.time,
        };
        newArray.push(weatherCity);
        return newArray;
      }
      return state;
  }
  return state;
};
