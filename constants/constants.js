import units from "./units";

export const apiKey = "9c05cf1a5571e27f680bf836b7881520";
export const url = (iconName) =>
  `http://openweathermap.org/img/wn/${iconName}@2x.png`;
const key = "44c682133431d2307217999c8c120d54";

export const cityReqUrl = (city) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
export const geoReqUrl = (lat, lon) =>
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;

export const cityForecastReqUrl = (city) =>
  `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}`;
export const geoForecastReqUrl = (lat, lon) =>
  `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}`;

export const week = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Satur"];

export const countTemp = (settings, temperature) => {
  const temp = settings[units.Celsius]
    ? (temperature - 273.15).toFixed(0)
    : settings[units.Farenheit]
    ? ((temperature - 273.15) * 1.8 + 32).toFixed(0)
    : temperature;
  return temp;
};

export const regEx = /^[a-zA-Z]+(?:[s-][a-zA-Z]+)*$/;

export const createWeekDaysArray = (day) => {
  const firstDay = day;
  const data = [];
  while (day <= 6) {
    data.push(day);
    day++;
  }
  day = 0;
  while (day < firstDay) {
    data.push(day);
    day++;
  }
  return data;
};
