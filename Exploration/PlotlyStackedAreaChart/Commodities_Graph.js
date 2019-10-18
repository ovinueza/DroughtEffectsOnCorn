var trace1 = {
  y: ['Corn', 'Sugar', 'Soybeans', 'Wheat', 'Cotton', 'Livestock',
  'Peanuts', 'Hay & forage', 'Sorghum', 'Rice', ], 
    x: [2.34481e+03, 1.51734e+03, 1.20719e+03, 9.11530e+02, 8.33670e+02,
    2.90500e+02, 2.31050e+02, 1.85230e+02, 1.67360e+02, 8.61900e+01,
    ],
  type: 'bar',
  orientation: 'h',
  name: 'Subsidies (in Millions of $Dollars)',
  marker: {
    color: 'rgb(49,130,189)',
    opacity: 0.7,
   
  }


};




var data = [trace1];

var layout = {
  title: 'Top 10 Commodities by Subsidies (USD in Millions)',
  yaxis: {
    tickangle: -36,
    autotick: false,
    ticks: 'outside',
    tick0: 0,
    dtick: 0.25,
    ticklen: 8,
    tickwidth: 4,
  },
  xaxis: {
    tickformat: '$',
    

  },
  barmode: 'group'
};




Plotly.newPlot('bar', data, layout);