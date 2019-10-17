///Stacked Area Chart

Plotly.d3.csv('https://raw.githubusercontent.com/ovinueza/DroughtEffectsOnCorn/master/Exploration/CleanDataFiles/US_Domestic_Corn_Use/US_Domestic_CornClean.csv',function(data){

  let year = [];
  let AlcoholforFuel = [];
  let FoodSeedIndustrial= [];
  let FeedandResidual =[];

 data.forEach(function(d){
    d.Year= parseInt(d.Year);
    d.AlcoholforFuel= +d.AlcoholforFuel;
    d.FoodSeedIndustrial= +d.FoodSeedIndustrial;
    d.FeedandResidual= +d.FeedandResidual;
    //console.log(data[0]);

    // Create the Traces
  document.getElementById('#graph');
    //console.log(d.AlcoholforFuel);
    // console.log(d.FeedandResidual);
    // console.log(d.AlcoholforFuel);
    // console.log(d.FoodSeedIndustrial);


    year.push(d.Year);
    FeedandResidual.push(d.FeedandResidual);
    AlcoholforFuel.push(d.AlcoholforFuel);
    FoodSeedIndustrial.push(d.FoodSeedIndustrial);
    
    
  });
    //console.log(FoodSeedIndustrial)
    var traces = [ 
       {x: year, y: FeedandResidual, stackgroup: 'one', type: 'scatter', mode: 'none', name:"Feed and Residual"},
        {x: year, y: AlcoholforFuel, stackgroup: 'one', type: 'scatter', mode: 'none', name: "Alcohol for Fuel"},
        {x: year, y: FoodSeedIndustrial, stackgroup: 'one', type: 'scatter', mode: 'none', name: "Other Food, Seed and Industrial"}
     
      
      
     
    ];
    
    // // Create the data array for the plot
    //var data = [traces];
    
    // Define the plot layout
    var layout = {
        title: "US Domestic Corn Use",
        xaxis: {
          title: "Total per Year" },
        yaxis: {
          title: "Billion Bushels" }
      };
      
      // Plot the chart to a div tag with id "plot"
      Plotly.newPlot("graph", traces, layout);
});