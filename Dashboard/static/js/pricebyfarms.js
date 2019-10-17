price = [
  3.9107407407222223,
  6.206018518666668,
  6.772083333277777,
  6.189490740833333,
  4.19986111111111,
  3.7986111109999996,
  1.2983166666200001,
  1.5271,
  2.1012999999799997,
  2.0060500000000006
];

production = [
  303056829.26829267,
  300340390.24390244,
  262319780.4878049,
  337334243.902439,
  346763219.5121951,
  323856285.71428573,
  360667571.4285714,
  347843023.8095238,
  343335738.0952381,
  418156090.90909094
];

yield = [
  5823.0,
  5652.0,
  5530.0,
  6430.0,
  6737.0,
  6577.0,
  6588.0,
  6829.0,
  6714.0,
  5318.4
];

years = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019];

var trace1 = {
  x: years,
  y: yield,
  yaxis: "y2",
  name: "yield",
  type: "scatter"
};

var trace2 = { x: years, y: price, name: "price", type: "bar" };

var data = [trace1, trace2];

var layout = {
  title: "Corn Price and Production",
  yaxis: { title: "Price (Dollars per Bushel)" },
  yaxis2: {
    title: "Millions of Bushels",
    overlaying: "y",
    side: "right"
  }
};

Plotly.newPlot("plot", data, layout);
