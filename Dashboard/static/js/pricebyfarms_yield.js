function init() {
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
    12425330000,
    12313956000,
    10755111000,
    13830704000,
    14217292000,
    13601964000,
    15148038000,
    14609407000,
    14420101000,
    13799151000
  ];

  yield1 = [
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

  market = [
    12425330000 / 5823.0,
    12313956000 / 5652.0,
    10755111000 / 5530.0,
    13830704000 / 6430.0,
    14217292000 / 6737.0,
    13601964000 / 6577.0,
    15148038000 / 6588.0,
    14609407000 / 6829.0,
    14420101000 / 6714.0,
    13799151000 / 5318.4
  ];

  years = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019];

  var trace1 = {
    x: years,
    y: yield1,
    yaxis: "y2",
    name: "yield",
    marker: {
      color: "orange"
    },
    type: "scatter"
  };

  var trace2 = {
    x: years,
    y: production,
    name: "planted",
    marker: {
      color: "lightblue"
    },
    type: "bar"
  };

  var trace3 = {
    x: years,
    y: market,
    yaxis: "y2",
    name: "corn on market",
    marker: {
      color: "red"
    },
    type: "scatter"
  };

  var data = [trace1, trace2, trace3];

  var layout = {
    title: "Corn Planted vs Yield",
    yaxis: { title: "Bushels" },
    yaxis2: {
      title: "Bushels per Acre",
      overlaying: "y",
      side: "right"
    },
    yaxis3: {
      title: "Bushels on Market",
      overlaying: "y",
      side: "right"
    }
  };

  Plotly.newPlot("plot", data, layout);
}

init();

// Plotly.d3.csv("/csv", function(err, rows) {
//   function unpack(rows, key) {
//     return rows.map(function(row) {
//       return row[key];
//     });
//   }

//   var allStateNames = unpack(rows, "State"),
//     allYear = unpack(rows, "Year"),
//     allValue = unpack(rows, "Value"),
//     listofStates = [],
//     currentCountry,
//     currentValue = [],
//     currentYear = [];

//   for (var i = 0; i < allStateNames.length; i++) {
//     if (listofStates.indexOf(allStateNames[i]) === -1) {
//       listofStates.push(allStateNames[i]);
//     }
//   }

//   function getStateData(chosenState) {
//     currentValue = [];
//     currentYear = [];
//     for (var i = 0; i < allStateNames.length; i++) {
//       if (allStateNames[i] === chosenState) {
//         currentValue.push(allValue[i]);
//         currentYear.push(allYear[i]);
//       }
//     }
//   }

//   // Default Country Data
//   setBubblePlot("ALABAMA");

//   function setBubblePlot(chosenState) {
//     getStateData(chosenState);

//     var trace1 = {
//       x: currentYear,
//       y: currentValue,
//       mode: "lines+markers",
//       marker: {
//         size: 12,
//         opacity: 0.5
//       }
//     };

//     var data = [trace1];

//     var layout = {
//       title: "Line and Scatter Plot",
//       height: 400,
//       width: 480
//     };

//     Plotly.newPlot("plot", data, layout);
//   }

//   var innerContainer = document.querySelector('[data-num="0"'),
//     plotEl = innerContainer.querySelector(".plot"),
//     stateSelector = innerContainer.querySelector(".statedata");

//   function assignOptions(textArray, selector) {
//     for (var i = 0; i < textArray.length; i++) {
//       var currentOption = document.createElement("option");
//       currentOption.text = textArray[i];
//       selector.appendChild(currentOption);
//     }
//   }

//   assignOptions(listofStates, stateSelector);

//   function updateState() {
//     setBubblePlot(stateSelector.value);
//   }

//   stateSelector.addEventListener("change", updateState, false);
// });
