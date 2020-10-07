const celeste = document.getElementById("celeste");
const violeta = document.getElementById("violeta");
const naranja = document.getElementById("naranja");
const verde = document.getElementById("verde");
const btnEmpezar = document.getElementById("btnEmpezar");

class Game {
  constructor() {
    this.init()
  }

  init() {
      btnEmpezar.classList.add('hide')
  }
}

function empezarJuego() {
  var game = new Game()
}
