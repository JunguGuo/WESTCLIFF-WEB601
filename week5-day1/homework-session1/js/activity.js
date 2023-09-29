$(document).ready(function () {
  var $selectableCells = $("tbody td").not(':contains("Not Available")');

  $selectableCells.click(function () {
    var $cell = $(this);
    $cell.toggleClass("selected");
  });

  $selectableCells.css("cursor", "pointer");
});
