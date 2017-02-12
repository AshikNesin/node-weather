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

const onGetAddressFailure = (res) => {
    console.log(res);
}
geocode.getGeoAddress(address)
    .then((addressResponse)=>addressResponse, onGetAddressFailure)
    .then(({latitute, longitude})=>{
    	weather.getWeather(latitute, longitude).then((res)=>console.log(res))
    })
