import { LOAD_FORECAST } from "../actions/forecast";
import weather from "./weather";

const initialState = {
    weather: []
};

const obj = {
    date: new Date(),
    weekDay: 'a',
    temperature: 12,
    icon: '12b',
    time: 12
};
export default (state = initialState, action) => {
    //console.log(action.data);
    switch (action.type) {
        case LOAD_FORECAST:
            console.log('Foreca');

            const weatherArray = action.data.list.map((i) => {
                return {
                    date: i.dt_txt,
                    temperature: i.main.temp,
                    icon: i.weather[0].icon,
                    time: action.time
                }

            });
           // console.log(weatherArray);
            return {
                ...state,
                weather: weatherArray,
            };
    }
    return state;
};
