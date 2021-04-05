const request = require('postman-request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYW1lc21lcjMyIiwiYSI6ImNrbXY2cnh5YzAyN2Myb2s2MWZmeHN6ZHoifQ.MLdrY_K3P5wcP5OyNCb54A&limit=1'

    request({ url, json: true}, (error, { body }) => {
            if (error) {
                callback('Unable to connect to location services', undefined)
            } else if (body.features.length === 0){
                callback('Invalid location, try again with valid search term', undefined)
            } else {
                callback(undefined, {
                    latitude: body.features[0].center[1],
                    longitude: body.features[0].center[0],
                    location: body.features[0].place_name
                
                })
            }
    })       
}
module.exports = geocode