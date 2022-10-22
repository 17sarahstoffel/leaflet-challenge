// adding the data
let link = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";


// creating the map
let myMap = L.map("map", {
    center: [0, 0],
    zoom: 3
});

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// creating color function based on depth of earth
function mapColor(depth) {
    switch (true) {
        case depth > 90:
            return "red";
        case depth > 70:
            return "redorange";
        case depth > 50:
            return "orange";
        case depth > 30:
            return "orangeyellow";
        case depth > 10:
            return "yellow";
        default:
            return "lightgreen";
    };
};


// Getting our GeoJSON data
d3.json(link).then(function(data) {

    // Creating a GeoJSON layer with the retrieved data
    L.geoJson(data, {

        //changing marker to cirlce
        pointToLayer: function(feature, latlng) {
            return new L.CircleMarker(latlng)
        },

        //adding the style function
        style: mapStyle,

    }).addTo(myMap);
  });
  
 