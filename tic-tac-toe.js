// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get a reference to the game board
  var board = document.getElementById("board");

  // Create an array to hold the class names for each square
  var classNames = ["top-left", "top-center", "top-right", "middle-left", "middle-center", "middle-right", "bottom-left", "bottom-center", "bottom-right"];

  // Loop through each square and add the appropriate class
  for (var i = 0; i < board.children.length; i++) {
    var square = board.children[i];
    square.classList.add("square", classNames[i]);
  }
});