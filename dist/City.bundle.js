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
/*!***************************!*\
  !*** ./src/class/City.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ City)
/* harmony export */ });
class City {
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2l0eS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOZTtBQUNmO0FBQ0E7QUFDQSx1QkFBdUIsY0FBYyxJQUFJLHFCQUFxQjtBQUM5RCw4Q0FBOEMsV0FBVztBQUN6RDtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIseUNBQXlDO0FBQ2xFLHlCQUF5QixxQkFBcUI7QUFDOUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsa0JBQWtCO0FBQ3ZELGNBQWMsT0FBTztBQUNyQix1QkFBdUIsWUFBWSxJQUFJLEtBQUssRUFBRSxLQUFLLElBQUksS0FBSyxFQUFFLFdBQVc7QUFDekU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsV0FBVztBQUMvQztBQUNBO0FBQ0EsdUJBQXVCLElBQUksSUFBSSxLQUFLLEVBQUUsS0FBSyxJQUFJLFFBQVEsRUFBRSxXQUFXLEdBQUcsU0FBUyxFQUFFLFlBQVk7QUFDOUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW5famF2YXNjcmlwdF81X3dlYXRoZXJfYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW5famF2YXNjcmlwdF81X3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluX2phdmFzY3JpcHRfNV93ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW5famF2YXNjcmlwdF81X3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbl9qYXZhc2NyaXB0XzVfd2VhdGhlcl9hcHAvLi9zcmMvY2xhc3MvQ2l0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENpdHkge1xuICBjb25zdHJ1Y3RvcihzY2FsZSwgZGF0YSkge1xuICAgIHRoaXMubmFtZSA9IGRhdGEuY3VyLm5hbWU7XG4gICAgdGhpcy5sb2NhdGlvbiA9IGAke2RhdGEuY3VyLm5hbWV9LCAke2RhdGEuY3VyLnN5cy5jb3VudHJ5fWA7XG4gICAgdGhpcy5zY2FsZSA9IHNjYWxlID09PSAnaW1wZXJpYWwnID8gJyZkZWc7RicgOiAnJmRlZztDJztcbiAgICB0aGlzLmNvbmRpdGlvbiA9IGRhdGEuY3VyLndlYXRoZXJbMF0uZGVzY3JpcHRpb24udG9VcHBlckNhc2UoKTtcbiAgICB0aGlzLm1haW4gPSBkYXRhLmN1ci53ZWF0aGVyWzBdLm1haW47XG4gICAgdGhpcy50ZW1wID0gZGF0YS5jdXIubWFpbi50ZW1wICsgdGhpcy5zY2FsZTtcbiAgICB0aGlzLnJhaW4gPSBgUmFpbjogJHtkYXRhLmN1ci5yYWluID8gZGF0YS5jdXIucmFpblsnMWgnXSA6IDB9IG1tL2hgO1xuICAgIHRoaXMud2luZCA9IGBXaW5kOiAke2RhdGEuY3VyLndpbmQuc3BlZWR9IGttL2hgO1xuICAgIHRoaXMuaG91cmx5NSA9IHRoaXMuZ2V0SG91cmx5cyhkYXRhLmZvcmUpO1xuICAgIHRoaXMuZGFpbHk1ID0gdGhpcy5nZXREYWlseXMoZGF0YS5mb3JlKTtcbiAgfVxuXG4gIGdldEhvdXJseXMoZm9yZSkge1xuICAgIGNvbnN0IGFyciA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDM7IGkrKykge1xuICAgICAgY29uc3QgaG91ckZDID0gZm9yZS5ob3VybHlbaSAqIDJdO1xuICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGhvdXJGQy5kdCAqIDEwMDApO1xuICAgICAgbGV0IGhvdXIgPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgICBjb25zdCBhbXBtID0gaG91ciA+PSAxMiA/ICdwbScgOiAnYW0nO1xuICAgICAgaG91ciA9IGhvdXIgJSAxMiB8fCAxMjtcbiAgICAgIGNvbnN0IGNvbmQgPSBob3VyRkMud2VhdGhlclswXS5tYWluO1xuICAgICAgY29uc3QgcmFpbiA9IGhvdXJGQy5yYWluID8gYCgke2hvdXJGQy5yYWluWycxaCddfW1tL2gpYCA6ICcnO1xuICAgICAgY29uc3QgeyB0ZW1wIH0gPSBob3VyRkM7XG4gICAgICBjb25zdCBlbnRyeSA9IGAke2hvdXIgKyBhbXBtfTogJHtjb25kfSR7cmFpbn0sICR7dGVtcH0ke3RoaXMuc2NhbGV9YDtcbiAgICAgIGFyci5wdXNoKGVudHJ5KTtcbiAgICB9XG4gICAgcmV0dXJuIGFycjtcbiAgfVxuXG4gIGdldERhaWx5cyhmb3JlKSB7XG4gICAgY29uc3QgYXJyID0gW107XG4gICAgY29uc3Qgd2VlayA9IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J107XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMzsgaSsrKSB7XG4gICAgICBjb25zdCBkYXlGQyA9IGZvcmUuZGFpbHlbaV07XG4gICAgICBjb25zdCB0aW1lID0gbmV3IERhdGUoZGF5RkMuZHQgKiAxMDAwKTtcbiAgICAgIGNvbnN0IGRheSA9IHdlZWtbdGltZS5nZXREYXkoKV07XG4gICAgICBjb25zdCBjb25kID0gZGF5RkMud2VhdGhlclswXS5tYWluO1xuICAgICAgY29uc3QgcmFpbiA9IGRheUZDLnJhaW4gPyBgKCR7ZGF5RkMucmFpbn1tbSlgIDogJyc7XG4gICAgICBjb25zdCBsb3dUZW1wID0gZGF5RkMudGVtcC5taW47XG4gICAgICBjb25zdCBoaWdoVGVtcCA9IGRheUZDLnRlbXAubWF4O1xuICAgICAgY29uc3QgZW50cnkgPSBgJHtkYXl9OiAke2NvbmR9JHtyYWlufSwgJHtsb3dUZW1wfSR7dGhpcy5zY2FsZX0vJHtoaWdoVGVtcH0ke3RoaXMuc2NhbGV9IChML0gpYDtcbiAgICAgIGFyci5wdXNoKGVudHJ5KTtcbiAgICB9XG4gICAgcmV0dXJuIGFycjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9