import { keys } from "../js/keys.js"


/**
 * gets a forcast from open weather api based on lat and lng
 * @param {number} lat - latitude of location
 * @param {number} lng - longitude of location
 * @returns {Promise} - object of forecast
 */
 export const getForecast = async (lat, lng) => {
    if(Array.isArray(lat)) {
        lng = lat[1]
        lat = lat[0]
    }
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lng}&units=imperial&lang&appid=${keys.openWeather}`
    const options = {
        method: "GET",
    }
    const response = await fetch(url, options)
    const data = await response.json()

    return data.daily
}