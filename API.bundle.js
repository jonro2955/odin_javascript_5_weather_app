/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!****************************!*\
  !*** ./src/modules/API.js ***!
  \****************************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVBJLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCxRQUFRLFNBQVMsTUFBTSxTQUFTLE1BQU07QUFDbkcsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUErRCxVQUFVLE9BQU8sU0FBUyxTQUFTLE1BQU0sMEJBQTBCLE1BQU07QUFDeEksVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEZBQTRGLElBQUk7QUFDaEcsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsa0NBQWtDLEVBQUU7QUFDdkU7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbl9qYXZhc2NyaXB0XzVfd2VhdGhlcl9hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbl9qYXZhc2NyaXB0XzVfd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW5famF2YXNjcmlwdF81X3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbl9qYXZhc2NyaXB0XzVfd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluX2phdmFzY3JpcHRfNV93ZWF0aGVyX2FwcC8uL3NyYy9tb2R1bGVzL0FQSS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5jb25zdCBhcGlLZXkxID0gJzE1ZTkxNWMwNWQ4YjMyNzQ4YzRlZDI0ZmU5ZDZiMWQ5JztcbmNvbnN0IGFwaUtleTIgPSAnNGM1NzIyNGJiNWNiN2M2NGUyZTRlYTE5MTViNjExNWMnO1xuY29uc3QgbXlBUEkgPSBhcGlLZXkxO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBUEkge1xuICAvKiBGdW5jdGlvbiB0byB0YWtlIGEgY2l0eSBzdHJpbmcgYW5kIGZldGNoIHRoZSBjdXJyZW50IHdlYXRoZXJcbiAganNvbiBkYXRhIGZyb20gb3BlbndlYXRoZXJtYXAuICovXG4gIHN0YXRpYyBhc3luYyBmZXRjaFdlYXRoZXIoY2l0eVN0ciwgdW5pdHMpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5U3RyfSZ1bml0cz0ke3VuaXRzfSZhcHBpZD0ke215QVBJfWAsXG4gICAgICAgIHsgbW9kZTogJ2NvcnMnIH1cbiAgICAgICk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBhbGVydChlcnIpO1xuICAgIH1cbiAgfVxuXG4gIC8qIEZ1bmN0aW9uIHRvIHRha2UgdGhlIGxvbmdpdHVkZSBhbmQgbGF0aXR1ZGUgdG8gYmUgb2J0YWluZWQgZnJvbSBmZXRjaEN1cnJlbnRXZWF0aGVyKCksXG4gIHRoZSBjdXJyZW50IHVuaXQgb2YgbWVhc3VyZW1lbnQsIGFuZCBmZXRjaCB0aGUgaG91cmx5K2RhaWx5IGZvcmVjYXN0LiAqL1xuICBzdGF0aWMgYXN5bmMgZmV0Y2hGb3JlY2FzdChsb25naXR1ZGUsIGxhdGl0dWRlLCB1bml0cykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/bG9uPSR7bG9uZ2l0dWRlfSZsYXQ9JHtsYXRpdHVkZX0mdW5pdHM9JHt1bml0c30mZXhjbHVkZT1taW51dGVseSZhcHBpZD0ke215QVBJfWAsXG4gICAgICAgIHsgbW9kZTogJ2NvcnMnIH1cbiAgICAgICk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBhbGVydChlcnIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBGdW5jdGlvbiB0byBnZXQgYm90aCBjdXJyZW50IGFuZCBmb3JlY2FzdCBkYXRhIGFuZCByZXR1cm4gdGhlbSB0b2dldGhlciAqL1xuICBzdGF0aWMgYXN5bmMgZ2V0V2VhdGhlckRhdGEoY2l0eVN0ciwgdW5pdHMpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY3VycmVudCA9IGF3YWl0IEFQSS5mZXRjaFdlYXRoZXIoY2l0eVN0ciwgdW5pdHMpO1xuICAgICAgY29uc3QgZm9yZWNhc3QgPSBhd2FpdCBBUEkuZmV0Y2hGb3JlY2FzdChcbiAgICAgICAgY3VycmVudC5jb29yZC5sb24sXG4gICAgICAgIGN1cnJlbnQuY29vcmQubGF0LFxuICAgICAgICB1bml0c1xuICAgICAgKTtcbiAgICAgIGNvbnN0IGRhdGEgPSB7IGN1cjogY3VycmVudCwgZm9yZTogZm9yZWNhc3QgfTtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gYWxlcnQoZXJyKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgc2V0QmFja0dyb3VuZChzdHIsIGNhcmQpIHtcbiAgICBmZXRjaChcbiAgICAgIGBodHRwczovL2FwaS5naXBoeS5jb20vdjEvZ2lmcy90cmFuc2xhdGU/YXBpX2tleT1SYzdaUXlic29pbERTYldOUG5SaUhQcThuekllZ203ZiZzPSR7c3RyfWAsXG4gICAgICB7IG1vZGU6ICdjb3JzJyB9XG4gICAgKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgY2FyZC5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgJ3N0eWxlJyxcbiAgICAgICAgICBgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7cmVzcG9uc2UuZGF0YS5pbWFnZXMub3JpZ2luYWwudXJsfSk7YFxuICAgICAgICApO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChhbGVydCk7XG4gIH1cblxuICBzdGF0aWMgaGFuZGxlRXJyb3JzKHJlc3BvbnNlKSB7XG4gICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1cyk7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=