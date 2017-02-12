const axios = require('axios')
const GOOGLE_MAPS_API = 'http://maps.googleapis.com/maps/api/geocode/json'
const getGeoAddress = (address, callback) => {
    const encodedAddress = encodeURIComponent(address)
    const url = `${GOOGLE_MAPS_API}?address=${encodedAddress}`
    return new Promise((resolve, reject) => {
        axios.get(url).then((response) => {
            if (response.data.status === 'OK') {
                const { formatted_address, geometry } = response.data.results[0]
                const geoAddressResponse = {
                    address: formatted_address,
                    latitute: geometry.location.lat,
                    longitude: geometry.location.lng
                }
                resolve(geoAddressResponse)
            } else if (response.data.status === 'ZERO_RESULTS') {
                reject('Unable to find that address')
            }
        })
    })
}
module.exports = {
    getGeoAddress
}
