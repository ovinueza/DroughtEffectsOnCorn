// Store our API endpoint inside queryUrl
var link = "https://www1.ncdc.noaa.gov/pub/data/nidis/geojson/county/agcounty/geoag/ILmax.geojson"
var tectonicPlates = "https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json"

function markerSize(CORN) {
  return CORN * 20000;
}

function markerColor(CORN) {
  if (CORN <= 10000) {
      return "#7CFC00";
  } else if (CORN <= 50000) {
      return "#ADFF2F";
  } else if (CORN <= 100000) {
      return "#FFD700";
  } else if (CORN <= 150000) {
      return "#FFA500";
  } else if (CORN <= 200000) {
      return "#FF8C00";
  } else {
      return "#FF0000";
  };
}

// Perform a GET request to the query URL
d3.json(link, function(data) {
  // Once we get a response, send the data.features object to the createFeatures function
  createFeatures(data.features);
});

function createFeatures(earthquakeData) {

  var earthquakes = L.geoJSON(earthquakeData, {
  // Define a function we want to run once for each feature in the features array
  // Give each feature a popup describing the place and time of the earthquake
 onEachFeature : function (feature, layer) {

    layer.bindPopup("<h3>" + feature.properties.STATE +
      "</h3><hr><p>" + (feature.properties.CNTYNAME) + "</p>" + 
      "<p> Bushels: " +  feature.properties.CORN + "</p>")
    },     pointToLayer: function (feature) {
      return {//radius: markerSize(feature.properties.CORN),
        fillColor: markerColor(feature.properties.CNTYNAME),
        fillOpacity: .9,
        stroke: true,
        color: "gray",
        weight:0.7,
    }
  }
  });
    


// Sending our earthquakes layer to the createMap function
  createMap(earthquakes);
}

function createMap(earthquakes) {

  // Define map layers
  var streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
  });

  var grayscale = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.light",
    accessToken: API_KEY
  });

  var outdoors = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.outdoors",
    accessToken: API_KEY
  });

  var plates = new L.LayerGroup();
  d3.json(tectonicPlates, function(plate){
    L.geoJson(plate,{
      weight:3,
      color: "#FFA500",
      fillOpacity:0
    })
    .addTo(plates);
  });
 

  // Define a baseMaps object to hold our base layers
  var baseMaps = {
    "Street Map": streetmap,
    "Grayscale": grayscale,
    "Outdoors": outdoors
  };

  // Create overlay object to hold our overlay layer
  var overlayMaps = {
    "Earthquakes": earthquakes,
    "FaultLines": plates
  };

  // Create our map, giving it the satellitemap and earthquakes layers to display on load
  var myMap = L.map("map", {
    center: [37.09,-95.75],
    zoom: 5,
    layers: [streetmap, earthquakes, plates]
  });

  // Create a layer control
  // Pass in our baseMaps and overlayMaps
  // Add the layer control to the map
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);


  function getColor(CORN) {
    return CORN> 5 ? "#FF0000":
    CORN>4?"#FF8C00":
    CORN>3?"#FFA500":
    CORN>2?"#FFD700":
    CORN>1? "#ADFF2F":
    CORN>0? "#7CFC00":
    "FFEDA0"
  };

  // Set up the legend
  var legend = L.control({ position: "bottomright" });
  legend.onAdd = function() {
    var div = L.DomUtil.create("div", "info legend");
    magnitude= [0,1,2,3,4,5],
    labels=[];
  //Loop magnitude values
  for (var i = 0; i < magnitude.length; i++) {
    div.innerHTML += '<i style="background:' + getColor(magnitude[i] + 1) + '"></i> ' 
    + magnitude[i] + (magnitude[i + 1] ? '&ndash;' + magnitude[i + 1] + '<br>' : '+');
    };
    return div;

};

  legend.addTo(myMap);


};


