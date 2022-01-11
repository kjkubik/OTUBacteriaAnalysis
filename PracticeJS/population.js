// console.log(cityGrowths);

// getting to know my data
// var sortedCities = cityGrowths.sort((a, b) => a.Increase_from_2016 - b.Increase_from_2016);
// console.log(sortedCities);

// don't have to do this because cities are already in order by Increase_from_2016; 
// but for useability stake and data integrety it is best to use

//* POPULATION GROWTH *//
// sort cities by population growth
var sortedCities = cityGrowths.sort((a, b) => a.Increase_from_2016 - b.Increase_from_2016).reverse();
console.log(sortedCities);

// top 5 cities with the largest population growth
var topFiveCities = sortedCities.slice(0, 5);
console.log(topFiveCities);

// city names with the largest population growth
var topFiveCityNames = topFiveCities.map(city => city.City);
console.log(topFiveCityNames);

// population growth of the first 5 cities
var topFiveCityGrowths = cityGrowths.map(city => parseInt(city.Increase_from_2016));
console.log(topFiveCityGrowths);

//bar graph of city names and their increase in population in 2016
var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
};
var data = [trace];
var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: { title: "City" },
    yaxis: { title: "Population Growth, 2016-2017" }
};
Plotly.newPlot("bar-plot", data, layout);

// bar graph of actual population for each city
var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
};
var data = [trace];
var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: { title: "City" },
    yaxis: { title: "Population Growth, 2016-2017" }
};
Plotly.newPlot("bar-plot", data, layout);

//* POPULATION *//
// Sort cities by population
var sortedCitiesByPopulation = cityGrowths.sort((a, b) => a.population - b.population).reverse();
console.log(sortedCitiesByPopulation);

// Cities with the 7 largest population
var topSevenCitysData = sortedCitiesByPopulation.slice(0, 7);
console.log(topSevenCitysData);

// City names of the cities with the larget population
var topSevenCityNames = topSevenCitysData.map(city => city.City);
console.log(topSevenCityNames);

// Populations of the cities with the largest population
var topSevenCityPopulations = topSevenCitysData.map(city => parseInt(city.population));
console.log(topSevenCityPopulations);

//bar graph of city names and their populations
var trace1 = {
    x: topSevenCityNames,
    y: topSevenCityPopulations,
    type: "bar"
};
var data1 = [trace1];
var layout1 = {
    title: "Population of Cities Growing the Fastest",
    xaxis: { title: "City" },
    yaxis: { title: "Population, 2016-2017" }
};
Plotly.newPlot("bar-plot", data1, layout1);