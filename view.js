
class View {
  constructor(game, play) {
    this.play = play;
    this.game = game;
    this.viewBoard()
    play.addEventListener("click", this.handleClick.bind(this))
  }

  handleClick(e) {
    this.game.recieveMove(Number(e.target.value))
    this.viewBoard();
  }

  viewBoard() {
    let html = ""
    let value = 1;
    this.game.board.board.forEach(row => {
      html += "<ul>"
        row.forEach(el => {
          if(Number(el)) {
            html += `<li class='grey' value=${value}> </li>`
          } else {
            html += "<li>" + el + "</li>"
          }
          value++
        })
        html += "</ul>"
    })
    this.play.innerHTML = html
  }
}

export default View;
