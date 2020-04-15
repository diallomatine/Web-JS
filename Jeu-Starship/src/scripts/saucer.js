import Mobile from './mobile.js';
import theGame from './game.js';
import img from '../images/flyingSaucer-petit.png';

const NUMBER_OF_POINTS_LOST = -1000;

export default class Saucer extends Mobile{
  constructor(x, y, deltaX=-3, deltaY=0){
    super(x, y, img, deltaX, deltaY);
  }

  move(){
   const context = theGame.canvas.getContext("2d");
   context.clearRect(this.x, this.y, this.image.width , this.image.height);
   super.move();  //this.x += this.deltaX;
    if(this.x < 0){
      theGame.score = NUMBER_OF_POINTS_LOST;
    }
    else if(this.y-this.image.width === theGame.canvas.height){
      theGame.removeSoucoupe(this);
      context.clearRect(this.x, this.y, this.image.width , this.image.height);
  }
}
}
