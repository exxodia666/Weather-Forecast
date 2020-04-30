import { ADD_CITY, DELETE_CITY } from "../actions/city";

const initialState = [{ id: new Date(), city: "London" }];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CITY:
      console.log();
      if (state.find( city => city.city === action.data) === undefined) {
        const newArray = [];
        newArray.push({ id: new Date(), city: action.data });
        return [...state, ...newArray];
      } else return state;

    case DELETE_CITY:
      //console.log(action.data);
      const filteredArray = [...state];
      return filteredArray.filter((item) => item.city != action.data.city);
  }
  return state;
};
