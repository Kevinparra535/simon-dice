const celeste = document.getElementById("celeste");
const violeta = document.getElementById("violeta");
const naranja = document.getElementById("naranja");
const verde = document.getElementById("verde");
const btnEmpezar = document.getElementById("btnEmpezar");
const FinishLevel = 10;

class Game {
  constructor() {
    this.init = this.init.bind(this);
    this.init();
    this.generateSecuency();

    setTimeout(() => {
      this.nextLevel();
    }, 500);
  }

  /*
  this es el botón porque this en un addEventListener representa al elemento HTML al cual le asignamos ese evento, por ese motivo pasa de ser Game() a ser un elemento HTML.
  Lo que hacemos con bind() es decirle: ¡No!, tú no serás un elemento HTML, tú serás Game(), digamos que cambiamos su forma de pensar del this.
  Por si se les complica this, escribí un artículo hace tiempo que explica un poco quién realmente es this en diferentes situaciones.
  */

  init() {
    this.nextLevel = this.nextLevel.bind(this);
    this.chooseColor = this.chooseColor.bind(this);
    this.toogleBtnEmpezar();
    btnEmpezar.classList.add("hide");
    this.level = 1;
    this.colors = {
      celeste,
      violeta,
      naranja,
      verde,
    };
  }

  toogleBtnEmpezar() {
    if (btnEmpezar.classList.contains("hide")) {
      btnEmpezar.classList.remove("hide");
    } else {
      btnEmpezar.classList.add("hide");
    }
  }

  generateSecuency() {
    this.secuency = new Array(FinishLevel)
      .fill(0)
      .map((n) => Math.floor(Math.random() * 4));
  }

  nextLevel() {
    this.illuminateSequence();
    this.addEventClick();
    this.subLevel = 0;
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

  transformColorToNum(color) {
    switch (color) {
      case "celeste":
        return 0;
      case "violeta":
        return 1;
      case "naranja":
        return 2;
      case "verde":
        return 3;
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

  deleteEventClick() {
    this.colors.celeste.removeEventListener("click", this.chooseColor);
    this.colors.violeta.removeEventListener("click", this.chooseColor);
    this.colors.naranja.removeEventListener("click", this.chooseColor);
    this.colors.verde.removeEventListener("click", this.chooseColor);
  }

  chooseColor(event) {
    const colorName = event.target.dataset.color;
    const nummberColor = this.transformColorToNum(colorName);
    this.illuminateColor(colorName);
    console.log(this);
    if (nummberColor === this.secuency[this.subLevel]) {
      this.subLevel++;
      if (this.subLevel === this.level) {
        this.level++;
        alertify.success(`Subiste al nivel ${this.level}`);
        this.deleteEventClick();
        if (this.level === FinishLevel + 1) {
          // Win
          this.winner();
        } else {
          setTimeout(this.nextLevel, 500);
        }
      }
    } else {
      // Perdio
      this.loser();
      alertify.error(`Puntuación: ${this.level} pts`);
    }
  }

  winner() {
    swal("Simon dice que!", "Ganaste el juego", "succes").then(this.init);
  }
  loser() {
    swal("Simon dice que!", "Perdiste el juego", "error").then(() => {
      this.deleteEventClick();
      this.init();
    });
  }
}

function empezarJuego() {
  window.game = new Game();
}
