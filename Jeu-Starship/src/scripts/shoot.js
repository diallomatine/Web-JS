import theGame from './game.js';
import Mobile from './mobile.js';
import img from "../images/tir.png";

const NUMBER_OF_POINTS_EARNED = 200;
const VITESSE_CHUTE_VERTICALE = 3;
const VITESSE_CHUTE_HORIZONTALE = 0;
export default class Shoot extends Mobile{
  constructor(x, y, deltaX = 8, deltaY = 0){
    super(x, y, img, deltaX, deltaY);
  }

  existCollision(mobile){
    return (this.x >= mobile.x && this.x <= mobile.x + mobile.image.width)
    && (this.y >= mobile.y && this.y <= mobile.y + mobile.image.height);

  }
  collisionWith(listSoucoupe){
    const context = theGame.canvas.getContext("2d");
    listSoucoupe.forEach((s) => {
      if(this.existCollision(s)){
        this.consequenceCollision(s);
        theGame.score = NUMBER_OF_POINTS_EARNED;
        context.clearRect(this.x, this.y, theGame.canvas.width , theGame.canvas.height);
        theGame.removeTir(this);
      }
    });
  }

  consequenceCollision(soucoupe){
    soucoupe.deltaX = VITESSE_CHUTE_HORIZONTALE;
    soucoupe.deltaY += VITESSE_CHUTE_VERTICALE;
  }
}
