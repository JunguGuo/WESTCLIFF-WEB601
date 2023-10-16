$(document).ready(function () {
  var $selectableCells = $("tbody td").not(':contains("Not Available")');

  $selectableCells.click(function () {
    var $cell = $(this);
    $cell.toggleClass("selected");

    // Get all selected cells
    var selectedCells = $("tbody td.selected");

    // Clear the current list
    $("#selectedActivities").html("");

    // Loop through all selected cells and add them to the modal content
    selectedCells.each(function () {
      var $cell = $(this);
      var activity = $cell.text(); // get the text from the cell
      var column = $cell.index(); // get the index of the column
      var location = $("thead th").eq(column).text(); // find the corresponding header for the column

      // Append this activity to the modal content
      $("#selectedActivities").append(
        "<li>" + activity + " at " + location + "</li>"
      );
    });

    $("#activitiesModal").modal("show");
  });

  $selectableCells.css("cursor", "pointer");
});
