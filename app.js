const yargs = require('yargs')
const geocode = require('./api/geocode')
const weather = require('./api/weather')
const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather',
            string: true
        }
    })
    .help()
    .argv;
const { address } = argv
geocode.getGeoAddress(address, (errorMsg, result) => {
    if (errorMsg) {
        console.log(errorMsg);
        return
    }
    console.log(result);
    weather.getWeather(result.latitute, result.longitude, (errorMsg, result) => {
        if (errorMsg) {
            console.log(errorMsg);
            return
        }
        console.log(result);
    })
})
