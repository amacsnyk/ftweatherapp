const env = require('env2')('./config.env');
const APPID = process.env.APPID
const axios = require('axios');

exports.get = (req, res) => {
  res.render('home', { activePage: { home: true } });
};

exports.post = (req, res) => {
  const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + req.body.city + '&appid=' + APPID;
  axios.get(url)
    .then(response => {
      const resText = 'Today there is ' + response.data.weather[0].description + ' in ' + response.data.name + ', and the temperature is currently ' + (Math.floor(response.data.main.temp - 273.15)) + 'C'
      console.log(resText);
      res.render('home', { 
        activePage: { home: true }, 
        weather: resText
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