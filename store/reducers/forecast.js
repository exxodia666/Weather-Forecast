import { LOAD_FORECAST, ERROR_FORECAST } from "../actions/forecast";

const initialState = {
  weather: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ERROR_FORECAST:
      return {
        ...state,
        error: true,
        errorMessage: action.error,
      };

    case LOAD_FORECAST:
      const weatherArray = action.data.list.map((i) => {
        return {
          date: i.dt_txt,
          temperature: i.main.temp.toFixed(0),
          icon: i.weather[0].icon,
          time: action.time,
        };
      });
      return {
        ...state,
        weather: weatherArray,
        time: action.time,
        error: false,
      };
  }
  return state;
};
