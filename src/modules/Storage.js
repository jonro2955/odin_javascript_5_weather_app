let storedCitiesArray = [];

export default class Storage {
  /* Function to store a city name string in localStorage */
  static push(name) {
    if (!localStorage.getItem('cities')) {
      localStorage.setItem('cities', '[]');
    }
    storedCitiesArray = JSON.parse(localStorage.getItem('cities'));
    storedCitiesArray.push(name);
    localStorage.clear();
    localStorage.setItem('cities', JSON.stringify(storedCitiesArray));
  }

  /* Function to remove a city name string in localStorage */
  static remove(cityName) {
    if (localStorage.getItem('cities')) {
      storedCitiesArray = JSON.parse(localStorage.getItem('cities'));
      storedCitiesArray.forEach((element, index) => {
        if (element.includes(cityName)) {
          storedCitiesArray.splice(index, 1);
        }
      });
      localStorage.clear();
      localStorage.setItem('cities', JSON.stringify(storedCitiesArray));
    }
  }

  /** Function to get the number of city entries in LS */
  static clear() {
    if (localStorage.getItem('cities')) {
      localStorage.setItem('cities', '[]');
    }
  }
}
