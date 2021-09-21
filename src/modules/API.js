/* eslint-disable no-unused-vars */
const apiKey1 = '15e915c05d8b32748c4ed24fe9d6b1d9';
const apiKey2 = '4c57224bb5cb7c64e2e4ea1915b6115c';
const myAPI = apiKey1;

export default class API {
  /* Function to take a city string and fetch the current weather
  json data from openweathermap. */
  static async fetchWeather(cityStr, units) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityStr}&units=${units}&appid=${myAPI}`,
        { mode: 'cors' }
      );
      const data = await response.json();
      return data;
    } catch (err) {
      alert(err);
    }
  }

  /* Function to take the longitude and latitude to be obtained from fetchCurrentWeather(),
  the current unit of measurement, and fetch the hourly+daily forecast. */
  static async fetchForecast(longitude, latitude, units) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lon=${longitude}&lat=${latitude}&units=${units}&exclude=minutely&appid=${myAPI}`,
        { mode: 'cors' }
      );
      const data = await response.json();
      return data;
    } catch (err) {
      alert(err);
    }
  }

  /** Function to get both current and forecast data and return them together */
  static async getWeatherData(cityStr, units) {
    try {
      const current = await API.fetchWeather(cityStr, units);
      const forecast = await API.fetchForecast(
        current.coord.lon,
        current.coord.lat,
        units
      );
      const data = { cur: current, fore: forecast };
      return data;
    } catch (err) {
      // alert(err);
    }
  }

  static async setBackGround(str, card) {
    fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=Rc7ZQybsoilDSbWNPnRiHPq8nzIegm7f&s=${str}`,
      { mode: 'cors' }
    )
      .then((response) => response.json())
      .then((response) => {
        card.setAttribute(
          'style',
          `background-image: url(${response.data.images.original.url});`
        );
      })
      .catch(alert);
  }

  static handleErrors(response) {
    if (!response.ok) throw new Error(response.status);
    return response;
  }
}
