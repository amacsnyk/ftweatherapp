const env = require('env2')('./config.env');
const WEATHERAPPID = process.env.WEATHERAPPID
const LOCATIONAPPID = process.env.LOCATIONAPPID
const TIMEZONEAPPID = process.env.TIMEZONEAPPID
const axios = require('axios');

exports.get = (req, res) => {
    const url = 'http://api.ipstack.com/check?access_key=' + LOCATIONAPPID
    axios.get(url)
      .then(response => {
        const lat = response.data.latitude
        const lon = response.data.longitude
        const newurl = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=' + WEATHERAPPID;
        axios.get(newurl)
        .then(response => {
          console.log(response.data)
          const weatherDesc = response.data.weather[0].description
          const cityName = response.data.name
          const temp = response.data.main.temp
          const humidity = response.data.main.humidity
          const countryCode = response.data.sys.country
          const utc = response.data.dt
          res.render('home', { 
            activePage: { home: true },
            homeWeather: weatherDesc,
            city: cityName,
            tempK: temp,
            percHumidity: humidity,
            country: countryCode,
            timeData: utc
           })
        })
        .catch(error => {
          console.log('inner get error')
        })
      })
      .catch(error => {
        console.log('outer get error')
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
          res.render('home', { 
            activePage: { home: true },
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