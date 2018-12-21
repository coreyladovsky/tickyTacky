const Board = require("./board");

class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.currentPlayer = player1;
    this.board = new Board();
  }

  restart() {
    this.board = new Board()
  }

  switchPlayers() {
    this.currentPlayer =
      this.currentPlayer === this.player1 ? this.player2 : this.player1;
  }

  recieveMove(move) {
    if(!this.isGameOver()) {
      let moveMade = false;
      if (this.board.isValidMove(move)) {
        this.board.placeMark(move, this.currentPlayer.sym);
        this.switchPlayers();
      }
    }
  }

  isGameOver() {
    return this.board.isGameOver()
  }

  revealWinner() {
    if(this.board.winner.toLowerCase() === "tie") {
      return this.board.winner;
    }
    return this.board.winner === this.player1.sym ? this.player1.name : this.player2.name;
  }

}

module.exports = Game;
