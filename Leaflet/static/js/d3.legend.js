
  function getColor(corn) {
    return corn> 200000 ? "#FF0000":
    corn>150000?"#FF8C00":
    corn>100000?"#FFA500":
    corn>50000?"#FFD700":
    corn>10000? "#ADFF2F":
    corn>0? "#7CFC00":
    "808080"
  };



 var legend = L.control({ position: "bottomright" });
 legend.onAdd = function() {
   var div = L.DomUtil.create("div", "info legend");
   corn= [0, 10000, 50000, 100000, 150000, 200000],
   labels=[];
 //Loop corn values
 for (var i = 0; i < corn.length; i++) {
   div.innerHTML += '<i style="background:' + getColor(corn[i] + 1) + '"></i> ' 
   + corn[i] + (corn[i + 1] ? '&ndash;' + corn[i + 1] + '<br>' : '+');
   };
   return div;

};

 legend.addTo(map);
