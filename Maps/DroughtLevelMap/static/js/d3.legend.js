
  function getColor(corn) {
    return corn='D4'?"#730000":
    corn='D3'?"#E60000":
    corn='D2'?"#FFAA00":
    corn='D1'? "#FCD37F":
    corn= 'D0'? "#FFFF00":
    "ffffff"
  };



 var legend = L.control({ position: "bottomright" });
 legend.onAdd = function() {
   var div = L.DomUtil.create("div", "info legend");
   corn= ['D0', 'D1', 'D2', 'D3', 'D4'],
   labels=[];
 //Loop corn values
 for (var i = 0; i < corn.length; i++) {
   div.innerHTML += '<i style="background:' + getColor(corn[i] + 1) + '"></i> ' 
   + corn[i] + (corn[i + 1] ? '&ndash;' + corn[i + 1] + '<br>' : '+');
   };
   return div;

};

 legend.addTo(map);
