
import { SAVE_SETTINGS, RESTORE_DEFAULT } from "../actions/settings";
import units from "../../constants/units";

const initialState = {
    geolocation: false,
    unit: units.Celsius,
    temperatureUnits: {
        [units.Celsius]: true,
        [units.Farenheit]: false,
        [units.Kelvin]: false,
    }
};
const defaultSettings = {
    geolocation: false,
    unit: units.Celsius,
    temperatureUnits: {
        [units.Celsius]: true,
        [units.Farenheit]: false,
        [units.Kelvin]: false,
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SAVE_SETTINGS:
            const tempUnit = (action.data.celsius) ? units.Celsius : (action.data.farenheit) ? units.Farenheit: units.Kelvin;
            return {
                ...state,
                geolocation: action.data.geolocation,
                unit: tempUnit,
                temperatureUnits: {
                    [units.Celsius]: action.data.celsius,
                    [units.Farenheit]: action.data.farenheit,
                    [units.Kelvin]: action.data.kelvin,
                }
            };
        case RESTORE_DEFAULT:
            return {
                ...state,
                defaultSettings
            };
    }
    return state;
};
