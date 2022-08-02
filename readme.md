# odin_javascript_5_weather_app

## [Live Site](https://jonro2955.github.io/odin_javascript_5_weather_app/)


This is a weather app that can display weather from any city in the world. Users can enter the name of a city to display hourly and daily weather data, as well as an animated gif that matches the returned weather conditions. Users can display more than one city. The app can accomodate unlimited number oc weather location cards.

It uses JavaScript asynchronous fetch methods to retrieve openweathermap.org API weather data in JSON format and creatively displays that data onto the webpage in "cards". It uses the browser's localStorage to save the list of city names as specified by the user and displays each of their weather information in standard sized weather "cards" on the webpage. Additional giphy.com API calls are implemented in response to each city's weather data in order to create a visual effect on the background of each city's "card" corresponding to its current weather condition. 

It uses both promises and async/await methods of asynchronous API calls, Webpack resource loading, Webpack output splitting, ESLint, and Prettier. Project instructions can be found at: https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/weather-app 

Focus areas:
* promises
* async/await
* fetch API calls
* localStorage
* ES6 modules and classes 
* Webpack resource loading
* Webpack output splitting
* ESLint and Prettier configuration
