const celeste = document.getElementById("celeste");
const violeta = document.getElementById("violeta");
const naranja = document.getElementById("naranja");
const verde = document.getElementById("verde");
const btnEmpezar = document.getElementById("btnEmpezar");

class Game {
  constructor() {
    this.init();
    this.generateSecuency();
  }

  init() {
    btnEmpezar.classList.add("hide");
    this.nivel = 1;
    this.colors = {
      celeste,
      violeta,
      naranja,
      verde,
    };
  }

  generateSecuency() {
    this.secuency = new Array(10)
      .fill(0)
      .map((n) => Math.floor(Math.random() * 4));
  }
}

function empezarJuego() {
  window.game = new Game();
}
