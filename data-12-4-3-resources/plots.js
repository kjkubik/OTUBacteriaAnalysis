function init() {
    var selector = d3.select("#selDataset");

    d3.json("samples.json").then((data) => {
        console.log(data);
        var sampleNames = data.names;
        sampleNames.forEach((sample) => {
            selector
                .append("option")
                .text(sample)
                .property("value", sample);
        });
    })
}

init();

function optionChanged(newSample) {
    buildMetadata(newSample);
    buildCharts(newSample);
}

function buildMetadata(sample) {
    // from 'samples.json, when give the sample id, 
    //find the metadata and display in Demographic Info panel 
    // when a menu option is selected.

    d3.json("samples.json").then((data) => { //keep this line

        var metadata = data.metadata;
        //console.log(metadata);

        //var resultArray = metadata.filter(sampleObj => sampleObj.id == sample); //delete

        var resultArray = Object.entries(metadata.filter(sampleObj => sampleObj.id == sample))
            //.forEach(([key, value]) => {
            // I AM STUCK IN THE MUD WITH WHAT i AM SUPPOSED TO HAVE HERE. 
            //    resultArray
            //    console.log(key + ': ' + value);
            //});
        console.log(resultArray);
        var result = resultArray[0][1];
        //var result = resultArray;
        var PANEL = d3.select("#sample-metadata");

        PANEL.html("");

        PANEL.append("h6").text(result.age);
        PANEL.append("h6").text(result.ethnicity);
        PANEL.append("h6").text(result.gender);
        PANEL.append("h6").text(result.location);
        PANEL.append("h6").text(result.wfreq);
    });
}
// from 'samples.json, when give the sample id, find the metadata and display in Demographic Info panel 
// when a menu option is selected.
// d3.json("samples.json").then(function(data) {
//     //find the key/value data you want to display
//     person = data.metadata[sample];
//     Object.entries(person).forEach(([key, value]) => {
//         console.log(key + ': ' + value);
//     });
//     // need something like this: metadata.filter(sampleObj => sampleObj.id == sample
// });

// end of change
//     var result = resultArray[0];
//     var PANEL = d3.select("#sample-metadata");

//     PANEL.html("");
//     PANEL.append("h6").text(result.location);
// });
// }