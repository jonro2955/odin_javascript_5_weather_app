export default class City {
  constructor(scale, data) {
    this.name = data.cur.name;
    this.location = `${data.cur.name}, ${data.cur.sys.country}`;
    this.scale = scale === 'imperial' ? '&deg;F' : '&deg;C';
    this.condition = data.cur.weather[0].description.toUpperCase();
    this.main = data.cur.weather[0].main;
    this.temp = data.cur.main.temp + this.scale;
    this.rain = `Rain: ${data.cur.rain ? data.cur.rain['1h'] : 0} mm/h`;
    this.wind = `Wind: ${data.cur.wind.speed} km/h`;
    this.hourly5 = this.getHourlys(data.fore);
    this.daily5 = this.getDailys(data.fore);
  }

  getHourlys(fore) {
    const arr = [];
    for (let i = 1; i <= 3; i++) {
      const hourFC = fore.hourly[i * 2];
      const date = new Date(hourFC.dt * 1000);
      let hour = date.getHours();
      const ampm = hour >= 12 ? 'pm' : 'am';
      hour = hour % 12 || 12;
      const cond = hourFC.weather[0].main;
      const rain = hourFC.rain ? `(${hourFC.rain['1h']}mm/h)` : '';
      const { temp } = hourFC;
      const entry = `${hour + ampm}: ${cond}${rain}, ${temp}${this.scale}`;
      arr.push(entry);
    }
    return arr;
  }

  getDailys(fore) {
    const arr = [];
    const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    for (let i = 1; i <= 3; i++) {
      const dayFC = fore.daily[i];
      const time = new Date(dayFC.dt * 1000);
      const day = week[time.getDay()];
      const cond = dayFC.weather[0].main;
      const rain = dayFC.rain ? `(${dayFC.rain}mm)` : '';
      const lowTemp = dayFC.temp.min;
      const highTemp = dayFC.temp.max;
      const entry = `${day}: ${cond}${rain}, ${lowTemp}${this.scale}/${highTemp}${this.scale} (L/H)`;
      arr.push(entry);
    }
    return arr;
  }
}
