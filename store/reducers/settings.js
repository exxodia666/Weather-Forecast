import {
  SAVE_SETTINGS,
  RESTORE_DEFAULT,
  SAVE_FIRST_LAUNCH,
} from "../actions/settings";
import units from "../../constants/units";

const initialState = {
  firstLaunсh: true,
  city: "",
  unit: units.Celsius,
  temperatureUnits: {
    [units.Celsius]: true,
    [units.Farenheit]: false,
    [units.Kelvin]: false,
  },
};
const defaultSettings = {
  firstLaunсh: true,
  city: "",
  unit: units.Celsius,
  temperatureUnits: {
    [units.Celsius]: true,
    [units.Farenheit]: false,
    [units.Kelvin]: false,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_FIRST_LAUNCH:
      //console.log("reduce");
      return {
        ...state,
        firstLaunсh: false,
        city: action.data,
      };

    case SAVE_SETTINGS:
      const tempUnit = action.data.celsius
        ? units.Celsius
        : action.data.farenheit
        ? units.Farenheit
        : units.Kelvin;
      return {
        ...state,
        unit: tempUnit,
        temperatureUnits: {
          [units.Celsius]: action.data.celsius,
          [units.Farenheit]: action.data.farenheit,
          [units.Kelvin]: action.data.kelvin,
        },
      };
    case RESTORE_DEFAULT:
      return {
        ...defaultSettings,
      };
  }
  return state;
};
