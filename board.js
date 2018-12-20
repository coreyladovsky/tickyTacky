class Board extends Array {
  constructor() {
    super();
    this.board = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    this.movesRemaining = 9;
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
    if(moveNumber < 1 || moveNumber > 9) return false;
    return !Number(this.key(moveNumber)) ? false : true;
  }

  key(moveNumber) {
    return this.board[this.MOVES_LEGEND[moveNumber][0]][this.MOVES_LEGEND[moveNumber][1]];
  }

  placeMark(moveNumber, sym) {
    this.board[this.MOVES_LEGEND[moveNumber][0]][this.MOVES_LEGEND[moveNumber][1]] = sym;
  }



}
//
let board = new Board()
console.log(board.isValidMove(10));
console.log(board.isValidMove(3));
// console.log(board.key(3));
board.placeMark(3, "X")
console.log(board.isValidMove(3));
// console.log(board.key(3));
