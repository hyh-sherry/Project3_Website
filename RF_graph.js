//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Ramdom Tree Features Importances for year model
 var feature_importances = [[0.12478, 'duration_ms'],
 [0.12285209790467314, 'loudness'],
 [0.09632080010895092, 'energy'],
 [0.09198440751522265, 'speechiness'],
 [0.08849494707341848, 'valence'],
 [0.08747194565287432, 'tempo'],
 [0.08668254859095076, 'acousticness'],
 [0.08342223384926394, 'danceability'],
 [0.08271786691020827, 'liveness'],
 [0.06618094460422495, 'instrumentalness'],
 [0.05074415833211255, 'key'],
 [0.0136073681139339, 'mode'],
 [0.004736745940198093, 'time_signature']]

 
 var weight = feature_importances.map(function(item, index) {
    return ((item[0]).toFixed(4)+'%');
  });

//  console.log(weight);

 var feature = feature_importances.map(function(item, index) {
    return item[1];
  });

//  console.log(feature);

var trace1 = {
      y: feature,
      x: weight,
      type: "bar",
      text: feature,
      orientation: "h"
    
    };

var layout = {
        title: "Feauture Importances of Random Forest - Published Year Prediction",
        xaxis: { title: "Weights",tickformat: ',.2%'},
        yaxis: { title: "Features",autorange:"reversed"},
        
        margin: {
          l: 100,
          r: 100,
          t: 100,
          b: 100
        }};
      
var dataforbar = [trace1];

    //plot the bar chart
Plotly.newPlot("feature_importances", dataforbar,layout);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Primary features 3D chart 
Plotly.d3.csv('3d_RandomForest.csv', function(err, rows){
    function unpack(rows, key) {
      return rows.map(function(row)
      { return row[key]; });}
  
    var trace1990 = {
      x:unpack(rows, 'duration_ms_1990'), y: unpack(rows, 'loudness_1990'), z: unpack(rows, 'speechiness_1990'),
      name: '1990',
      mode: 'markers',
     
      marker: {
        size: 5,
        line: {
        color: 'rgba(217, 217, 217, 0.14)',
        width: 0.5},
        opacity: 0.6},
      type: 'scatter3d'
      };
  
      var trace2000 = {
        x:unpack(rows, 'duration_ms_2000'), y: unpack(rows, 'loudness_2000'), z: unpack(rows, 'speechiness_2000'),
        name:'2000',
        mode: 'markers',
        marker: {
          size: 5,
          line: {
          color: 'rgba(234, 18, 14, 0.14)',
          width: 0.5},
          opacity: 0.6},
        type: 'scatter3d'
        };
      
        var trace2010 = {
          x:unpack(rows, 'duration_ms_2010'), y: unpack(rows, 'loudness_2010'), z: unpack(rows, 'speechiness_2010'),
          mode: 'markers',
          name:"2010",
          marker: {
            size: 5,
            line: {
            color: 'rgba(244, 248, 37, 0.14)',
            width: 0.5},
            opacity: 0.6},
          type: 'scatter3d'
          };
  
        var trace2019 = {
            x:unpack(rows, 'duration_ms_2019'), y: unpack(rows, 'loudness_2019'), z: unpack(rows, 'speechiness_2019'),
            mode: 'markers',
            name:"2019",
            marker: {
              size: 5,
              line: {
              color: 'rgba(37, 248, 40, 0.14)',
              width: 0.5},
              opacity: 0.6},
            type: 'scatter3d'
            };
  
      var data = [trace1990,trace2000,trace2010,trace2019];
      var layout2 = {margin: {
        l: 0,
        r: 0,
        b: 0,
        t: 0
        }};
  
      Plotly.newPlot('3d', data, layout2);
  
  });

// Ramdom Tree Features Importances for popularity model
var feature_importances2 = [[0.11043033537036605, 'speechiness'],
  [0.11030668722446511, 'duration_ms'],
  [0.10079099671720887, 'tempo'],
  [0.09575117609070352, 'loudness'],
  [0.08817878069543118, 'instrumentalness'],
  [0.08689751084986462, 'acousticness'],
  [0.085906870322989, 'valence'],
  [0.08533999250034477, 'energy'],
  [0.08357862714606375, 'liveness'],
  [0.08251592925401793, 'danceability'],
  [0.0493828610150668, 'key'],
  [0.014017307284972141, 'mode'],
  [0.006902925528506188, 'time_signature']];
 
  
var weight2 = feature_importances2.map(function(item, index) {
  return ((item[0]).toFixed(4)+'%');
});
 
// console.log(weight);
 
var feature2 = feature_importances2.map(function(item, index) {
  return item[1];
});
 
// console.log(feature);
 
var trace2 = {
    x: weight2,
    y: feature2,
    type: "bar",
    text: feature2,
    orientation: "h"
};
 
var layout2 = {
    title: "Feauture Importances of Random Forest - Popularity Prediction",
    xaxis: { title: "Weights",tickformat: ',.2%'},
    yaxis: { title: "Features",autorange:"reversed"},
         
    margin: {
      l: 100,
      r: 100,
      t: 100,
      b: 100
    }};
       
var dataforbar2 = [trace2];
 
//plot the bar chart
Plotly.newPlot("feature_importances2", dataforbar2,layout2);