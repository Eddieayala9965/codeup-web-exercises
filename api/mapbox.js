import {keys} from "../js/keys.js";

export const createMap = (coordinates) => {
    mapboxgl.accessToken = keys.mapbox;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: 'mapbox://styles/mapbox/navigation-night-v1', // style URL
        center: coordinates, // starting position [lng, lat]
        zoom: 8// starting zoom
    });
    map.flyTo({
        center: coordinates,
        zoom: 13,
    });
    return map;
}
 export const getCoordinates = async (searchText) =>{
    searchText = encodeURIComponent(searchText);
    const url =`https://api.mapbox.com/geocoding/v5/mapbox.places/${searchText}.json?access_token=${keys.mapbox}`;
    const options = {
        method: 'GET',
        headers: {
            "Content-Type": `application/json`,
        }

    }
    const response = await fetch(url, options);
    const data = await response.json();
    return data.features[0].center;
}
