// var map = L.map('map').setView([51.505, -0.09], 13);

// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/streets-v11',
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: 'your.mapbox.access.token'
// }).addTo(map);

var map = L.map('map').setView([39.61, -105.02], 11);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// maker
// var marker = L.marker([51.5, -0.09]).addTo(map);

// Named marker
// L.marker([51.5, -0.09]).addTo(map)
//     .bindPopup('My map')
//     .openPopup();


// Red circle
// var circle = L.circle([51.508, -0.09], {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//     radius: 500
// }).addTo(map);
// // Adds a tag when clicked on
// circle.bindPopup("I am a circle.");


// //Add tringle marker
// var polygon = L.polygon([
//     [51.509, -0.08],
//     [51.503, -0.06],
//     [51.51, -0.047]
// ]).addTo(map);
// polygon.bindPopup("I am a polygon.");


// // Tag that comes up first without clicking on the marker
// var popup = L.popup()
//     .setLatLng([51.513, -0.09])
//     .setContent("I am a standalone popup.")
//     .openOn(map);


// // Triggers an event for pop ups
// // function onMapClick(e) {
// //     alert("You clicked the map at " + e.latlng);
// // }

// // map.on('click', onMapClick);

// // pop up when click on map
// var popup = L.popup();

// function onMapClick(e) {
//     popup
//         .setLatLng(e.latlng)
//         .setContent("You clicked the map at " + e.latlng.toString())
//         .openOn(map);
// }

// map.on('click', onMapClick);

// //Zomms into your loaction 
// map.locate({setView: true, maxZoom: 16});

// // circles your location and tells you have far you are from
// function onLocationFound(e) {
//     var radius = e.accuracy;

//     L.marker(e.latlng).addTo(map)
//         .bindPopup("You are within " + radius + " meters from this point").openPopup();

//     L.circle(e.latlng, radius).addTo(map);
// }

// map.on('locationfound', onLocationFound);

// // Will display an error 
// function onLocationError(e) {
//     alert(e.message);
// }

// map.on('locationerror', onLocationError);

// var greenIcon = L.icon({
//     iconUrl: 'lego.png',
//     shadowUrl: 'legoman.png',

//     iconSize:     [38, 95], // size of the icon
//     shadowSize:   [50, 64], // size of the shadow
//     iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
//     shadowAnchor: [4, 62],  // the same for the shadow
//     popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
// });

// L.marker([51.5, -0.09], {icon: greenIcon}).addTo(map);

// var LeafIcon = L.Icon.extend({
//     options: {
//         shadowUrl: 'legoman.png',
//         iconSize:     [38, 95],
//         shadowSize:   [50, 64],
//         iconAnchor:   [22, 94],
//         shadowAnchor: [4, 62],
//         popupAnchor:  [-3, -76]
//     }
// });

// var greenIcon = new LeafIcon({iconUrl: 'lego.pngg'}),
//     redIcon = new LeafIcon({iconUrl: 'legoman.png'});
 
//     L.icon = function (options) {
//         return new L.Icon(options);
// };

// L.marker([51.5, -0.09], {icon: greenIcon}).addTo(map).bindPopup("I am a green leaf.");
// // L.marker([51.495, -0.083], {icon: redIcon}).addTo(map).bindPopup("I am a red leaf.");


// var myLines = [{
//     "type": "LineString",
//     "coordinates": [[-100, 40], [-105, 45], [-110, 55]]
// }, {
//     "type": "LineString",
//     "coordinates": [[-105, 40], [-110, 45], [-115, 55]]
// }];

// var myLayer = L.geoJSON().addTo(map);
// myLayer.addData(geojsonFeature);

// L.marker([51.5, -0.09], {icon: greenIcon}).addTo(map).bindPopup("I am a green leaf.");
// var marker = L.marker([51.5, -0.09]).addTo(map);

// var littleton = L.marker([39.61, -105.02]).addTo(map).bindPopup('This is Littleton, CO.'),
//     denver    = L.marker([39.74, -104.99]).addTo(map).bindPopup('This is Denver, CO.'),
//     aurora    = L.marker([39.73, -104.8]).addTo(map).bindPopup('This is Aurora, CO.'),
//     golden    = L.marker([39.77, -105.23]).addTo(map).bindPopup('This is Golden, CO.');

// var cities = L.layerGroup([littleton, denver, aurora, golden]);



// var grayscale = L.tileLayer(mapboxUrl, {id: 'MapID', tileSize: 512, zoomOffset: -1, attribution: mapboxAttribution}),
//     streets   = L.tileLayer(mapboxUrl, {id: 'MapID', tileSize: 512, zoomOffset: -1, attribution: mapboxAttribution});

// var map = L.map('map', {
//     center: [39.73, -104.99],
//     zoom: 10,
//     layers: [grayscale, cities]
// });


// var baseMaps = {
//     "Grayscale": grayscale,
//     "Streets": streets
// };

// var overlayMaps = {
//     "Cities": cities
// };

// L.control.layers(baseMaps, overlayMaps).addTo(map);

// var baseMaps = {
//     "<span style='color: gray'>Grayscale</span>": grayscale,
//     "Streets": streets
// };
// var geojsonFeature = 
//     { 
//         "type": "Point", 
//         "coordinates": [-104.99404, 39.75621]
//       }

// L.geoJSON(geojsonFeature).addTo(map);


var liverpool = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "LineString",
          "coordinates": [
            [
              -2.9752349853515625,
              53.41955860486593
            ],
            [
              -2.9367828369140625,
              53.39684155458476
            ],
            [
              -2.9875946044921875,
              53.39929803679939
            ],
            [
              -2.9985809326171875,
              53.41014580378423
            ],
            [
              -2.9742050170898438,
              53.41833096634864
            ]
          ]
        }
      }
    ]
  }

  L.geoJSON(liverpool).addTo(map);

  var myStyle = {
    color: "#000",
    fillColor: "#ff7800",
    weight: 10,
    opacity: 0.65
};


L.geoJSON(liverpool, {
    style: myStyle
}).addTo(map);
