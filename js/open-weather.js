import {getForecast} from "../api/open-weather.js";
import {createMap, getCoordinates, removeAllMapMarkers} from "../api/mapbox.js";
const createCardElement = (forecast) => {
 console.log("Triggered by createCardElement => ", forecast);
 const date = new Date(forecast.dt * 1000).toLocaleDateString("en-US", { timeZone: 'UTC' })
 const daysOfWeek = new Date(forecast.dt * 1000).toLocaleDateString("en-US", { timeZone: 'UTC', weekday: 'long' })
 const temp = parseInt(forecast.temp.day)
 const humidity = parseInt(forecast.humidity)
 const day = parseInt(forecast.feels_like.day)
 const night = parseInt(forecast.feels_like.night)
 const windSpeed = parseInt(forecast.wind_speed)
 const card = document.createElement("div");
 card.classList.add("weather-card", "one");
  card.innerHTML = `
      <div class="top">
          <div class="wrapper">
              <div class="mynav"></div>
              <h1 class="heading">${daysOfWeek}</h1>
              <h3 class="location">${date}</h3>
              <h2 class="location">${forecast.weather[0].main}</h2>
              <p class="temp">
                  <span class="temp-value">${temp}<span>&#8457;</span></span>
              </p>
          </div>
      </div>
      <div class="bottom">
          <div class="wrapper">
              <ul class="forecast">
                  <li class="active">
                      <span class="date">Humidity</span>
                      <span class="lnr  condition">
                          <span class="temp">${forecast.humidity}<span>&#176;</span></span>
                      </span>
                  </li>
                  <li>
                      <span class="date">Feels Like</span>
                      <span class="lnr  condition">
                          <span class="temp">Day ${day}<span>&#176;</span> Night ${night}<span>&#176;</span></span>
                      </span>
                  </li>
              </ul>
          </div>
      </div>
    `;
    const cardElement = document.querySelector("#card");
      cardElement.appendChild(card);
}
export const updateForecast = async (searchTerm, map) => {
 const getDataMap = await getCoordinates(searchTerm);
 const forecasts = await getForecast(getDataMap[1], getDataMap[0]);
 const cardElement = document.querySelector("#card");
 cardElement.innerHTML = "";
 console.log("Triggered by updateForecast => ", forecasts);

 forecasts.forEach((forecast, index)=>{
  if(index <= 4) {
   // console.log(forecast)
   createCardElement(forecast);
  }
 });


 map.flyTo({
  center: getDataMap,
  zoom: 13,
 });

}


//Main
(async ()=> {

 const getDataMap = await getCoordinates("Middletown, NY 10940");
 const map = createMap(getDataMap);
 updateForecast("Middletown, NY 10940", map);

 map.on("click", (e)=>{
  console.log("Triggered by map click");
  const coordinates = e.lngLat;
  const searchTerm = `${coordinates.lng}, ${coordinates.lat}`;
  updateForecast(searchTerm, map);
  console.log(searchTerm);
  console.log(coordinates);
  removeAllMapMarkers();
  let marker2 = new mapboxgl.Marker()

      .setLngLat(coordinates)
      .addTo(map)
 })
 console.log( await getCoordinates());

})()