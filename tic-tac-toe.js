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

document.addEventListener("DOMContentLoaded", function () {
  var board = document.getElementById("board");
  var squares = board.getElementsByClassName("square");
  var currentPlayer = "X"; // Start with "X"
  var gameBoard = ["", "", "", "", "", "", "", "", ""]; // Initialize an empty game board

  for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function () {
      var square = this;

      // Check if the square is empty (not already marked)
      if (square.textContent === "") {
        // Update the square with the current player (X or O)
        square.textContent = currentPlayer;
        square.classList.add(currentPlayer);

        // Update the game state array
        gameBoard[i] = currentPlayer;

        // Toggle the current player
        currentPlayer = currentPlayer === "X" ? "O" : "X";
      }
    });
  }
});