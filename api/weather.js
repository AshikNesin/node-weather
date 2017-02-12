const axios = require('axios')
const DARKSKY_API_KEY = '17c6618c4e2582c5b47a3df128efd579'
const DARKSKY_API_ENDPOINT = `https://api.darksky.net/forecast/${DARKSKY_API_KEY}`
const getWeather = (lat, lng, callback) => {
    const url = `${DARKSKY_API_ENDPOINT}/${lat},${lng}`
    return new Promise((resolve,reject)=>{
        axios.get(url).then((response) => {
            if (response.data.currently) {
                const weatherResponse = {
                    temperature: response.data.currently.temperature
                }
                resolve(weatherResponse)
            } else {
                reject('Unable to find weather for that area')
            }
        })
    })
}
module.exports = {
    getWeather
}
