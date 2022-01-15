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

        //         // get table references
        //         var tbody = d3.select("tbody");

        //         // initialize html table body
        //         tbody.html("");

        //         // Loop through each object in the data
        //         // and append a row and cells for each value in the row
        //         result.forEach(resultRow => {
        //             KeyValues =
        //                 Object.entries(result).forEach(([key, value]) => {
        //                     sampleMetadata.append("td").text(`${key.toUpperCase().slice(0,1)+key.slice(1)}: ${value}`);
        //                 });
        //             let row = tbody.append("tr");
        //             KeyValues.values(resultRow).forEach((KVPRow) => {
        //                 let cell = row.append("td");
        //                 cell.text(KVPRow);
        //                 // sampleMetadata..text(`${key.toUpperCase().slice(0,1)+key.slice(1)}: ${value}`);
        //                 // cell.text(val);
        //             });
        //         });
        //     })
        // };
        // load results
        Object.entries(result).forEach(([key, value]) => {
            sampleMetadata.append("h5").text(`${key.toUpperCase().slice(0,1)+key.slice(1)}: ${value}`);
        });
    });
}

// rendering of Charts 
function buildCharts(subjectsId) {
    // d3.json to load and retrieve the samples.json file 
    d3.json("samples.json").then((testSubjectData) => {

        //**********************// 
        //*  BEGIN BAR CHART   *//
        //**********************//

        // get all sample data in samples.json
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
        (1, 20, 100)
        //console.log(otuIds);
        var otuLabels = result.otu_labels;
        //console.log(otuLabels);
        var sampleValues = result.sample_values;
        (500, 300, 20)
        //console.log(sampleValues);

        //ytick marks (These are the 10 largest otu_ids for selected test subject's id.)
        var ytickSlcRev = otuIds.slice(0, 10) //.reverse()
            //console.log(ytickSlcRev);
            // console.log(otuIds);
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
        // nameing Create the layout for the bar chart. 
        var barLayout = {
            title: "Top 10 Kinds of Belly Jam Found",
            xaxis: { title: "OTU Samples" },
            // yaxis: {}
            yaxis: { autorange: "reversed" },
            margin: { width: 200, height: 100, t: 80, b: 100 }
        };

        // //10. Use Plotly to plot the data with the layout. 
        Plotly.newPlot("bar", barData, barLayout)

        //**********************// 
        //* BEGIN BUBBLE CHART *//
        //**********************//
        // text = "${otuIds.map(ids => ids)},sampleValues.map(value => value)
        // 1. Create the trace for the bubble chart.
        var bubbleData = [{
            x: otuIds.map(ids => ids), // s/b the otu_id
            y: sampleValues.map(value => value), // sample_values as y-axix
            text: otuLabels,
            mode: 'markers',
            marker: {
                color: otuIds,
                colorscale: 'Portland',
                size: sampleValues // sample values
            }
        }];

        // 2. Create the layout for the bubble chart.
        var bubbleLayout = {
            title: 'How Much Bacteria is in Each Person"s Belly Button?',
            xaxis: { title: "OTU Ids" },
            // yaxis: { title: "Sample Values" }
            margin: { l: 100 },
            showledgend: false,
            height: 600,
            length: 600,
            hovermode: 'closest'
        };

        // 3. Use Plotly to plot the data with the layout.
        Plotly.newPlot('bubble', bubbleData, bubbleLayout);


        // //***********************// 
        // //* BEGIN GAGE CHARTING *//
        // //***********************//
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
                // margin: { t: 300 },
                // delta: { reference: 10 },
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

            // 5. Create the layout for the gauge chart.
            var gaugeLayout = { width: 420, height: 400, margin: { t: 80, b: 10 } };

            // 6. Use Plotly to plot the gauge data and layout.
            Plotly.newPlot('gauge', gaugeData, gaugeLayout);
        });



    });
}