export const ADD_CITY = 'ADD_CITY';
export const DELETE_CITY = 'DELETE_CITY';

export const addCity = (payload) => {
    return {
        data: payload,
        type: ADD_CITY
    }
}

export const deleteCity = (payload) => {
    return {
        data: payload,
        type: DELETE_CITY
    }
}