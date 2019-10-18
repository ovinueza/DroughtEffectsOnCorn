mapboxgl.accessToken = API_KEY;
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/light-v10",
  center: [-95.75, 39.09],
  zoom: 4
});

var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

function MapToMonth(yearMonth) {
  var month = yearMonth.slice(-2);

  switch (month) {
    case "01":
      return 0;
    case "02":
      return 1;
    case "03":
      return 2;
    case "04":
      return 3;
    case "05":
      return 4;
    case "06":
      return 5;
    case "07":
      return 6;
    case "08":
      return 7;
    case "09":
      return 8;
    case "10":
      return 9;
    case "11":
      return 10;
    case "12":
      return 11;
    default:
      return "N/A";
  }
}

// Function that will determine the color of a COUNTY based on the CORN Bushels
function MapToCategory(DROUGHTCAT) {
  if (DROUGHTCAT == "d0") {
    return 1;
  } else if (DROUGHTCAT == "d1") {
    return 2;
  } else if (DROUGHTCAT == "d2") {
    return 3;
  } else if (DROUGHTCAT == "d3") {
    return 4;
  } else if (DROUGHTCAT == "d4") {
    return 5;
  }
}

function filterBy(month) {
  var filters = ["==", "month", month];
  map.setFilter("2012", filters);
  map.setFilter("2016", filters);
  map.setFilter("2017", filters);
  map.setFilter("2018", filters);

  // Set the label to the month
  document.getElementById("month").textContent = months[month];
}

map.on("load", function() {
  // Data courtesy of http://earthquake.usgs.gov/
  // Query for significant earthquakes in 2015 URL request looked like this:
  // http://earthquake.usgs.gov/fdsnws/event/1/query
  //    ?format=geojson
  //    &starttime=2015-01-01
  //    &endtime=2015-12-31
  //    &minmagnitude=6'
  //
  // Here we're using d3 to help us make the ajax request but you can use
  // Any request method (library or otherwise) you wish.
  $.getJSON("static/data/2012.geojson", function(data) {
    data.features = data.features.map(function(d) {
      d.properties.month = MapToMonth(d.properties.YEAR_MONTH);
      d.properties.category = MapToCategory(d.properties.DROUGHTCAT);
      return d;
    });
    map.addSource("drought2012", {
      type: "geojson",
      data: data
    });

    map.addLayer({
      id: "2012",
      type: "fill",
      source: "drought2012",
      layout: {},
      paint: {
        "fill-color": [
          "interpolate",
          ["linear"],
          ["get", "category"],
          1,
          "#FFFF00",
          2,
          "#FCD37F",
          3,
          "#FFAA00",
          4,
          "#E60000",
          5,
          "#730000"
        ],
        "fill-opacity": 0.3
      }
    });
    // Set filter to first month of the year
    // 0 = January
    filterBy(0);

    document.getElementById("slider").addEventListener("input", function(e) {
      var month = parseInt(e.target.value, 10);
      filterBy(month);
    });
  });

  $.getJSON("static/data/2016.geojson", function(data) {
    data.features = data.features.map(function(d) {
      d.properties.month = MapToMonth(d.properties.YEAR_MONTH);
      d.properties.category = MapToCategory(d.properties.DROUGHTCAT);
      return d;
    });
    map.addSource("drought2016", {
      type: "geojson",
      data: data
    });

    map.addLayer({
      id: "2016",
      type: "fill",
      source: "drought2016",
      layout: {},
      paint: {
        "fill-color": [
          "interpolate",
          ["linear"],
          ["get", "category"],
          1,
          "#FFFF00",
          2,
          "#FCD37F",
          3,
          "#FFAA00",
          4,
          "#E60000",
          5,
          "#730000"
        ],
        "fill-opacity": 0.3
      }
    });
    // Set filter to first month of the year
    // 0 = January
    filterBy(0);

    document.getElementById("slider").addEventListener("input", function(e) {
      var month = parseInt(e.target.value, 10);
      filterBy(month);
    });
  });

  $.getJSON("static/data/2017.geojson", function(data) {
    data.features = data.features.map(function(d) {
      d.properties.month = MapToMonth(d.properties.YEAR_MONTH);
      d.properties.category = MapToCategory(d.properties.DROUGHTCAT);
      return d;
    });
    map.addSource("drought2017", {
      type: "geojson",
      data: data
    });

    map.addLayer({
      id: "2017",
      type: "fill",
      source: "drought2017",
      layout: {},
      paint: {
        "fill-color": [
          "interpolate",
          ["linear"],
          ["get", "category"],
          1,
          "#FFFF00",
          2,
          "#FCD37F",
          3,
          "#FFAA00",
          4,
          "#E60000",
          5,
          "#730000"
        ],
        "fill-opacity": 0.3
      }
    });
    // Set filter to first month of the year
    // 0 = January
    filterBy(0);

    document.getElementById("slider").addEventListener("input", function(e) {
      var month = parseInt(e.target.value, 10);
      filterBy(month);
    });
  });

  $.getJSON("static/data/2018.geojson", function(data) {
    data.features = data.features.map(function(d) {
      d.properties.month = MapToMonth(d.properties.YEAR_MONTH);
      d.properties.category = MapToCategory(d.properties.DROUGHTCAT);
      return d;
    });
    map.addSource("drought2018", {
      type: "geojson",
      data: data
    });

    map.addLayer({
      id: "2018",
      type: "fill",
      source: "drought2018",
      layout: {},
      paint: {
        "fill-color": [
          "interpolate",
          ["linear"],
          ["get", "category"],
          1,
          "#FFFF00",
          2,
          "#FCD37F",
          3,
          "#FFAA00",
          4,
          "#E60000",
          5,
          "#730000"
        ],
        "fill-opacity": 0.3
      }
    });
    // Set filter to first month of the year
    // 0 = January
    filterBy(0);

    document.getElementById("slider").addEventListener("input", function(e) {
      var month = parseInt(e.target.value, 10);
      filterBy(month);
    });
  });

  var toggleableLayerIds = ["2012", "2016", "2017", "2018"];

  for (var i = 0; i < toggleableLayerIds.length; i++) {
    var id = toggleableLayerIds[i];

    var link = document.createElement("a");
    link.href = "#";
    link.className = "active";
    link.textContent = id;

    link.onclick = function(e) {
      var clickedLayer = this.textContent;
      e.preventDefault();
      e.stopPropagation();

      var visibility = map.getLayoutProperty(clickedLayer, "visibility");

      if (visibility === "visible") {
        map.setLayoutProperty(clickedLayer, "visibility", "none");
        this.className = "";
      } else {
        this.className = "active";
        map.setLayoutProperty(clickedLayer, "visibility", "visible");
      }
    };

    var layers = document.getElementById("menu");
    layers.appendChild(link);
  }
});
