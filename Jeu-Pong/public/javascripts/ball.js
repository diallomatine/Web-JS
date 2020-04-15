import theGame from './game.js';
import Mobile from './mobile.js';

const DELTA = 6;
export default class Ball extends Mobile{
  constructor(x, y, deltaX = DELTA, deltaY = 0){
    super(x, y, '/images/balle.png', deltaX, deltaY);
  }
  changeBallDirection(){
    this.deltaX *= (-1);
    this.deltaY *= (-1);
  }
  /**
  *
  *@param canvas le canvas dans lequel la balle doit rester
  */
  setBallInCanvaPeriphery(canvas){
    if (this.x + this.deltaX > canvas.width || this.x+ this.deltaX < 0) {
      this.deltaX *= (-1);
    }
    if (this.y + this.deltaY  > canvas.height || this.y+this.deltaY < 0) {
      this.deltaY *= (-1);
    }
  }
  setBallSpeed(paddle){
    let pointImpact = this.y - paddle.y;
    if(pointImpact < paddle.image.height/2){
      this.deltaY = this.intervalValues(pointImpact);
    }
    else if(pointImpact > paddle.image.height/2){
      this.deltaY = this.intervalValues(pointImpact-paddle.image.height/2);;
    }
    else {
      this.deltaY = 0;
    }
    this.deltaX = (DELTA - Math.abs(this.deltaY))
  }
  move(canvas){
    this.setBallInCanvaPeriphery(canvas);
    this.x += this.deltaX;
    this.y += this.deltaY;
  }

  intervalValues(p){
    const delta = theGame.paddle1.image.height/5;
    if(p <= delta){
      return 1;
    }
    else if (p > delta && p <= delta*2) {
       return 2
    }
    else if (p > delta && p <= delta*3) {
      return 3
    }
    else if (p > delta && p <= delta*4) {
      return 4
    }
    else {
      return 0;
    }
  }

}
