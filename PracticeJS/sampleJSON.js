d3.json("samples.json").then(function(data) {
    console.log(data);
});

// // extract wfreq
// d3.json("samples.json").then(function(data) {
//     wfreq = data.metadata.map(person => person.wfreq);
//     console.log(wfreq);
// });

// // sort wfreq
// d3.json("samples.json").then(function(data) {
//     wfreq = data.metadata.map(person =>
//         person.wfreq).sort((a, b) => b - a);
//     console.log(wfreq);
// });

// extract, sort and remove null values for wfreq
d3.json("samples.json").then(function(data) {
    wfreq = data.metadata.map(person =>
        person.wfreq).sort((a, b) => b - a);
    filteredWfreq = wfreq.filter(element => element !=
        null);
    console.log(filteredWfreq);
});

// select each individual's key/value inside object from drop down menu (Listening)
//console.log(Object.entries(researcher1));

// print to console each trait and corresponding property
//data.forEach(([key, value]) =>
//    console.log(key + ": " + value));

// tested NOTE: we will need to choose an ID number from a dropdown
// menu and then display the metadata associated with that ID
d3.json("samples.json").then(function(data) {
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) => { console.log(key + ': ' + value); });
});