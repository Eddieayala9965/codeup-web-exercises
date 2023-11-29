import {getCountryData} from "../api/mapbox";
  const createMap = (coordinates) => {
    mapboxgl.accessToken = keys.mapbox;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: coordinates, // starting position [lng, lat]
        zoom: 10// starting zoom
    });
    map.flyTo({
        center: coordinates,
        zoom: 10,
    });
}
const foodPlaces = [
    {
        name: "Mix and Mac",
        address: "280 NY-211, Middletown, NY 10940",
        link: "https://mixandmac.com",

    },
    {
        name: "Planet Wings",
        address: "171 W Main St, Middletown, NY 10940",
        link: "https://planetwings.com",

    },
    {
        name: "Maddy's Diner",
        address: "439 NY-17M, Middletown, NY 10940",
        link: "https://maddysdiner.net",
    }
];

(async ()=>{
    const coordinates = await getCountryData("48 Sandburg Ct, Middletown, NY 10940");
   const city = await getCountryData()
    console.log(city);
createMap(coordinates);


    for (let foodPlace of foodPlaces) {
        const coordinates = await getCountryData(foodPlace.address);
        const popup = new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(`<p>${foodPlace.name}</p>
            <p>${foodPlace.address}</p>
            <p>${foodPlace.link}</p>`)
            .addTo(map)
        const marker = new mapboxgl.Marker()
            .setLngLat(coordinates)
            .addTo(map)
            .setPopup(popup)
        marker.togglePopup(popup);
    }


    // const popup = new mapboxgl.Popup()
    //     .setLngLat(foodPlaceOne)
    //     .setHTML("<p>Mix & Mac</p>")
    //     .addTo(map)
    // const marker = new mapboxgl.Marker()
    //     .setLngLat(foodPlaceOne)
    //         .addTo(map)
    //     .setPopup(popup)
    // marker.togglePopup(popup);
    //
    //
    // const popup2 = new mapboxgl.Popup()
    //     .setLngLat(foodPlaceTwo)
    //     .setHTML("<p>Planet Wings</p>")
    //     .addTo(map)
    // const marker2 = new mapboxgl.Marker()
    //     .setLngLat(foodPlaceTwo)
    //     .addTo(map)
    //     .setPopup(popup2)
    // marker2.togglePopup(popup2);
    //
    //
    // const popup3 = new mapboxgl.Popup()
    //     .setLngLat(foodPlaceThree)
    //     .setHTML("<p>Maddys Diner</p>")
    //     .addTo(map)
    // const marker3 = new mapboxgl.Marker()
    //     .setLngLat(foodPlaceThree)
    //     .addTo(map)
    //     .setPopup(popup3)
    // marker3.togglePopup(popup3);















})()