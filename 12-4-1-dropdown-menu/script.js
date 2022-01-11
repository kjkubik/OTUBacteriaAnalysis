// create an event listener
d3.selectAll("body").on("change", updatePage);

// performed when HTML body is changed
function updatePage() {
    var dropdownMenu = d3.selectAll("#selectOption");
    var dropdownMenuID = dropdownMenu.id;
    var selectedOption = dropdownMenu.value;
    //var Text = dropdownMenuID.property("value");
    //var selectedText = dropdownMenu.node().value

    console.log(dropdownMenu);
    console.log(dropdownMenuID);
    console.log(selectedOption);

    //console.log(selectText);
    //console.log(d3.selectAll('#menu').selection.text());
    //console.log(d3.selectAll("#selectOption").value);
};

console.log(d3.selectAll("#menu").node().id);

//console.log(d3.selectedOption);