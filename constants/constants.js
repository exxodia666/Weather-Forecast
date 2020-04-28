export const apiKey = '9c05cf1a5571e27f680bf836b7881520';
export const url = (iconName) => `http://openweathermap.org/img/wn/${iconName}@2x.png`;


export const week = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Satur"];

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