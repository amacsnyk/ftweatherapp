const env = require('env2')('./config.env');
const WEATHERAPPID = process.env.WEATHERAPPID
const TIMEZONEAPPID = process.env.TIMEZONEAPPID
const axios = require('axios');

exports.get = (req, res) => {
  const location = req.params.location;
  const lat = location.split('&')[0].split("=")[1]
  const lon = location.split('&')[1].split("=")[1]
  const newurl = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=' + WEATHERAPPID;
        axios.get(newurl)
        .then(response => {
          const weatherDesc = response.data.weather[0].description
          const cityName = response.data.name
          const temp = response.data.main.temp
          const humidity = response.data.main.humidity
          const countryCode = response.data.sys.country
          const timeDate = response.data.dt
          res.render('weather', { 
            layout: 'weather',
            homeWeather: weatherDesc,
            city: cityName,
            tempK: temp,
            percHumidity: humidity,
            country: countryCode,
            timeData: timeDate
          });
        })
        .catch(error => {
          console.log(error)
        })
}

exports.post = (req, res) => {
  const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + req.body.city + '&appid=' + WEATHERAPPID;
  console.log(url)
  axios.get(url)
    .then(response => {
      const weatherDesc = response.data.weather[0].description
      const cityName = response.data.name
      const temp = response.data.main.temp
      const humidity = response.data.main.humidity
      const countryCode = response.data.sys.country
      const lat = response.data.coord.lat
      const lon = response.data.coord.lon
      const newurl = 'http://api.timezonedb.com/v2/get-time-zone?key=' + TIMEZONEAPPID + '&format=json&by=position&lat=' + lat + '&lng=' + lon
      axios.get(newurl)
        .then(response => {
          const timeDate = response.data.formatted
          res.render('weather', { 
            layout: 'weather',
            homeWeather: null,
            weather: weatherDesc,
            city: cityName,
            tempK: temp,
            percHumidity: humidity,
            country: countryCode,
            timeData: timeDate
          });
        })
        .catch(error => {
          console.log('inner error')
        })
    })
    .catch(error => {
      console.log(error)
      res.status(404).render('error', {
        layout: 'error',
        statusCode: 404,
        errorMessage: 'that doesn\'t appear to be a city. Please try again.'
      });
    });
}