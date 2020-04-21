'use strict'
const weatherSort = (weather) => {
    const checkArray = []
    return weather.map((item1) => {
        if (checkArray.indexOf(item1) === -1) {
            checkArray.push(item1);
            return weather.filter((item) => {
                if (new Date(item1.date).getDay() === new Date(item.date).getDay() && new Date(item1.date).getMonth() === new Date(item.date).getMonth()) {
                    checkArray.push(item);
                    return true;
                }
            });
        }
    }).filter((item) => {
        return item != undefined;
    }).map((item) => {

        const morning = [];
        const day = [];
        const night = [];
        item.forEach((item) => {
            if (new Date(item.date).getHours() <= 11 && new Date(item.date).getHours() > 5) {
                morning.push(item);
            }
            else if (new Date(item.date).getHours() >= 12 && (new Date(item.date).getHours() < 20)) {
                day.push(item);
            } else {
                night.push(item);
            }
        });
        return {
            morning: morning,
            day: day,
            night: night,
        }
    }).map((item) => {

        console.log(item);
        
        const weather = {
            morning: {},
            day: {},
            night: {},
        }
        
        for (let key in item) {
            console.log(key);
            let temperature = 0;
            let icon;
            let date;
            item[key].forEach((element) => {
                //console.log(element.icon + element.temperature);
                temperature = temperature + element.temperature;
                icon = element.icon;
                date = element.date;
            });
            weather[key].temperature = (temperature / item[key].length).toFixed(2);
            weather[key].icon = icon;
            weather[key].date = date;
        }
        return { ...weather }
    });
}
export default weatherSort;