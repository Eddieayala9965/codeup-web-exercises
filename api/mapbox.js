import {keys} from "../js/keys.js";
import {updateForecast} from "../js/open-weather.js";

export const removeAllMapMarkers = () => {
    // get any markers objects currently on the map
    let markers = document.querySelectorAll(".mapboxgl-marker");
    // loop through the markers and remove them
    markers.forEach((marker) => marker.remove());
}
export const createMap = (coordinates) => {
    mapboxgl.accessToken = keys.mapbox;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: 'mapbox://styles/mapbox/navigation-night-v1', // style URL
        center: coordinates, // starting position [lng, lat]
        zoom: 8// starting zoom
    });
    let marker = new mapboxgl.Marker() // initialize a new marker
        .setLngLat(coordinates) // Marker [lng,/// make sure you change the coordinates in this array to your location!!!
        .addTo(map); // Add the marker to the map

    const geocoder = new MapboxGeocoder({
        // Initialize the geocoder
        accessToken: mapboxgl.accessToken, // Set the access token
        mapboxgl: mapboxgl, // Set the mapbox-gl instance
    });
    geocoder.on("result", (e)=>{
        console.log("Triggered by geocoder result => ", e);
        removeAllMapMarkers();
        const coordinates = [e.result.center[0], e.result.center[1]];
        console.log("Coordinates from geocoder => ", coordinates);
        updateForecast(e.result.place_name, map);
        let marker2 = new mapboxgl.Marker()
            .setLngLat(coordinates)
            .addTo(map)

    });

// Add the geocoder to the map
    map.addControl(geocoder);
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
    return data.features[0].center

}
