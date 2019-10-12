// Store our API endpoint inside queryUrl
//var link = "https://www1.ncdc.noaa.gov/pub/data/nidis/geojson/county/agcounty/geoag/ILmax.geojson";
//var IA= "https://www1.ncdc.noaa.gov/pub/data/nidis/geojson/county/agcounty/geoag/IAmax.geojson";
var link ="static/data/ProductsByCounty.geojson";
var droughtData ="static/js/droughtData.geojson"

var map = L.map("map", {
  center: [37.09, -95.75],
  zoom: 5
});

// Adding tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(map);

//L.geoJson(statesData).addTo(map)

// //Legend Color
// function getcolor(CORN){
//   return CORN>200000? "#FF0000":
//   CORN > 150000? "#FF8C00":
//   CORN > 100000? "#FFA500": 
//   CORN > 50000?"#FFD700":
//   CORN > 10000?"#ADFF2F":
//   CORN < 0? "#7CFC00":
//   "#808080";
// };

// var legend = L.control({position: "bottomright"});
// legend.onAdd = function(){
//   var div = LDomUtil.create("div", "info legend");
//   bushels = [-1,0,10000,50000,100000,150000,200000],
//   lables=[];

//   for (var i = -1; i< bushels.length; i++){
//     div.innerHTML +='<i style="background:' + getcolor(bushels[i]+1)+'"></i>'+
//     bushels[i]+(bushels[i+1]?'&ndash;'+bushels[i+1]+'<br>':'+');
//   };
//   return div;
// };
//   legend.addTo(map);


// Function that will determine the color of a COUNTY based on the CORN Bushels
function chooseColor(DROUGHTCAT) {
  if (DROUGHTCAT == "d0") {
      return "#FFFF00";
  } else if (DROUGHTCAT == "d1") {
      return "#FCD37F";
  }else if (DROUGHTCAT == "d2") {
      return "#FFAA00";
  } else if (DROUGHTCAT == "d3") {
      return "#E60000";
  } else if (DROUGHTCAT == "d4") {
      return "#730000";
  };
}

// //Legend Color
// function getcolor(CORN){
//   return CORN>200000? "#FF0000":
//   CORN > 150000? "#FF8C00":
//   CORN > 100000? "#FFA500": 
//   CORN > 50000?"#FFD700":
//   CORN > 10000?"#ADFF2F":
//   CORN < 0? "#7CFC00":
//   "#808080";
// };

// var legend = L.control({position: "bottomright"});
// legend.onAdd = function(){
//   var div = LDomUtil.create("div", "info legend");
//   bushels = [-1,0,10000,50000,100000,150000,200000],
//   lables=[];

//   for (var i = -1; i< bushels.length; i++){
//     div.innerHTML +='<i style="background:' + getcolor(bushels[i]+1)+'"></i>'+
//     bushels[i]+(bushels[i+1]?'&ndash;'+bushels[i+1]+'<br>':'+');
//   };
//   return div;
// };
//   legend.addTo(map);
var sliderControl = null;
// Grabbing our GeoJSON data..
d3.json(link, function() {
  // Creating a geoJSON layer with the retrieved data
 //State lines layer
  // L.geoJson(data,{
  //   style:function(){
  //     return{
  //       color:"black",
  //       fillColor:"gray",
  //       fillOpacity:0.1,
  //       weight: 1.5 ////FIX THIS!!!!!
  //     };
  //   }
  // }).addTo(map);

  //county layer
 var mylayer= L.geoJson(droughtData, {
    // Style each feature (in this case a CORN)
    style: function(feature) {
      return {
        color: "black",
        // Call the chooseColor function to decide which color to color our CORN (color based on CNTYNAME)
        fillColor: chooseColor(feature.properties.DROUGHTCAT),
        fillOpacity: 0.5,
        weight: 1.5 //// OR FIX THIS ----- ALSO ADD A visualization as the map zooms in.
      };
    },


    // Called on each feature
    onEachFeature: function(feature, layer) {
      // Set mouse events to change map styling
      layer.on({
        // When a user's mouse touches a map feature, the mouseover event calls this function, that feature's opacity changes to 90% so that it stands out
        mouseover: function(event) {
          layer = event.target;
          layer.setStyle({
            fillOpacity: 0.9
          });
        },
        // When the cursor no longer hovers over a map feature - when the mouseout event occurs - the feature's opacity reverts back to 50%
        mouseout: function(event) {
          layer = event.target;
          layer.setStyle({
            fillOpacity: 0.5
          });
        },
        // // When a feature (CORN) is clicked, it is enlarged to fit the screen
        // click: function(event) {
        //   map.fitBounds(event.target.getBounds());
        // }
      });
      // Giving each feature a pop-up with information pertinent to it
      layer.bindPopup("<h3> DATE: " +feature.properties.YEAR_MONTH +"</h3>"
      + "<hr>" +"<h3> Level: " + feature.properties.DROUGHTCAT + "</h3>");
    
    
    //function getcolor(CORN)

    }

      


  }).addTo(map);
  //State Grid
 // L.geoJson(statesData).addTo(map)
console.log(droughtData["features"]);
console.log(droughtData["features"][0]);
 var sliderControl = L.control.sliderControl({
   position: "topright",
   layer: mylayer
 });
 
 map.addControl(sliderControl);
 
 sliderControl.startSlider();

});