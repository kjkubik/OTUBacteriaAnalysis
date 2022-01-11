const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then(receivedData =>
    console.log(receivedData));

d3.json(url).then(spaceXResults =>
    console.log(spaceXResults[0]));

d3.json(url).then(spaceXResults =>
    console.log(spaceXResults[0].full_name));

d3.json(url).then(spaceXResults =>
    console.log(spaceXResults[0].location.latitude + ', ' + spaceXResults[0].location.longitude));


// How do they need to print?
d3.json(url).then(spaceXResults =>
    console.log(spaceXResults.map(locLat => locLat.location.latitude) + ", " +
        spaceXResults.map(locLon => locLon.location.longitude)));

latitude = d3.json(url).then(spaceXResults => spaceXResults.map(locLat => locLat.location.latitude));
longitude = d3.json(url).then(spaceXResults => spaceXResults.map(locLat => locLat.location.longitude));

// I think they want to display/work with it like this
d3.json(url).then(spaceXResults =>
    console.log(spaceXResults.map(locLat => locLat.location.latitude + ", " +
        locLat.location.longitude)));