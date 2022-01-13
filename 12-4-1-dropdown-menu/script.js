// create an event listener
d3.selectAll("body").on("change", updatePage);

// performed when HTML body is changed
function updatePage() {
    var dropdownMenu = d3.selectAll("#selectOption").node();
    var dropdownMenuID = dropdownMenu.id;
    var selectedOption = dropdownMenu.value;


    //var selectedText = dropdownMenu.node().value

    //console.log(dropdownMenu);
    //console.log(dropdownMenuID);
    console.log(selectedOption);

    //console.log(selectText);
    //console.log(d3.selectAll('#menu').selection.text());
    console.log(d3.selectAll("#selectOption").value);

};

console.log(d3.selectAll("#menu").node().value);

//console.log(d3.selectedOption);