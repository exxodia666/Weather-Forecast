import { ADD_CITY, DELETE_CITY } from "../actions/city";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CITY:
      if (state.find(city => city.city === action.data) === undefined) {
        const newArray = [];
        newArray.push({ id: new Date(), city: action.data });
        return [...state, ...newArray];
      } else return state;

    case DELETE_CITY:
      const filteredArray = [...state];
      return filteredArray.filter((item) => item.city != action.data);
  }
  return state;
};
