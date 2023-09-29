$(document).ready(function () {
  var $selectableCells = $("tbody td").not(':contains("Not Available")');

  $selectableCells.click(function () {
    var $cell = $(this);
    var content = $cell.text();

    var columnIndex = $cell.index();
    var heading = $("thead th").eq(columnIndex).text();
    var displayText =
      heading === "Activity"
        ? content
        : content + ' <span class="cliff-site">at ' + heading + "</span>";

    $cell.toggleClass("selected");

    //check if selected cell has class
    if ($cell.hasClass("selected")) {
      $("#displaySelected").css("visibility", "visible"); //make display box visible
      $("#displaySelected").css("margin-top", "2em"); //add spaces above display box
      $("#result").append("<p>" + displayText + "</p>"); //add child element with contents of cell
    } else {
      $("#result p:contains(" + content + ")").remove(); //remove child element
      if ($("#result").has("p").length == false) {
        //check if there are any child elements within parent
        $("#displaySelected").css("visibility", "hidden"); //make display box hidden
        $("#displaySelected").css("margin-top", "0"); //remove spaces above display box
      }
    }
  });

  $selectableCells.css("cursor", "pointer");
});
