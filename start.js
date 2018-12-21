import Game from "./game";
import View from "./view";
import HumanPlayer from "./HumanPlayer";

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
    let player1 = new HumanPlayer(state.player1, "X");
    let player2 = new HumanPlayer(state.player2, "O");
    let game = new Game(player1, player2);
    new View(game, play, startGame);
  }
});
