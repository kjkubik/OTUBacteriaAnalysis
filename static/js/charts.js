//****************************
//* BELLY BUTTON JAM WEBPAGE *
//****************************

// populate dropdown list
function init() {
    // name location where test_subject_id  
    // is going to be loaded into index.htm.
    var selector = d3.select("#selDataset");
    d3.json("static/json/samples.json").then((testSubjectData) => {

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

//**********************
//* Demographics Panel *
//********************** 
function buildMetadata(subjectsId) {
    //console.log(subjectsId);
    d3.json("static/json/samples.json").then((testSubjectData) => {
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

        Object.entries(result).forEach(([key, value]) => {
            sampleMetadata.append("h5").text(`${key.toUpperCase().slice(0,1)+key.slice(1)}: ${value}`);
        });
    });
}

//****************   
// Create Charts * 
//****************

function buildCharts(subjectsId) {
    // d3.json to load and retrieve the static/json/samples.json file 
    d3.json("static/json/samples.json").then((testSubjectData) => {

        //**********************// 
        //*  BEGIN BAR CHART   *//
        //**********************//

        // get all sample data in static/json/samples.json
        var sample = testSubjectData.samples;
        // console.log(samples);

        // filter out selected test subject's sample data
        var subjectsSample = sample.filter(sample => sample.id == subjectsId);
        // console.log(subjectsSample);

        // save otu_ids, otu_lables and sample_values of subjectSample
        var result = subjectsSample[0];
        //console.log(result);

        // place otu_ids, otu_labels, and sample_values in own Arrays
        var otuIds = result.otu_ids;
        //console.log(otuIds);
        var otuLabels = result.otu_labels;
        //console.log(otuLabels);
        var sampleValues = result.sample_values;
        //console.log(sampleValues);

        //ytick marks (These are the 10 largest otu_ids for selected test subject's id.)
        var ytickSlcRev = otuIds.slice(0, 10) //.reverse()
            //console.log(ytickSlcRev);

        var editYticks = ytickSlcRev.map(ids => 'OTU' + ids + ' ')
            //console.log(editYticks);

        // trace (naming graph and data used) 
        var barData = [{
            x: sampleValues.map(value => value),
            y: editYticks,
            text: otuLabels.map(labels => labels),
            name: "OTU",
            type: "bar",
            orientation: "h"
        }];

        // layout info for the bar chart 
        var barLayout = {
            title: "Top 10 Kinds of Belly Jam Found",
            xaxis: { title: "OTU Samples" },
            yaxis: { autorange: "reversed" },
            margin: { width: 200, height: 100, t: 80, b: 100 }
        };

        // Plotting with Plotly 
        Plotly.newPlot("bar", barData, barLayout)

        //**********************// 
        //* BEGIN BUBBLE CHART *//
        //**********************//

        // trace for bubble chart.
        var bubbleData = [{
            x: otuIds.map(ids => ids),
            y: sampleValues.map(value => value),
            text: otuLabels,
            mode: 'markers',
            marker: {
                color: otuIds,
                colorscale: 'Portland',
                size: sampleValues
            }
        }];

        // layout info for bubble chart
        var bubbleLayout = {
            title: "How Much Bacteria is in Each Subject's Belly Button?",
            xaxis: { title: "OTU Ids" },
            margin: { l: 100 },
            showledgend: false,
            height: 600,
            length: 600,
            hovermode: 'closest'
        };

        // plot using Plotly
        Plotly.newPlot('bubble', bubbleData, bubbleLayout);


        //***********************// 
        //* BEGIN GAGE CHARTING *//
        //***********************//

        d3.json("static/json/samples.json").then((testSubjectData) => {
            // select all metadata
            var metadata = testSubjectData.metadata;
            //console.log(metadata);

            // select id's metadata (this is an ARRAY)
            var resultArray = metadata.filter(sampleObj => sampleObj.id == subjectsId);
            //console.log(resultArray);

            // put resulting Array into an Object
            var result = resultArray[0];
            console.log(result);


            var timesWashed = parseFloat(result.Washing_Frequency);
            console.log(timesWashed);

            // trace for the gauge chart.
            var gaugeData = [{
                domain: { x: [0, 1], y: [0, 1] },
                value: timesWashed,
                title: {
                    text: "Belly Button Washes<br><sub>(Per Week)</sub>"
                },

                type: "indicator",
                mode: "gauge+number+delta",
                gauge: {
                    axis: { range: [null, 10] },
                    steps: [
                        { range: [0, 2], color: "rgb(102,102,255)" },
                        { range: [2, 4], color: "rgb(77,191,153)" },
                        { range: [4, 6], color: "rgb(230,191,0)" },
                        { range: [6, 8], color: "rgb(255,153,51)" },
                        { range: [8, 10], color: "rgb(217,105,82)" }
                    ],
                    threshold: {
                        line: { color: "rgb(255,128,128)", width: 4 },
                        thickness: 20,
                        value: 10
                    }
                }

            }];

            // layout info for gauge chart
            var gaugeLayout = { width: 420, height: 400, margin: { t: 80, b: 10 } };

            // plot using Plotly
            Plotly.newPlot('gauge', gaugeData, gaugeLayout);
        });
    });
}