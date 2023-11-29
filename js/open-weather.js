import {getForecast} from "../api/open-weather.js";
import {createMap, getCoordinates} from "../api/mapbox.js";


const createCardElement = (forecast) => {
 const date = new Date(forecast.dt * 1000).toLocaleDateString("en-US", { timeZone: 'UTC' })
 const daysOfWeek = new Date(forecast.dt * 1000).toLocaleDateString("en-US", { timeZone: 'UTC', weekday: 'long' })
 const card = document.createElement("div");
  card.innerHTML = `
   <div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${daysOfWeek}</h5>
      <p class="card-text">${date}</p>
      <p class="card-text"></p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"> Max: ${forecast.temp.max} Min: ${forecast.temp.min}</li> 
      <li class="list-group-item"> Humidity: ${forecast.humidity}</li>
      <li class="list-group-item">Feels Like: Day: ${forecast.feels_like.day} Night: ${forecast.feels_like.day}  </li>
    </ul>
    <div class="card-body">
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div>
 
    `;
    const cardElement = document.querySelector("#card");
      cardElement.appendChild(card);
}
const updateForecast = async (searchTerm, map) => {
 const getDataMap = await getCoordinates(searchTerm);
 const forecasts = await getForecast(41.4459344, -74.4640564);
 const cardElement = document.querySelector("#card");
 cardElement.innerHTML = "";

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

})()