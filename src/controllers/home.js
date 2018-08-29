const env = require('env2')('./config.env');
const APPID = process.env.APPID
const axios = require('axios');
const listOfCities = require('../models/index')

exports.get = (req, res) => {
  res.render('home', { 
    activePage: { home: true },
    cities: { listOfCities }
   });
};

exports.post = (req, res) => {
  const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + req.body.city + '&appid=' + APPID;
  axios.get(url)
    .then(response => {
      const weatherDesc = response.data.weather[0].description
      const cityName = response.data.name
      const temp = response.data.main.temp
      const humidity = response.data.main.humidity
      const countryCode = response.data.sys.country
      res.render('home', { 
        activePage: { home: true },
        weather: weatherDesc,
        city: cityName,
        tempK: temp,
        percHumidity: humidity,
        country: countryCode
      });
    })
    .catch(error => {
      res.status(404).render('error', {
        layout: 'error',
        statusCode: 404,
        errorMessage: 'that doesn\'t appear to be a city. Please try again.'
      });
    });
}