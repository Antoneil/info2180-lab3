document.addEventListener("DOMContentLoaded", function () {
  // Get a reference to the game board
  var board = document.getElementById("board");

  // Create an array to hold the class names for each square
  var classNames = ["top-left", "top-center", "top-right", "middle-left", "middle-center", "middle-right", "bottom-left", "bottom-center", "bottom-right"];

  // Initialize game state variables
  var currentPlayer = "X"; // Start with "X"
  var gameBoard = ["", "", "", "", "", "", "", "", ""]; // Initialize an empty game board

  // Function to check for a winner
  function checkWinner() {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6]            // Diagonals
    ];

    for (const pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (gameBoard[a] !== "" && gameBoard[a] === gameBoard[b] && gameBoard[b] === gameBoard[c]) {
        document.getElementById("status").textContent = `Congratulations! ${gameBoard[a]} is the Winner!`;
        document.getElementById("status").classList.add("you-won");
        return;
      }
    }
  }

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

        // Check for a winner
        checkWinner();

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

  // Get a reference to the "New Game" button by its class name
  var newGameButton = document.querySelector(".btn");

  // Add an event listener to the "New Game" button
  newGameButton.addEventListener("click", function () {
    // Clear the game board and reset the game state
    for (var i = 0; i < board.children.length; i++) {
      var square = board.children[i];
      square.textContent = ""; // Clear the X or O
      square.classList.remove("X", "O"); // Remove X and O classes
    }

    // Reset the game state variables
    currentPlayer = "X";
    gameBoard = ["", "", "", "", "", "", "", "", ""];

    // Reset the status message
    var statusMessage = document.getElementById("status");
    statusMessage.textContent = "Move your mouse over a square and click to play an X or an O.";
    statusMessage.classList.remove("you-won");
  });
});
