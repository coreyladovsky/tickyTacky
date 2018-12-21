
class View {
  constructor(game, play, restart) {
    this.play = play;
    this.game = game;
    this.button = document.querySelector(".playAgain");
    this.gameOver = document.querySelector(".gameOver");
    play.addEventListener("click", this.handleClick.bind(this))
    this.button.addEventListener("click", this.newGame.bind(this))
    this.restart = restart;
    this.render()
  }

  handleClick(e) {
    this.game.recieveMove(Number(e.target.value))
    this.render();
  }

  viewBoard() {
    let html = ""
    let value = 1;
    this.game.board.board.forEach(row => {
      html += "<ul>"
        row.forEach(el => {
          if(Number(el)) {
            html += `<li class='grey' value=${value}></li>`
          } else {
            html += "<li>" + el + "</li>"
          }
          value++
        })
        html += "</ul>"
    })
    this.play.innerHTML = html
  }

  newGame() {
    this.button.classList.remove("show")
    this.button.classList.add("hide")
    this.gameOver.innerText = ""
    this.game.restart();
    this.render();
  }

  gameOverSequence() {
    this.gameOver.innerText = `Game Over! Winner is: ${this.game.revealWinner()}`
    this.button.classList.remove("hide")
    this.button.classList.add("show")
  }

  isGameOver() {
    return this.game.isGameOver()
  }

  render() {
    this.viewBoard();
    if(this.isGameOver()) {
      this.gameOverSequence()
    }
  }
}

export default View;
