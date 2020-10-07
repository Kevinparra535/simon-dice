const celeste = document.getElementById("celeste");
const violeta = document.getElementById("violeta");
const naranja = document.getElementById("naranja");
const verde = document.getElementById("verde");
const btnEmpezar = document.getElementById("btnEmpezar");

class Game {
  constructor() {
    this.init();
    this.generateSecuency();
    this.nextLevel();
  }

  init() {
    btnEmpezar.classList.add("hide");
    this.level = 1;
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

  nextLevel() {
    this.illuminateSequence();
  }

  transformNumToColor(number) {
    switch (number) {
      case 0:
        return "celeste";
      case 1:
        return "violeta";
      case 2:
        return "naranja";
      case 3:
        return "verde";
    }
  }

  illuminateSequence() {
    for (let i = 0; i < this.level; i++) {
      const color = this.transformNumToColor(this.secuency[i]);
      setTimeout(() => this.illuminateColor(color), 1000 * i);
    }
  }

  illuminateColor(color) {
    this.colors[color].classList.add("light");
    setTimeout(() => this.offColor(color), 350);
  }

  offColor(color) {
    this.colors[color].classList.remove("light");
  }
}

function empezarJuego() {
  window.game = new Game();
}
