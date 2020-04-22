var moment = require("moment");

const weatherSort = (weather) => {
  //console.log(moment("2020-04-25 21:00:00"));
  const checkArray = [];
  return weather.map((item1) => {
    //console.log(item1);
    if (checkArray.indexOf(item1) === -1) {
      checkArray.push(item1);
      // console.log(typeof(item1.date));
      return weather.filter((item) => {
        //console.log(item);
        if (new Date(moment(item1.date)).getDay() === new Date(moment(item.date)).getDay() && new Date(moment(item1.date)).getMonth() === new Date(moment(item.date)).getMonth()) {
          checkArray.push(item);
          /// console.log("LOOOOOOOOOOOOOOOOOOOOOOOOOL");
          return true;
        }
      });
    }
  })
    .filter((item) => {
      return item != undefined;
    })
    .map((item) => {
      const morning = [];
      const day = [];
      const night = [];
      item.forEach((item) => {
        if (
          new Date(moment(item.date)).getHours() <= 11 &&
          new Date(moment(item.date)).getHours() > 5
        ) {
          morning.push(item);
        } else if (
          new Date(moment(item.date)).getHours() >= 12 &&
          new Date(moment(item.date)).getHours() < 20
        ) {
          day.push(item);
        } else {
          night.push(item);
        }
      });
      //console.log(morning[0]);
      return {
        morning: morning,
        day: day,
        night: night,
      };
    })
    .map((item) => {
      // console.log(item.night[1]);
      const weather = {
        morning: {},
        day: {},
        night: {},
      };

      for (let key in item) {
        let temperature = 0;
        let icon;
        let date;
        item[key].forEach((element) => {
          temperature = temperature + new Number(element.temperature);
          icon = element.icon;
          date = element.date;
        });
        console.log(temperature);
        weather[key].temperature = (temperature / item[key].length).toFixed(0);
        weather[key].icon = icon;
        weather[key].date = date;
      }

      return { ...weather };
    });
};
export default weatherSort;
