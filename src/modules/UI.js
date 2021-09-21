import Storage from './Storage.js';
import API from './API.js';

const cardEntry = document.querySelector('#cardEntry');

export default class UI {
  static clear() {
    while (document.querySelector('#cardEntry').firstChild) {
      document.querySelector('#cardEntry').firstChild.remove();
    }
  }

  static insertCity(city) {
    // card container
    const card = document.createElement('div');
    card.setAttribute('class', 'card');
    cardEntry.prepend(card);

    // set card Background
    API.setBackGround(city.condition, card);

    // location
    const location = document.createElement('div');
    location.setAttribute('class', 'location');
    location.innerHTML = city.location;
    card.append(location);

    // temperature
    const temperature = document.createElement('div');
    temperature.setAttribute('class', 'temperature');
    const string = city.temp;
    temperature.innerHTML = string;
    card.append(temperature);

    // condition
    const condition = document.createElement('div');
    condition.setAttribute('class', 'condition');
    condition.innerHTML = city.condition;
    card.append(condition);

    // rain
    const rain = document.createElement('div');
    rain.setAttribute('class', 'rain');
    rain.innerHTML = city.rain;
    card.append(rain);

    // wind
    const wind = document.createElement('div');
    wind.setAttribute('class', 'wind');
    wind.innerHTML = city.wind;
    card.append(wind);

    // hourly forecasts
    const hourlyFCs = document.createElement('div');
    hourlyFCs.setAttribute('class', 'hourly');
    city.hourly5.forEach((item) => {
      const div = document.createElement('div');
      div.innerHTML = item;
      hourlyFCs.append(div);
    });
    card.append(hourlyFCs);

    // daily forecasts
    const dailyFCs = document.createElement('div');
    dailyFCs.setAttribute('class', 'daily');
    city.daily5.forEach((item) => {
      const div = document.createElement('div');
      div.innerHTML = item;
      dailyFCs.append(div);
    });
    card.append(dailyFCs);

    // card number setup
    const cardList = document.querySelectorAll('.card');
    const idNum = cardList.length - 1;
    card.setAttribute('data-num', idNum);

    // delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'Delete';
    card.append(deleteBtn);
    deleteBtn.addEventListener('click', () => {
      const cityName = city.name.toLowerCase();
      Storage.remove(cityName);
      card.remove();
    });
  }
}
