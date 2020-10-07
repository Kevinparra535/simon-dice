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

  /*
  this es el botón porque this en un addEventListener representa al elemento HTML al cual le asignamos ese evento, por ese motivo pasa de ser Game() a ser un elemento HTML.
  Lo que hacemos con bind() es decirle: ¡No!, tú no serás un elemento HTML, tú serás Game(), digamos que cambiamos su forma de pensar del this.
  Por si se les complica this, escribí un artículo hace tiempo que explica un poco quién realmente es this en diferentes situaciones.
  */

  init() {
    this.chooseColor = this.chooseColor.bind(this);
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
    this.addEventClick();
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

  addEventClick() {
    this.colors.celeste.addEventListener("click", this.chooseColor);
    this.colors.violeta.addEventListener("click", this.chooseColor);
    this.colors.naranja.addEventListener("click", this.chooseColor);
    this.colors.verde.addEventListener("click", this.chooseColor);
  }

  chooseColor(event) {
    console.log(this);
  }
}

function empezarJuego() {
  window.game = new Game();
}
