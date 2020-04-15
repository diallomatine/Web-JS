import theGame from './game.js';
import css from '../style/style.css';

const setup = function() {
  const nouvelleSoucoupe = document.getElementById("nouvelleSoucoupe");
  nouvelleSoucoupe.addEventListener("click", theGame.addSoucoupe.bind(theGame));
  const flotteSoucoupes = document.getElementById("flotteSoucoupes");
  flotteSoucoupes.addEventListener("click", theGame.addSoucoupeFlottes.bind(theGame));
  nouvelleSoucoupe.addEventListener("click", () => theGame.start());
  flotteSoucoupes.addEventListener("click", () => theGame.start());
  window.addEventListener('keydown', theGame.keyActionHandler.bind(theGame));
//  window.addEventListener('keyup', theGame.keyUpActionHandler.bind(theGame));
}
window.addEventListener("DOMContentLoaded",setup);
