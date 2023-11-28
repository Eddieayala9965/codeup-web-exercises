import {keys} from './keys.js';
const getCountryData = async (searchText) =>{
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


//main
(async ()=>{
    const coordinates = await getCountryData("48 Sandburg Ct, Middletown, NY 10940");
    const coordinates2 = await getCountryData("balboa park, san diego, ca");
    console.log(coordinates);
    mapboxgl.accessToken = keys.mapbox;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: coordinates , // starting position [lng, lat]
        zoom: 9, // starting zoom
        keyboard: false,

    });
    const marker = new mapboxgl.Marker()
        .setLngLat([-98.4916, 29.4260])
        .addTo(map);
    const marker2 = new mapboxgl.Marker()
        .setLngLat(coordinates)
        .addTo(map);
    const marker3 = new mapboxgl.Marker()
        .setLngLat(coordinates2)
        .addTo(map);
    const popup = new mapboxgl.Popup()
        .setLngLat([-98.4916, 29.4260])
        .setHTML("<p>yoo</p>")
        .addTo(map)
    map.flyTo({
        center: [-98.4916, 29.4260],
        zoom: 15,
        // this animation is considered essential with respect to prefers-reduced-motion

    });

})();