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
    this.time = this.getDate(data.cur.dt);
    this.scale = scale === 'imperial' ? '&deg;F' : '&deg;C';
    this.condition = data.cur.weather[0].description.toUpperCase();
    this.main = data.cur.weather[0].main;
    this.temp = data.cur.main.temp + this.scale;
    this.rain = `Rain: ${data.cur.rain ? data.cur.rain['1h'] : 0} mm/h`;
    this.wind = `Wind: ${data.cur.wind.speed} km/h`;
    this.hourly5 = this.getHourlys(data.fore);
    this.daily5 = this.getDailys(data.fore);
  }

  // eslint-disable-next-line class-methods-use-this
  getDate(unixTimeStamp) {
    const date = new Date(unixTimeStamp * 1000);
    const hours = date.getHours();
    const minutes = `0${date.getMinutes()}`;
    return `${date.toLocaleDateString('en-US')}, ${hours}:${minutes.substr(-2)}`;
    // return `${hours}:${minutes.substr(-2)}`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2l0eS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOZTtBQUNmO0FBQ0E7QUFDQSx1QkFBdUIsY0FBYyxJQUFJLHFCQUFxQjtBQUM5RDtBQUNBLDhDQUE4QyxXQUFXO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qix5Q0FBeUM7QUFDbEUseUJBQXlCLHFCQUFxQjtBQUM5QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isa0JBQWtCO0FBQzFDLGNBQWMsaUNBQWlDLElBQUksTUFBTSxHQUFHLG1CQUFtQjtBQUMvRSxpQkFBaUIsTUFBTSxHQUFHLG1CQUFtQjtBQUM3Qzs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLGtCQUFrQjtBQUN2RCxjQUFjLE9BQU87QUFDckIsdUJBQXVCLFlBQVksSUFBSSxLQUFLLEVBQUUsS0FBSyxJQUFJLEtBQUssRUFBRSxXQUFXO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLFdBQVc7QUFDL0M7QUFDQTtBQUNBLHVCQUF1QixJQUFJLElBQUksS0FBSyxFQUFFLEtBQUssSUFBSSxRQUFRLEVBQUUsV0FBVyxHQUFHLFNBQVMsRUFBRSxZQUFZO0FBQzlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluX2phdmFzY3JpcHRfNV93ZWF0aGVyX2FwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluX2phdmFzY3JpcHRfNV93ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbl9qYXZhc2NyaXB0XzVfd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluX2phdmFzY3JpcHRfNV93ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW5famF2YXNjcmlwdF81X3dlYXRoZXJfYXBwLy4vc3JjL2NsYXNzL0NpdHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDaXR5IHtcbiAgY29uc3RydWN0b3Ioc2NhbGUsIGRhdGEpIHtcbiAgICB0aGlzLm5hbWUgPSBkYXRhLmN1ci5uYW1lO1xuICAgIHRoaXMubG9jYXRpb24gPSBgJHtkYXRhLmN1ci5uYW1lfSwgJHtkYXRhLmN1ci5zeXMuY291bnRyeX1gO1xuICAgIHRoaXMudGltZSA9IHRoaXMuZ2V0RGF0ZShkYXRhLmN1ci5kdCk7XG4gICAgdGhpcy5zY2FsZSA9IHNjYWxlID09PSAnaW1wZXJpYWwnID8gJyZkZWc7RicgOiAnJmRlZztDJztcbiAgICB0aGlzLmNvbmRpdGlvbiA9IGRhdGEuY3VyLndlYXRoZXJbMF0uZGVzY3JpcHRpb24udG9VcHBlckNhc2UoKTtcbiAgICB0aGlzLm1haW4gPSBkYXRhLmN1ci53ZWF0aGVyWzBdLm1haW47XG4gICAgdGhpcy50ZW1wID0gZGF0YS5jdXIubWFpbi50ZW1wICsgdGhpcy5zY2FsZTtcbiAgICB0aGlzLnJhaW4gPSBgUmFpbjogJHtkYXRhLmN1ci5yYWluID8gZGF0YS5jdXIucmFpblsnMWgnXSA6IDB9IG1tL2hgO1xuICAgIHRoaXMud2luZCA9IGBXaW5kOiAke2RhdGEuY3VyLndpbmQuc3BlZWR9IGttL2hgO1xuICAgIHRoaXMuaG91cmx5NSA9IHRoaXMuZ2V0SG91cmx5cyhkYXRhLmZvcmUpO1xuICAgIHRoaXMuZGFpbHk1ID0gdGhpcy5nZXREYWlseXMoZGF0YS5mb3JlKTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzXG4gIGdldERhdGUodW5peFRpbWVTdGFtcCkge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh1bml4VGltZVN0YW1wICogMTAwMCk7XG4gICAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgY29uc3QgbWludXRlcyA9IGAwJHtkYXRlLmdldE1pbnV0ZXMoKX1gO1xuICAgIHJldHVybiBgJHtkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tVVMnKX0sICR7aG91cnN9OiR7bWludXRlcy5zdWJzdHIoLTIpfWA7XG4gICAgLy8gcmV0dXJuIGAke2hvdXJzfToke21pbnV0ZXMuc3Vic3RyKC0yKX1gO1xuICB9XG5cbiAgZ2V0SG91cmx5cyhmb3JlKSB7XG4gICAgY29uc3QgYXJyID0gW107XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMzsgaSsrKSB7XG4gICAgICBjb25zdCBob3VyRkMgPSBmb3JlLmhvdXJseVtpICogMl07XG4gICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoaG91ckZDLmR0ICogMTAwMCk7XG4gICAgICBsZXQgaG91ciA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICAgIGNvbnN0IGFtcG0gPSBob3VyID49IDEyID8gJ3BtJyA6ICdhbSc7XG4gICAgICBob3VyID0gaG91ciAlIDEyIHx8IDEyO1xuICAgICAgY29uc3QgY29uZCA9IGhvdXJGQy53ZWF0aGVyWzBdLm1haW47XG4gICAgICBjb25zdCByYWluID0gaG91ckZDLnJhaW4gPyBgKCR7aG91ckZDLnJhaW5bJzFoJ119bW0vaClgIDogJyc7XG4gICAgICBjb25zdCB7IHRlbXAgfSA9IGhvdXJGQztcbiAgICAgIGNvbnN0IGVudHJ5ID0gYCR7aG91ciArIGFtcG19OiAke2NvbmR9JHtyYWlufSwgJHt0ZW1wfSR7dGhpcy5zY2FsZX1gO1xuICAgICAgYXJyLnB1c2goZW50cnkpO1xuICAgIH1cbiAgICByZXR1cm4gYXJyO1xuICB9XG5cbiAgZ2V0RGFpbHlzKGZvcmUpIHtcbiAgICBjb25zdCBhcnIgPSBbXTtcbiAgICBjb25zdCB3ZWVrID0gWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAzOyBpKyspIHtcbiAgICAgIGNvbnN0IGRheUZDID0gZm9yZS5kYWlseVtpXTtcbiAgICAgIGNvbnN0IHRpbWUgPSBuZXcgRGF0ZShkYXlGQy5kdCAqIDEwMDApO1xuICAgICAgY29uc3QgZGF5ID0gd2Vla1t0aW1lLmdldERheSgpXTtcbiAgICAgIGNvbnN0IGNvbmQgPSBkYXlGQy53ZWF0aGVyWzBdLm1haW47XG4gICAgICBjb25zdCByYWluID0gZGF5RkMucmFpbiA/IGAoJHtkYXlGQy5yYWlufW1tKWAgOiAnJztcbiAgICAgIGNvbnN0IGxvd1RlbXAgPSBkYXlGQy50ZW1wLm1pbjtcbiAgICAgIGNvbnN0IGhpZ2hUZW1wID0gZGF5RkMudGVtcC5tYXg7XG4gICAgICBjb25zdCBlbnRyeSA9IGAke2RheX06ICR7Y29uZH0ke3JhaW59LCAke2xvd1RlbXB9JHt0aGlzLnNjYWxlfS8ke2hpZ2hUZW1wfSR7dGhpcy5zY2FsZX0gKEwvSClgO1xuICAgICAgYXJyLnB1c2goZW50cnkpO1xuICAgIH1cbiAgICByZXR1cm4gYXJyO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=