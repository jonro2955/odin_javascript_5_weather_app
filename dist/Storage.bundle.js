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
/*!********************************!*\
  !*** ./src/modules/Storage.js ***!
  \********************************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RvcmFnZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluX2phdmFzY3JpcHRfNV93ZWF0aGVyX2FwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluX2phdmFzY3JpcHRfNV93ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbl9qYXZhc2NyaXB0XzVfd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluX2phdmFzY3JpcHRfNV93ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW5famF2YXNjcmlwdF81X3dlYXRoZXJfYXBwLy4vc3JjL21vZHVsZXMvU3RvcmFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImxldCBzdG9yZWRDaXRpZXNBcnJheSA9IFtdO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yYWdlIHtcbiAgLyogRnVuY3Rpb24gdG8gc3RvcmUgYSBjaXR5IG5hbWUgc3RyaW5nIGluIGxvY2FsU3RvcmFnZSAqL1xuICBzdGF0aWMgcHVzaChuYW1lKSB7XG4gICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2l0aWVzJykpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjaXRpZXMnLCAnW10nKTtcbiAgICB9XG4gICAgc3RvcmVkQ2l0aWVzQXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjaXRpZXMnKSk7XG4gICAgc3RvcmVkQ2l0aWVzQXJyYXkucHVzaChuYW1lKTtcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2l0aWVzJywgSlNPTi5zdHJpbmdpZnkoc3RvcmVkQ2l0aWVzQXJyYXkpKTtcbiAgfVxuXG4gIC8qIEZ1bmN0aW9uIHRvIHJlbW92ZSBhIGNpdHkgbmFtZSBzdHJpbmcgaW4gbG9jYWxTdG9yYWdlICovXG4gIHN0YXRpYyByZW1vdmUoY2l0eU5hbWUpIHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NpdGllcycpKSB7XG4gICAgICBzdG9yZWRDaXRpZXNBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NpdGllcycpKTtcbiAgICAgIHN0b3JlZENpdGllc0FycmF5LmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChlbGVtZW50LmluY2x1ZGVzKGNpdHlOYW1lKSkge1xuICAgICAgICAgIHN0b3JlZENpdGllc0FycmF5LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2l0aWVzJywgSlNPTi5zdHJpbmdpZnkoc3RvcmVkQ2l0aWVzQXJyYXkpKTtcbiAgICB9XG4gIH1cblxuICAvKiogRnVuY3Rpb24gdG8gZ2V0IHRoZSBudW1iZXIgb2YgY2l0eSBlbnRyaWVzIGluIExTICovXG4gIHN0YXRpYyBjbGVhcigpIHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NpdGllcycpKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2l0aWVzJywgJ1tdJyk7XG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=