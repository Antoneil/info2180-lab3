document.addEventListener("DOMContentLoaded", function () {
  // Get a reference to the game board
  var board = document.getElementById("board");

  // Create an array to hold the class names for each square
  var classNames = ["top-left", "top-center", "top-right", "middle-left", "middle-center", "middle-right", "bottom-left", "bottom-center", "bottom-right"];

  // Initialize game state variables
  var currentPlayer = "X"; // Start with "X"
  var gameBoard = ["", "", "", "", "", "", "", "", ""]; // Initialize an empty game board

  // Loop through each square and add the appropriate class, event listeners
  for (var i = 0; i < board.children.length; i++) {
    var square = board.children[i];
    square.classList.add("square", classNames[i]);

    square.addEventListener("click", function () {
      if (this.textContent === "") {
        // Update the square with the current player (X or O)
        this.textContent = currentPlayer;
        this.classList.add(currentPlayer);

        // Update the game state array
        gameBoard[classNames.indexOf(this.classList[1])] = currentPlayer;

        // Toggle the current player
        currentPlayer = currentPlayer === "X" ? "O" : "X";
      }
    });

    square.addEventListener("mouseover", function () {
      // Add the 'hover' class when the mouse hovers over the square
      this.classList.add("hover");
    });

    square.addEventListener("mouseout", function () {
      // Remove the 'hover' class when the mouse leaves the square
      this.classList.remove("hover");
    });
  }
});
