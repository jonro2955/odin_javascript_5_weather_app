import './style.css';
import PlusIcon from './resources/plus-icon.png';
import City from './class/City.js';
import API from './modules/API.js';
import UI from './modules/UI.js';
import Storage from './modules/Storage.js';

let scale = 'metric';

// Insert webpack-imported png resource into the add button
const addBtn = document.querySelector('#addBtn');
const myIcon = new Image();
myIcon.src = PlusIcon;
myIcon.width = 25;
addBtn.append(myIcon);

// Listen for the city adder form submit event and add the input city
const addForm = document.querySelector('#addForm');
addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.querySelector('#addCityInput').value;
  if (!name) return;
  API.getWeatherData(name, scale).then((data) => {
    try {
      const city = new City(scale, data);
      if (city) {
        Storage.push(name);
        UI.insertCity(city);
      }
    } catch (er) {
      alert('Invalid City');
    }
  });
  document.querySelector('#addCityInput').value = '';
});

/* Startup: for each city name in memory, create and display each city */
function startup() {
  if (localStorage.getItem('cities')) {
    const storedCitiesArray = JSON.parse(localStorage.getItem('cities'));
    storedCitiesArray.forEach((name) => {
      API.getWeatherData(name, scale).then((data) => {
        const city = new City(scale, data);
        if (city) {
          UI.insertCity(city);
        }
      });
    });
  }
}

startup();

/** C/F Unit Toggler button */
const toggleUnitBtn = document.querySelector('#toggleUnitBtn');
toggleUnitBtn.addEventListener('click', () => {
  if (scale === 'metric') {
    scale = 'imperial';
  } else {
    scale = 'metric';
  }
  UI.clear();
  startup();
});

/** Delete All button */
const deleteAllBtn = document.querySelector('#deleteAllBtn');
deleteAllBtn.addEventListener('click', () => {
  Storage.clear();
  UI.clear();
});

/** refreshBtn button */
const refreshBtn = document.querySelector('#refreshBtn');
refreshBtn.addEventListener('click', () => {
  UI.clear();
  startup();
  // cosnole.log('I get called from print.js!');
});
