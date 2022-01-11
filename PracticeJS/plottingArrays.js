// Plotly.newPlot("plotArea", [{ x: [1, 2, 3], y: [10, 20, 30] }]);

// Plotly.newPlot("plotArea", [{ x: [5, 10, 15], y: [10, 20, 30] }]);

// Plotly.newPlot("plotArea", [{ x: [8, 10, 15], y: [5, 20, 80] }]);

var trace = [{
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    type: "bar"
}];
Plotly.newPlot("plotArea", trace);

// var trace = {
//     x: ["burrito", "pizza", "chicken"],
//     y: [10, 18, 5],
//     type: "bar"
// };

// var layout = {
//     title: "Luncheon Survey",
//     xaxis: { title: "Food Option" },
//     yaxis: { title: "Number of Respondents" }

// };

// // Plotly.newPlot("plotArea", [trace], layout);

// var trace = {
//     x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: "bar"
// };

// var layout = {
//     title: "Nonalcoholic Drinks Served",
//     xaxis: { title: "Drinks Served" },
//     yaxis: { title: "Percent of Drinks Ordered" }

// };

// Plotly.newPlot("plotArea", [trace], layout);

// var trace = {
//     labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
//         "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"
//     ],
//     values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: 'pie'
// };
// var data = [trace];
// var layout = {
//     title: "Nonalcoholic Drinks Served",
// };
// Plotly.newPlot("plotArea", data, layout);

// var trace1 = {
//     x: [1, 2, 3, 4, 5],
//     y: [1, 6, 3, 6, 1],
//     mode: 'markers+text',
//     type: 'scatter',
//     name: 'Team A',
//     text: ['A-1', 'A-2', 'A-3', 'A-4', 'A-5'],
//     textposition: 'top center',
//     textfont: {
//         family: 'Raleway, sans-serif'
//     },
//     marker: { size: 12 }
// };

// var trace2 = {
//     x: [1.5, 2.5, 3.5, 4.5, 5.5],
//     y: [4, 1, 7, 1, 4],
//     mode: 'markers+text',
//     type: 'scatter',
//     name: 'Team B',
//     text: ['B-a', 'B-b', 'B-c', 'B-d', 'B-e'],
//     textfont: {
//         family: 'Times New Roman'
//     },
//     textposition: 'bottom center',
//     marker: { size: 12 }
// };

// var data = [trace1, trace2];

// var layout = {
//     xaxis: {
//         range: [0.75, 5.25]
//     },
//     yaxis: {
//         range: [0, 8]
//     },
//     legend: {
//         y: 0.5,
//         yref: 'paper',
//         font: {
//             family: 'Arial, sans-serif',
//             size: 20,
//             color: 'grey',
//         }
//     },
//     title: 'Data Labels on the Plot'
// };

// Plotly.newPlot('plotArea', data, layout);

// var trace1 = {
//     x: [1, 2, 3, 4],
//     y: [10, 11, 12, 13],
//     mode: 'markers',
//     marker: {
//         size: [40, 60, 80, 100]
//     }
// };

// var data = [trace1];

// var layout = {
//     title: 'Marker Size',
//     showlegend: false,
//     height: 600,
//     width: 600
// };

// Plotly.newPlot('plotArea', data, layout);