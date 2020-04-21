import { SET_DAY_TIME } from "../actions/daytime";


const initialState = {};

export default (state = initialState, action) => {
    //console.log(action.data);
    switch (action.type) {
        case SET_DAY_TIME:
            //console.log(action.data);
            if (action.data >= 5 && action.data < 20) {
                return {
                    ...state,
                    time: true
                };
            } else {
                return {
                    ...state,
                    time: false,
                };
            }

    }
    return state;
};
