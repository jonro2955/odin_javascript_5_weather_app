/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/API.js":
/*!****************************!*\
  !*** ./src/modules/API.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ API)
/* harmony export */ });
/* eslint-disable no-unused-vars */
const apiKey1 = '15e915c05d8b32748c4ed24fe9d6b1d9';
const apiKey2 = '4c57224bb5cb7c64e2e4ea1915b6115c';
const myAPI = apiKey1;

class API {
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


/***/ }),

/***/ "./src/modules/Storage.js":
/*!********************************!*\
  !*** ./src/modules/Storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Storage)
/* harmony export */ });
let storedCitiesArray = [];

class Storage {
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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _Storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Storage.js */ "./src/modules/Storage.js");
/* harmony import */ var _API_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./API.js */ "./src/modules/API.js");



const cardEntry = document.querySelector('#cardEntry');

class UI {
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
    _API_js__WEBPACK_IMPORTED_MODULE_1__.default.setBackGround(city.condition, card);

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
      _Storage_js__WEBPACK_IMPORTED_MODULE_0__.default.remove(cityName);
      card.remove();
    });
  }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVUkuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELFFBQVEsU0FBUyxNQUFNLFNBQVMsTUFBTTtBQUNuRyxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQStELFVBQVUsT0FBTyxTQUFTLFNBQVMsTUFBTSwwQkFBMEIsTUFBTTtBQUN4SSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0RkFBNEYsSUFBSTtBQUNoRyxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxrQ0FBa0MsRUFBRTtBQUN2RTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3ZFQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNsQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNObUM7QUFDUjs7QUFFM0I7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLDBEQUFpQjs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSx1REFBYztBQUNwQjtBQUNBLEtBQUs7QUFDTDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbl9qYXZhc2NyaXB0XzVfd2VhdGhlcl9hcHAvLi9zcmMvbW9kdWxlcy9BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbl9qYXZhc2NyaXB0XzVfd2VhdGhlcl9hcHAvLi9zcmMvbW9kdWxlcy9TdG9yYWdlLmpzIiwid2VicGFjazovL29kaW5famF2YXNjcmlwdF81X3dlYXRoZXJfYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW5famF2YXNjcmlwdF81X3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluX2phdmFzY3JpcHRfNV93ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW5famF2YXNjcmlwdF81X3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbl9qYXZhc2NyaXB0XzVfd2VhdGhlcl9hcHAvLi9zcmMvbW9kdWxlcy9VSS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuY29uc3QgYXBpS2V5MSA9ICcxNWU5MTVjMDVkOGIzMjc0OGM0ZWQyNGZlOWQ2YjFkOSc7XG5jb25zdCBhcGlLZXkyID0gJzRjNTcyMjRiYjVjYjdjNjRlMmU0ZWExOTE1YjYxMTVjJztcbmNvbnN0IG15QVBJID0gYXBpS2V5MTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQVBJIHtcbiAgLyogRnVuY3Rpb24gdG8gdGFrZSBhIGNpdHkgc3RyaW5nIGFuZCBmZXRjaCB0aGUgY3VycmVudCB3ZWF0aGVyXG4gIGpzb24gZGF0YSBmcm9tIG9wZW53ZWF0aGVybWFwLiAqL1xuICBzdGF0aWMgYXN5bmMgZmV0Y2hXZWF0aGVyKGNpdHlTdHIsIHVuaXRzKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eVN0cn0mdW5pdHM9JHt1bml0c30mYXBwaWQ9JHtteUFQSX1gLFxuICAgICAgICB7IG1vZGU6ICdjb3JzJyB9XG4gICAgICApO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgYWxlcnQoZXJyKTtcbiAgICB9XG4gIH1cblxuICAvKiBGdW5jdGlvbiB0byB0YWtlIHRoZSBsb25naXR1ZGUgYW5kIGxhdGl0dWRlIHRvIGJlIG9idGFpbmVkIGZyb20gZmV0Y2hDdXJyZW50V2VhdGhlcigpLFxuICB0aGUgY3VycmVudCB1bml0IG9mIG1lYXN1cmVtZW50LCBhbmQgZmV0Y2ggdGhlIGhvdXJseStkYWlseSBmb3JlY2FzdC4gKi9cbiAgc3RhdGljIGFzeW5jIGZldGNoRm9yZWNhc3QobG9uZ2l0dWRlLCBsYXRpdHVkZSwgdW5pdHMpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9vbmVjYWxsP2xvbj0ke2xvbmdpdHVkZX0mbGF0PSR7bGF0aXR1ZGV9JnVuaXRzPSR7dW5pdHN9JmV4Y2x1ZGU9bWludXRlbHkmYXBwaWQ9JHtteUFQSX1gLFxuICAgICAgICB7IG1vZGU6ICdjb3JzJyB9XG4gICAgICApO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgYWxlcnQoZXJyKTtcbiAgICB9XG4gIH1cblxuICAvKiogRnVuY3Rpb24gdG8gZ2V0IGJvdGggY3VycmVudCBhbmQgZm9yZWNhc3QgZGF0YSBhbmQgcmV0dXJuIHRoZW0gdG9nZXRoZXIgKi9cbiAgc3RhdGljIGFzeW5jIGdldFdlYXRoZXJEYXRhKGNpdHlTdHIsIHVuaXRzKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSBhd2FpdCBBUEkuZmV0Y2hXZWF0aGVyKGNpdHlTdHIsIHVuaXRzKTtcbiAgICAgIGNvbnN0IGZvcmVjYXN0ID0gYXdhaXQgQVBJLmZldGNoRm9yZWNhc3QoXG4gICAgICAgIGN1cnJlbnQuY29vcmQubG9uLFxuICAgICAgICBjdXJyZW50LmNvb3JkLmxhdCxcbiAgICAgICAgdW5pdHNcbiAgICAgICk7XG4gICAgICBjb25zdCBkYXRhID0geyBjdXI6IGN1cnJlbnQsIGZvcmU6IGZvcmVjYXN0IH07XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIGFsZXJ0KGVycik7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGFzeW5jIHNldEJhY2tHcm91bmQoc3RyLCBjYXJkKSB7XG4gICAgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkuZ2lwaHkuY29tL3YxL2dpZnMvdHJhbnNsYXRlP2FwaV9rZXk9UmM3WlF5YnNvaWxEU2JXTlBuUmlIUHE4bnpJZWdtN2Ymcz0ke3N0cn1gLFxuICAgICAgeyBtb2RlOiAnY29ycycgfVxuICAgIClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNhcmQuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICdzdHlsZScsXG4gICAgICAgICAgYGJhY2tncm91bmQtaW1hZ2U6IHVybCgke3Jlc3BvbnNlLmRhdGEuaW1hZ2VzLm9yaWdpbmFsLnVybH0pO2BcbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goYWxlcnQpO1xuICB9XG5cbiAgc3RhdGljIGhhbmRsZUVycm9ycyhyZXNwb25zZSkge1xuICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXMpO1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxufVxuIiwibGV0IHN0b3JlZENpdGllc0FycmF5ID0gW107XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JhZ2Uge1xuICAvKiBGdW5jdGlvbiB0byBzdG9yZSBhIGNpdHkgbmFtZSBzdHJpbmcgaW4gbG9jYWxTdG9yYWdlICovXG4gIHN0YXRpYyBwdXNoKG5hbWUpIHtcbiAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjaXRpZXMnKSkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NpdGllcycsICdbXScpO1xuICAgIH1cbiAgICBzdG9yZWRDaXRpZXNBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NpdGllcycpKTtcbiAgICBzdG9yZWRDaXRpZXNBcnJheS5wdXNoKG5hbWUpO1xuICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjaXRpZXMnLCBKU09OLnN0cmluZ2lmeShzdG9yZWRDaXRpZXNBcnJheSkpO1xuICB9XG5cbiAgLyogRnVuY3Rpb24gdG8gcmVtb3ZlIGEgY2l0eSBuYW1lIHN0cmluZyBpbiBsb2NhbFN0b3JhZ2UgKi9cbiAgc3RhdGljIHJlbW92ZShjaXR5TmFtZSkge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2l0aWVzJykpIHtcbiAgICAgIHN0b3JlZENpdGllc0FycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2l0aWVzJykpO1xuICAgICAgc3RvcmVkQ2l0aWVzQXJyYXkuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGVsZW1lbnQuaW5jbHVkZXMoY2l0eU5hbWUpKSB7XG4gICAgICAgICAgc3RvcmVkQ2l0aWVzQXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjaXRpZXMnLCBKU09OLnN0cmluZ2lmeShzdG9yZWRDaXRpZXNBcnJheSkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBGdW5jdGlvbiB0byBnZXQgdGhlIG51bWJlciBvZiBjaXR5IGVudHJpZXMgaW4gTFMgKi9cbiAgc3RhdGljIGNsZWFyKCkge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2l0aWVzJykpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjaXRpZXMnLCAnW10nKTtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi9TdG9yYWdlLmpzJztcbmltcG9ydCBBUEkgZnJvbSAnLi9BUEkuanMnO1xuXG5jb25zdCBjYXJkRW50cnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FyZEVudHJ5Jyk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJIHtcbiAgc3RhdGljIGNsZWFyKCkge1xuICAgIHdoaWxlIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FyZEVudHJ5JykuZmlyc3RDaGlsZCkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhcmRFbnRyeScpLmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGluc2VydENpdHkoY2l0eSkge1xuICAgIC8vIGNhcmQgY29udGFpbmVyXG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkJyk7XG4gICAgY2FyZEVudHJ5LnByZXBlbmQoY2FyZCk7XG5cbiAgICAvLyBzZXQgY2FyZCBCYWNrZ3JvdW5kXG4gICAgQVBJLnNldEJhY2tHcm91bmQoY2l0eS5jb25kaXRpb24sIGNhcmQpO1xuXG4gICAgLy8gbG9jYXRpb25cbiAgICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxvY2F0aW9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbG9jYXRpb24nKTtcbiAgICBsb2NhdGlvbi5pbm5lckhUTUwgPSBjaXR5LmxvY2F0aW9uO1xuICAgIGNhcmQuYXBwZW5kKGxvY2F0aW9uKTtcblxuICAgIC8vIHRlbXBlcmF0dXJlXG4gICAgY29uc3QgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0ZW1wZXJhdHVyZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RlbXBlcmF0dXJlJyk7XG4gICAgY29uc3Qgc3RyaW5nID0gY2l0eS50ZW1wO1xuICAgIHRlbXBlcmF0dXJlLmlubmVySFRNTCA9IHN0cmluZztcbiAgICBjYXJkLmFwcGVuZCh0ZW1wZXJhdHVyZSk7XG5cbiAgICAvLyBjb25kaXRpb25cbiAgICBjb25zdCBjb25kaXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25kaXRpb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb25kaXRpb24nKTtcbiAgICBjb25kaXRpb24uaW5uZXJIVE1MID0gY2l0eS5jb25kaXRpb247XG4gICAgY2FyZC5hcHBlbmQoY29uZGl0aW9uKTtcblxuICAgIC8vIHJhaW5cbiAgICBjb25zdCByYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmFpbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3JhaW4nKTtcbiAgICByYWluLmlubmVySFRNTCA9IGNpdHkucmFpbjtcbiAgICBjYXJkLmFwcGVuZChyYWluKTtcblxuICAgIC8vIHdpbmRcbiAgICBjb25zdCB3aW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd2luZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3dpbmQnKTtcbiAgICB3aW5kLmlubmVySFRNTCA9IGNpdHkud2luZDtcbiAgICBjYXJkLmFwcGVuZCh3aW5kKTtcblxuICAgIC8vIGhvdXJseSBmb3JlY2FzdHNcbiAgICBjb25zdCBob3VybHlGQ3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob3VybHlGQ3Muc2V0QXR0cmlidXRlKCdjbGFzcycsICdob3VybHknKTtcbiAgICBjaXR5LmhvdXJseTUuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkaXYuaW5uZXJIVE1MID0gaXRlbTtcbiAgICAgIGhvdXJseUZDcy5hcHBlbmQoZGl2KTtcbiAgICB9KTtcbiAgICBjYXJkLmFwcGVuZChob3VybHlGQ3MpO1xuXG4gICAgLy8gZGFpbHkgZm9yZWNhc3RzXG4gICAgY29uc3QgZGFpbHlGQ3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkYWlseUZDcy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RhaWx5Jyk7XG4gICAgY2l0eS5kYWlseTUuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkaXYuaW5uZXJIVE1MID0gaXRlbTtcbiAgICAgIGRhaWx5RkNzLmFwcGVuZChkaXYpO1xuICAgIH0pO1xuICAgIGNhcmQuYXBwZW5kKGRhaWx5RkNzKTtcblxuICAgIC8vIGNhcmQgbnVtYmVyIHNldHVwXG4gICAgY29uc3QgY2FyZExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZCcpO1xuICAgIGNvbnN0IGlkTnVtID0gY2FyZExpc3QubGVuZ3RoIC0gMTtcbiAgICBjYXJkLnNldEF0dHJpYnV0ZSgnZGF0YS1udW0nLCBpZE51bSk7XG5cbiAgICAvLyBkZWxldGUgYnV0dG9uXG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZGVsZXRlQnRuLmlubmVySFRNTCA9ICdEZWxldGUnO1xuICAgIGNhcmQuYXBwZW5kKGRlbGV0ZUJ0bik7XG4gICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgY2l0eU5hbWUgPSBjaXR5Lm5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgIFN0b3JhZ2UucmVtb3ZlKGNpdHlOYW1lKTtcbiAgICAgIGNhcmQucmVtb3ZlKCk7XG4gICAgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==