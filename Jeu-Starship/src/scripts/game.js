import MoveState from './moveState.js';
import Shoot from './shoot.js';
import StarShip from './starShip.js';
import Saucer from './saucer.js';

class Game{
  constructor(canvas, vaisseau, score, width, height){
    this._canvas = canvas;
    this._vaisseau = vaisseau;//instance StarShip
    this.soucoupeArray = new Array(); //instances  Saucer
    this._score = score;
    this._width = width;
    this._height = height;
    this._requestAnimation;
    this.tirs = new Array();
    this.infini = false;
    this.intervalID = undefined;
  }

  //  getters/setters
  
  get width(){
    return this._width;
  }
  get height(){
    return this._height;
  }
  get score(){
    return this._score;
  }
  set score(score){
    this._score += score;
    const scoreId = document.getElementById("score");
    let value = parseInt(scoreId.textContent);
    value = theGame._score;
    scoreId.textContent = value;
  }
  get vaisseau(){
    return this._vaisseau;
  }
  set vaisseau(vaisseau){
    this._vaisseau = vaisseau;
  }
  get requestAnimation(){
    return this._requestAnimation;
  }
  set requestAnimation(requestAnimation){
    this._requestAnimation = requestAnimation;
  }
  get canvas(){
    return this._canvas;
  }
  set canvas(canvas){
    this._canvas = canvas;
  }

  addSoucoupe(){
    let x = this.canvas.width -45;
		let y = this.alea(this.canvas.height-20);
    const soucoupe = new Saucer(x, y);
    this.soucoupeArray.push(soucoupe);
  }
  removeSoucoupe(soucoupe){
    let indice = this.soucoupeArray.indexOf(soucoupe);
    this.soucoupeArray.splice(indice, 1);
  }
  removeTir(tir){
    let indice = this.tirs.indexOf(tir);
    this.tirs.splice(indice, 1);
  }
  addSoucoupeFlottes(){
    if(this.infini == false) {
      this.intervalID = window.setInterval(this.addSoucoupe.bind(this), 750);
      this.infini = true;
    } else {
      this.infini = false;
      window.clearInterval(this.intervalID);
    }
  }
  moveAndDraw(){
    const context = this.canvas.getContext("2d");
    this.vaisseau.draw(context);
    this.soucoupeArray.forEach((soucoupe) => {
      if (soucoupe.x < 0) {
        context.clearRect(soucoupe.x, soucoupe.y, soucoupe.image.width , soucoupe.image.height);
        this.removeSoucoupe(soucoupe);
      }
      else {
        soucoupe.move();
        soucoupe.draw(context);
      }
      });
     this.tirs.forEach((item) => {
      if(item.x > this.canvas.width-item.image.width){
        context.clearRect(item.x, item.y, this.canvas.width, this.canvas.height);
        this.removeTir(item);
      }
      else{
        context.clearRect(item.x, item.y, item.image.width, item.image.height);
        item.move();
        item.draw(context);
        
      }
    });

    this.tirs.forEach((tir) => {
      //on recupère chaque tir qui entre en collision avec les soucoupes
      tir.collisionWith(this.soucoupeArray);
    });

    this.start();
  }
  alea(max){
  		return Math.floor(Math.random()*max);
	}
  start(){
    this.stop();//Pour arrêter l'animation avant de commencer une autre...? 
    
    this.requestAnimation = window.requestAnimationFrame(this.moveAndDraw.bind(this));
  }
	//stoppe l'animation
	stop(){
		window.cancelAnimationFrame(this.requestAnimation);
	}
  addTir(tir){
    this.tirs.push(tir);
  }
  
  keyActionHandler(event){
    const context = this.canvas.getContext("2d");
	  switch (event.key) {
	      case "ArrowDown":
	      case "Down":
           context.clearRect(this.vaisseau.x, this.vaisseau.y, this.canvas.width, this.canvas.height);
           if (this.vaisseau.down) {
             this.vaisseau.move();
           }
	         break;
	      case "ArrowUp":
	      case "Up":
           context.clearRect(this.vaisseau.x, this.vaisseau.y, this.canvas.width, this.canvas.height);
           if (this.vaisseau.up) {
             this.vaisseau.move();
           }
	      	 break;
       case " ":
            const nouvelleSoucoupe = document.getElementById("nouvelleSoucoupe");
            nouvelleSoucoupe.blur();
            const flotteSoucoupes = document.getElementById("flotteSoucoupes");
            flotteSoucoupes.blur();
            const shoot = new Shoot(this.vaisseau.x +5, this.vaisseau.y+5);
            this.addTir(shoot);
            break;
	      default: return;
     }
     event.preventDefault();
	}

}
const theCanvas = document.getElementById("stars");
const vaisseau = new StarShip(40,200, MoveState.Up);
const scoreId = document.getElementById("score");
let value = parseInt(scoreId.textContent);
let score = value;
const theGame = new Game(theCanvas, vaisseau, score, theCanvas.width, theCanvas.height);
theGame.constructor = undefined;
Object.getPrototypeOf(theGame).constructor = undefined;
export default theGame;
