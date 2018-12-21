class Board extends Array {
  constructor() {
    super();
    this.board = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    this.movesRemaining = 9;
    this.winner = null;
    this.MOVES_LEGEND = {
      1: [0, 0],
      2: [0, 1],
      3: [0, 2],
      4: [1, 0],
      5: [1, 1],
      6: [1, 2],
      7: [2, 0],
      8: [2, 1],
      9: [2, 2]
    };
  }

  isValidMove(moveNumber) {
    if (moveNumber < 1 || moveNumber > 9) return false;
    return !Number(this.key(moveNumber)) ? false : true;
  }

  key(moveNumber) {
    return this.board[this.MOVES_LEGEND[moveNumber][0]][
      this.MOVES_LEGEND[moveNumber][1]
    ];
  }

  placeMark(moveNumber, sym) {
    this.movesRemaining--;
    this.board[this.MOVES_LEGEND[moveNumber][0]][
      this.MOVES_LEGEND[moveNumber][1]
    ] = sym;
  }

  isGameOver() {
    this.findWinner();
    if(this.movesRemaining === 0) { this.winner = "TIE"}
    return !this.winner && this.movesRemaining > 0 ? false : true;
  }

  findWinner() {
    this.isHorizontal();
    this.isVertical();
    this.isDiagnol();
    return this.winner;
  }

  isHorizontal(board = this.board) {
    for (let i = 0; i < board.length; i++) {
      if (board[i].every(el => el === board[i][0])) {
        this.winner = board[i][0];
        return true;
      }
    }
    return false;
  }

  transpose() {
    let output = [];
    for (let row = 0; row < this.board.length; row++) {
      output[row] = [];
      for (let col = 0; col < this.board.length; col++) {
        output[row][col] = this.board[col][row];
      }
    }
    return output;
  }

  isVertical() {
    let mtx = this.transpose();
    return this.isHorizontal(mtx);
  }

  isDiagnol() {
    let leftDiag = [];
    let rightDiag = [];
    for (let i = 0; i < this.board.length; i++) {
      leftDiag.push(this.board[i][i]);
      rightDiag.push(this.board[i][this.board.length - i - 1]);
    }
    if (leftDiag.every(el => el === leftDiag[0])) {
      this.winner = leftDiag[0];
      return true;
    }
    if (rightDiag.every(el => el === rightDiag[0])) {
      this.winner = rightDiag[0];
      return true;
    }
    return false;
  }
}

module.exports = Board;
