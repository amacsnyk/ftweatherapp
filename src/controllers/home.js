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
      console.log('Today there is ' + response.data.weather[0].description + ' in ' + response.data.name + ', and the temperature is currently ' + (Math.floor(response.data.main.temp - 273.15)) + 'C');
    })
    .catch(error => {
      console.log(error);
    });
  res.render('home', { activePage: { home: true } });
}