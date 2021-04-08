const request = require('postman-request')

const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=498449fabc64c4c683530b8a305facfd&query=' + lat +',' + long + '&units=f'
    request({ url, json: true}, (error, { body }) => {
        if (error){
            callback('Unable to connect to weather service', undefined)
        } else if (body.error){
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions [0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out. The humidity is ' + body.current.humidity + '% and the wind is blowing to the ' + body.current.wind_dir + ' at ' + body.current.wind_speed + ' mph')
        }
    })

}


module.exports = forecast
