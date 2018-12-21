/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./start.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./gameClasses/board.js":
/*!******************************!*\
  !*** ./gameClasses/board.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (Board);


/***/ }),

/***/ "./gameClasses/game.js":
/*!*****************************!*\
  !*** ./gameClasses/game.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _board_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board.js */ "./gameClasses/board.js");

class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.currentPlayer = player1;
    this.board = new _board_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }

  restart() {
    this.board = new _board_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }

  switchPlayers() {
    this.currentPlayer =
      this.currentPlayer === this.player1 ? this.player2 : this.player1;
  }

  recieveMove(move) {
    if (!this.isGameOver()) {
      let moveMade = false;
      if (this.board.isValidMove(move)) {
        this.board.placeMark(move, this.currentPlayer.sym);
        this.switchPlayers();
      }
    }
  }

  isGameOver() {
    return this.board.isGameOver();
  }

  revealWinner() {
    if (this.board.winner.toLowerCase() === "tie") {
      return this.board.winner;
    }
    return this.board.winner === this.player1.sym
      ? this.player1.name
      : this.player2.name;
  }

  revealBoard() {
    return this.board.board;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Game);


/***/ }),

/***/ "./gameClasses/humanPlayer.js":
/*!************************************!*\
  !*** ./gameClasses/humanPlayer.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class HumanPlayer {
  constructor(name, sym) {
    this.name = name.toUpperCase();
    this.sym = sym;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (HumanPlayer);


/***/ }),

/***/ "./gameClasses/view.js":
/*!*****************************!*\
  !*** ./gameClasses/view.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class View {
  constructor(game, play) {
    this.play = play;
    this.game = game;
    this.button = document.querySelector(".playAgain");
    this.gameOver = document.querySelector(".gameOver");
    play.addEventListener("click", this.handleClick.bind(this));
    this.button.addEventListener("click", this.newGame.bind(this));
    this.render();
  }

  handleClick(e) {
    this.game.recieveMove(Number(e.target.value));
    this.render();
  }

  viewBoard() {
    let html = "";
    let value = 1;
    this.game.revealBoard().forEach(row => {
      html += "<ul>";
      row.forEach(el => {
        if (Number(el)) {
          html += `<li class='grey' value=${value}></li>`;
        } else {
          html += "<li>" + el + "</li>";
        }
        value++;
      });
      html += "</ul>";
    });
    this.play.innerHTML = html;
  }

  newGame() {
    this.button.classList.remove("show");
    this.button.classList.add("hide");
    this.gameOver.innerText = "";
    this.game.restart();
    this.render();
  }

  gameOverSequence() {
    this.gameOver.innerText = `Game Over! Winner is: ${this.game.revealWinner()}`;
    this.button.classList.remove("hide");
    this.button.classList.add("show");
  }

  isGameOver() {
    return this.game.isGameOver();
  }

  render() {
    this.viewBoard();
    if (this.isGameOver()) {
      this.gameOverSequence();
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (View);


/***/ }),

/***/ "./start.js":
/*!******************!*\
  !*** ./start.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gameClasses_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameClasses/game */ "./gameClasses/game.js");
/* harmony import */ var _gameClasses_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameClasses/view */ "./gameClasses/view.js");
/* harmony import */ var _gameClasses_humanPlayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameClasses/humanPlayer */ "./gameClasses/humanPlayer.js");




document.addEventListener("DOMContentLoaded", () => {
  let state = { player1: "", player2: "" };
  let play = document.querySelector(".ticTac");
  let form = document.querySelector(".players");
  form.addEventListener("change", event => {
    state[event.target.id] = event.target.value;
  });

  form.addEventListener("submit", e => {
    e.preventDefault();
    e.currentTarget.remove();
    startGame();
  });

  function startGame() {
    let player1 = new _gameClasses_humanPlayer__WEBPACK_IMPORTED_MODULE_2__["default"](state.player1, "X");
    let player2 = new _gameClasses_humanPlayer__WEBPACK_IMPORTED_MODULE_2__["default"](state.player2, "O");
    let game = new _gameClasses_game__WEBPACK_IMPORTED_MODULE_0__["default"](player1, player2);
    new _gameClasses_view__WEBPACK_IMPORTED_MODULE_1__["default"](game, play);
  }
});


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map