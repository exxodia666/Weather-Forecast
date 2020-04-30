import { LOAD_FORECAST } from "../actions/forecast";

const initialState = {
    weather: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_FORECAST:
            const weatherArray = action.data.list.map((i) => {
                return {
                    date: i.dt_txt,
                    temperature: (i.main.temp - 273.15).toFixed(0),
                    icon: i.weather[0].icon,
                    time: action.time
                }

            });
            return {
                ...state,
                weather: weatherArray,
            };
    }
    return state;
};
