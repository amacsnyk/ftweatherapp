const axios = require('axios');
const env = require('env2')('../../config.env');
const APPID = process.env.APPID

//const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + process.env.APPID;

const testURL = 'http://api.openweathermap.org/data/2.5/weather?q=munich&appid=' + APPID;

axios.get(testURL)
  .then(response => {
    console.log('Today there is ' + response.data.weather[0].description + ' in ' + response.data.name + ', and the temperature is currently ' + (Math.floor(response.data.main.temp - 273.15)) + 'C');
  })
  .catch(error => {
    console.log(error);
  });

  //module.exports = { apicall }