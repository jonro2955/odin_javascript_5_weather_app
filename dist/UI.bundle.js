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

    // time
    const time = document.createElement('div');
    time.setAttribute('class', 'time');
    time.innerHTML = city.time;
    card.append(time);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVUkuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELFFBQVEsU0FBUyxNQUFNLFNBQVMsTUFBTTtBQUNuRyxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQStELFVBQVUsT0FBTyxTQUFTLFNBQVMsTUFBTSwwQkFBMEIsTUFBTTtBQUN4SSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0RkFBNEYsSUFBSTtBQUNoRyxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxrQ0FBa0MsRUFBRTtBQUN2RTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3ZFQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNsQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNObUM7QUFDUjs7QUFFM0I7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLDBEQUFpQjs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHVEQUFjO0FBQ3BCO0FBQ0EsS0FBSztBQUNMO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluX2phdmFzY3JpcHRfNV93ZWF0aGVyX2FwcC8uL3NyYy9tb2R1bGVzL0FQSS5qcyIsIndlYnBhY2s6Ly9vZGluX2phdmFzY3JpcHRfNV93ZWF0aGVyX2FwcC8uL3NyYy9tb2R1bGVzL1N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbl9qYXZhc2NyaXB0XzVfd2VhdGhlcl9hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbl9qYXZhc2NyaXB0XzVfd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW5famF2YXNjcmlwdF81X3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbl9qYXZhc2NyaXB0XzVfd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluX2phdmFzY3JpcHRfNV93ZWF0aGVyX2FwcC8uL3NyYy9tb2R1bGVzL1VJLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5jb25zdCBhcGlLZXkxID0gJzE1ZTkxNWMwNWQ4YjMyNzQ4YzRlZDI0ZmU5ZDZiMWQ5JztcbmNvbnN0IGFwaUtleTIgPSAnNGM1NzIyNGJiNWNiN2M2NGUyZTRlYTE5MTViNjExNWMnO1xuY29uc3QgbXlBUEkgPSBhcGlLZXkxO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBUEkge1xuICAvKiBGdW5jdGlvbiB0byB0YWtlIGEgY2l0eSBzdHJpbmcgYW5kIGZldGNoIHRoZSBjdXJyZW50IHdlYXRoZXJcbiAganNvbiBkYXRhIGZyb20gb3BlbndlYXRoZXJtYXAuICovXG4gIHN0YXRpYyBhc3luYyBmZXRjaFdlYXRoZXIoY2l0eVN0ciwgdW5pdHMpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5U3RyfSZ1bml0cz0ke3VuaXRzfSZhcHBpZD0ke215QVBJfWAsXG4gICAgICAgIHsgbW9kZTogJ2NvcnMnIH1cbiAgICAgICk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBhbGVydChlcnIpO1xuICAgIH1cbiAgfVxuXG4gIC8qIEZ1bmN0aW9uIHRvIHRha2UgdGhlIGxvbmdpdHVkZSBhbmQgbGF0aXR1ZGUgdG8gYmUgb2J0YWluZWQgZnJvbSBmZXRjaEN1cnJlbnRXZWF0aGVyKCksXG4gIHRoZSBjdXJyZW50IHVuaXQgb2YgbWVhc3VyZW1lbnQsIGFuZCBmZXRjaCB0aGUgaG91cmx5K2RhaWx5IGZvcmVjYXN0LiAqL1xuICBzdGF0aWMgYXN5bmMgZmV0Y2hGb3JlY2FzdChsb25naXR1ZGUsIGxhdGl0dWRlLCB1bml0cykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/bG9uPSR7bG9uZ2l0dWRlfSZsYXQ9JHtsYXRpdHVkZX0mdW5pdHM9JHt1bml0c30mZXhjbHVkZT1taW51dGVseSZhcHBpZD0ke215QVBJfWAsXG4gICAgICAgIHsgbW9kZTogJ2NvcnMnIH1cbiAgICAgICk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBhbGVydChlcnIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBGdW5jdGlvbiB0byBnZXQgYm90aCBjdXJyZW50IGFuZCBmb3JlY2FzdCBkYXRhIGFuZCByZXR1cm4gdGhlbSB0b2dldGhlciAqL1xuICBzdGF0aWMgYXN5bmMgZ2V0V2VhdGhlckRhdGEoY2l0eVN0ciwgdW5pdHMpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY3VycmVudCA9IGF3YWl0IEFQSS5mZXRjaFdlYXRoZXIoY2l0eVN0ciwgdW5pdHMpO1xuICAgICAgY29uc3QgZm9yZWNhc3QgPSBhd2FpdCBBUEkuZmV0Y2hGb3JlY2FzdChcbiAgICAgICAgY3VycmVudC5jb29yZC5sb24sXG4gICAgICAgIGN1cnJlbnQuY29vcmQubGF0LFxuICAgICAgICB1bml0c1xuICAgICAgKTtcbiAgICAgIGNvbnN0IGRhdGEgPSB7IGN1cjogY3VycmVudCwgZm9yZTogZm9yZWNhc3QgfTtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gYWxlcnQoZXJyKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgc2V0QmFja0dyb3VuZChzdHIsIGNhcmQpIHtcbiAgICBmZXRjaChcbiAgICAgIGBodHRwczovL2FwaS5naXBoeS5jb20vdjEvZ2lmcy90cmFuc2xhdGU/YXBpX2tleT1SYzdaUXlic29pbERTYldOUG5SaUhQcThuekllZ203ZiZzPSR7c3RyfWAsXG4gICAgICB7IG1vZGU6ICdjb3JzJyB9XG4gICAgKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgY2FyZC5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgJ3N0eWxlJyxcbiAgICAgICAgICBgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7cmVzcG9uc2UuZGF0YS5pbWFnZXMub3JpZ2luYWwudXJsfSk7YFxuICAgICAgICApO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChhbGVydCk7XG4gIH1cblxuICBzdGF0aWMgaGFuZGxlRXJyb3JzKHJlc3BvbnNlKSB7XG4gICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1cyk7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG59XG4iLCJsZXQgc3RvcmVkQ2l0aWVzQXJyYXkgPSBbXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmFnZSB7XG4gIC8qIEZ1bmN0aW9uIHRvIHN0b3JlIGEgY2l0eSBuYW1lIHN0cmluZyBpbiBsb2NhbFN0b3JhZ2UgKi9cbiAgc3RhdGljIHB1c2gobmFtZSkge1xuICAgIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NpdGllcycpKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2l0aWVzJywgJ1tdJyk7XG4gICAgfVxuICAgIHN0b3JlZENpdGllc0FycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2l0aWVzJykpO1xuICAgIHN0b3JlZENpdGllc0FycmF5LnB1c2gobmFtZSk7XG4gICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NpdGllcycsIEpTT04uc3RyaW5naWZ5KHN0b3JlZENpdGllc0FycmF5KSk7XG4gIH1cblxuICAvKiBGdW5jdGlvbiB0byByZW1vdmUgYSBjaXR5IG5hbWUgc3RyaW5nIGluIGxvY2FsU3RvcmFnZSAqL1xuICBzdGF0aWMgcmVtb3ZlKGNpdHlOYW1lKSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjaXRpZXMnKSkge1xuICAgICAgc3RvcmVkQ2l0aWVzQXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjaXRpZXMnKSk7XG4gICAgICBzdG9yZWRDaXRpZXNBcnJheS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoZWxlbWVudC5pbmNsdWRlcyhjaXR5TmFtZSkpIHtcbiAgICAgICAgICBzdG9yZWRDaXRpZXNBcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NpdGllcycsIEpTT04uc3RyaW5naWZ5KHN0b3JlZENpdGllc0FycmF5KSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEZ1bmN0aW9uIHRvIGdldCB0aGUgbnVtYmVyIG9mIGNpdHkgZW50cmllcyBpbiBMUyAqL1xuICBzdGF0aWMgY2xlYXIoKSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjaXRpZXMnKSkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NpdGllcycsICdbXScpO1xuICAgIH1cbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgU3RvcmFnZSBmcm9tICcuL1N0b3JhZ2UuanMnO1xuaW1wb3J0IEFQSSBmcm9tICcuL0FQSS5qcyc7XG5cbmNvbnN0IGNhcmRFbnRyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXJkRW50cnknKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUkge1xuICBzdGF0aWMgY2xlYXIoKSB7XG4gICAgd2hpbGUgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXJkRW50cnknKS5maXJzdENoaWxkKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FyZEVudHJ5JykuZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgaW5zZXJ0Q2l0eShjaXR5KSB7XG4gICAgLy8gY2FyZCBjb250YWluZXJcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmQnKTtcbiAgICBjYXJkRW50cnkucHJlcGVuZChjYXJkKTtcblxuICAgIC8vIHNldCBjYXJkIEJhY2tncm91bmRcbiAgICBBUEkuc2V0QmFja0dyb3VuZChjaXR5LmNvbmRpdGlvbiwgY2FyZCk7XG5cbiAgICAvLyBsb2NhdGlvblxuICAgIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbG9jYXRpb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdsb2NhdGlvbicpO1xuICAgIGxvY2F0aW9uLmlubmVySFRNTCA9IGNpdHkubG9jYXRpb247XG4gICAgY2FyZC5hcHBlbmQobG9jYXRpb24pO1xuXG4gICAgLy8gdGltZVxuICAgIGNvbnN0IHRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aW1lLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGltZScpO1xuICAgIHRpbWUuaW5uZXJIVE1MID0gY2l0eS50aW1lO1xuICAgIGNhcmQuYXBwZW5kKHRpbWUpO1xuXG4gICAgLy8gdGVtcGVyYXR1cmVcbiAgICBjb25zdCB0ZW1wZXJhdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRlbXBlcmF0dXJlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGVtcGVyYXR1cmUnKTtcbiAgICBjb25zdCBzdHJpbmcgPSBjaXR5LnRlbXA7XG4gICAgdGVtcGVyYXR1cmUuaW5uZXJIVE1MID0gc3RyaW5nO1xuICAgIGNhcmQuYXBwZW5kKHRlbXBlcmF0dXJlKTtcblxuICAgIC8vIGNvbmRpdGlvblxuICAgIGNvbnN0IGNvbmRpdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbmRpdGlvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NvbmRpdGlvbicpO1xuICAgIGNvbmRpdGlvbi5pbm5lckhUTUwgPSBjaXR5LmNvbmRpdGlvbjtcbiAgICBjYXJkLmFwcGVuZChjb25kaXRpb24pO1xuXG4gICAgLy8gcmFpblxuICAgIGNvbnN0IHJhaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByYWluLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncmFpbicpO1xuICAgIHJhaW4uaW5uZXJIVE1MID0gY2l0eS5yYWluO1xuICAgIGNhcmQuYXBwZW5kKHJhaW4pO1xuXG4gICAgLy8gd2luZFxuICAgIGNvbnN0IHdpbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3aW5kLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnd2luZCcpO1xuICAgIHdpbmQuaW5uZXJIVE1MID0gY2l0eS53aW5kO1xuICAgIGNhcmQuYXBwZW5kKHdpbmQpO1xuXG4gICAgLy8gaG91cmx5IGZvcmVjYXN0c1xuICAgIGNvbnN0IGhvdXJseUZDcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvdXJseUZDcy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2hvdXJseScpO1xuICAgIGNpdHkuaG91cmx5NS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGRpdi5pbm5lckhUTUwgPSBpdGVtO1xuICAgICAgaG91cmx5RkNzLmFwcGVuZChkaXYpO1xuICAgIH0pO1xuICAgIGNhcmQuYXBwZW5kKGhvdXJseUZDcyk7XG5cbiAgICAvLyBkYWlseSBmb3JlY2FzdHNcbiAgICBjb25zdCBkYWlseUZDcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRhaWx5RkNzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGFpbHknKTtcbiAgICBjaXR5LmRhaWx5NS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGRpdi5pbm5lckhUTUwgPSBpdGVtO1xuICAgICAgZGFpbHlGQ3MuYXBwZW5kKGRpdik7XG4gICAgfSk7XG4gICAgY2FyZC5hcHBlbmQoZGFpbHlGQ3MpO1xuXG4gICAgLy8gY2FyZCBudW1iZXIgc2V0dXBcbiAgICBjb25zdCBjYXJkTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkJyk7XG4gICAgY29uc3QgaWROdW0gPSBjYXJkTGlzdC5sZW5ndGggLSAxO1xuICAgIGNhcmQuc2V0QXR0cmlidXRlKCdkYXRhLW51bScsIGlkTnVtKTtcblxuICAgIC8vIGRlbGV0ZSBidXR0b25cbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkZWxldGVCdG4uaW5uZXJIVE1MID0gJ0RlbGV0ZSc7XG4gICAgY2FyZC5hcHBlbmQoZGVsZXRlQnRuKTtcbiAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBjaXR5TmFtZSA9IGNpdHkubmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgU3RvcmFnZS5yZW1vdmUoY2l0eU5hbWUpO1xuICAgICAgY2FyZC5yZW1vdmUoKTtcbiAgICB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9