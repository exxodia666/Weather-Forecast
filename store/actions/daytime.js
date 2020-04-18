export const SET_DAY_TIME = 'SET_DAY_TIME';

export const setDayTime = () => {
    return {
        data: new Date().getHours(),
        type: SET_DAY_TIME
    }
}