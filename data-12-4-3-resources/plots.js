// populate dropdown list
function init() {
    // name location where test_subject_id  
    // is going to be loaded into index.htm.
    var selector = d3.select("#selDataset");
    d3.json("samples.json").then((testSubjectData) => {

        // select all ids
        var testSubjectId = testSubjectData.test_subject_id;
        //console.log(testSubjectId);

        // load ids into dropdown
        testSubjectId.forEach((id) => {
            selector
                .append("option")
                .text(id)
                .property("value", id);
        });

        // select first id for initializing plots
        var firstId = testSubjectId[0];
        // test/debug firstId
        //console.log(firstId);

        buildMetadata(firstId);
        buildCharts(firstId);

    });
};

// Initialize window
init();

// rendering new page
function optionChanged(newId) {
    //console.log("In optionChange with: " + newId);

    // build demographic info
    buildMetadata(newId);
    // build all charts
    buildCharts(newId);
}

// rendering of Demographics Panel 
function buildMetadata(subjectsId) {
    //console.log(subjectsId);
    d3.json("samples.json").then((testSubjectData) => {
        // select all metadata
        var metadata = testSubjectData.metadata;
        //console.log(metadata);

        // select Id's metadata (this is an ARRAY)
        var resultArray = metadata.filter(sampleObj => sampleObj.id == subjectsId);
        //console.log(resultArray);

        // put resulting Array into an Object
        var result = resultArray[0];
        // console.log(result);

        // name the div id in HTML where demographics are listed
        var sampleMetadata = d3.select("#sample-metadata");
        // console.log(sampleMetadata);
        //initialize div
        sampleMetadata.html("");

        // load results
        Object.entries(result).forEach(([key, value]) => {
            sampleMetadata.append("h6").text(`${key.toUpperCase().slice(0,1)+key.slice(1)}: ${value}`);
        });
    });
}

// redering of Bar chart 
function buildCharts(subjectsId) {
    // 2. Use d3.json to load and retrieve the samples.json file 
    d3.json("samples.json").then((testSubjectData) => {
        // select all samples
        var allSamples = testSubjectData.samples;
        //console.log(allSamples);
        // 4. Create a variable that filters the samples for the object with the desired sample number.
        var argsSample = allSamples.filter(sample => sample.id == subjectsId);
        //console.log(argsSample);
        //  5. Create a variable that holds the first sample in the array.
        var result = argsSample[0];
        //console.log(result);

        // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
        var otuIds = argsSample.map(samples => samples.otu_ids);
        //console.log(otuIds);
        var otuLabels = argsSample.map(labels => labels.otu_labels);
        //console.log(otuLabels);
        var sampleValues = argsSample.map(samples => samples.sample_values);
        //console.log(sampleValues);


        //*********************************************************** */
        //* Something is wrong HELP ME WITH THE ARRAY THAT IS NEEDED
        //*********************************************************** */



        // 7. Create the yticks for the bar chart.
        // Hint: Get the the top 10 otu_ids and map them in descending order  
        //  so the otu_ids with the most bacteria are last. 
        var sortOTUIds = otuIds.sort((a, b) => b - a);
        console.log("Sorted: " + sortOTUIds);

        // var numbers = [1, 3, 7, 4, 2, 79, 2, 59, 3]
        // console.log(numbers)
        // var sortNumbers = numbers.sort((a, b) => b - a);
        // console.log(sortNumbers)
        var yticks = sortOTUIds.slice(0, 10);
        console.log(yticks);

        //8. Create the trace for the bar chart. 
        var barData = [{
            x: otuIds.map(object => object.samples),
            y: otuIds.map(object => object.otu_ids),
            text: otuIds.map(object => object.otu_lables),
            name: "OTU",
            type: "bar",
            oreientation: "h"
        }];
        //9. Create the layout for the bar chart. 
        var barLayout = {
            title: "Top 10 Kinds of Belly Jam Found",
            xaxis: { title: "OTU Ids" },
            yaxis: {
                title: "OTU Count",
            }

        };
        //10. Use Plotly to plot the data with the layout. 
        Plotly.newPlot("bar", barData, barLayout)

        //**********************// 
        //* BEGIN BUBBLE CHART *//
        //**********************//

        // 1. Create the trace for the bubble chart.
        var bubbleData = [{
            x: [40, 60, 80, 100], // s/b the otu_id
            y: [40, 60, 80, 100], // sample_values as y-axix
            mode: 'markers', // sample values

            marker: {
                size: [40, 60, 80, 100]
            }
        }];

        // 2. Create the layout for the bubble chart.
        var bubbleLayout = {
            title: 'Marker Size',
            showledgend: false,
            height: 600,
            length: 600
        };

        // 3. Use Plotly to plot the data with the layout.
        Plotly.newPlot('bubble', bubbleData, bubbleLayout);
        //* END BUBBLE CHART *//

        // 4. Create the trace for the gauge chart.
        var gaugeData = [{
            domain: { x: [0, 1, 3, 4, 5, 6], y: [0, 11] },
            value: 270,
            title: "indicator",
            mode: "gauge+number"
        }];

        // 5. Create the layout for the gauge chart.
        var gaugeLayout = { width: 600, height: 500, margin: { t: 0, b: 0 } };

        // 6. Use Plotly to plot the gauge data and layout.
        Plotly.newPlot('gauge', gaugeData, gaugeLayout);

    });
}


// var data = [
// 	{
// 		domain: { x: [0, 1], y: [0, 1] },
// 		value: 2000,
// 		title: { text: "Speed" },
// 		type: "indicator",
// 		mode: "gauge+number"
// 	}
// ];

// var layout = { width: 800, height: 300, margin: { t: 50, b: 10 } };
// Plotly.newPlot('myDiv', data, layout);