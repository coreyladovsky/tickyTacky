const Board = require("./board");

class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.currentPlayer = player1;
    this.board = new Board();
  }


  switchPlayers() {
    this.currentPlayer =
      this.currentPlayer === this.player1 ? this.player2 : this.player1;
  }

  recieveMove(move) {
    let moveMade = false;
    if(this.board.isValidMove(move)) {
      this.board.placeMark(move, this.currentPlayer.sym);
      this.switchPlayers();
      // moveMade = true;
    }
  }

  // play() {
  //   while(!this.board.isGameOver()) {
  //     this.takeTurn(this.currentPlayer);
  //     this.switchPlayers();
  //   }
  // }
}

module.exports = Game;
