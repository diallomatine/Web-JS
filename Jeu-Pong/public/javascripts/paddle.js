import theGame from './game.js';
import Mobile from './mobile.js';
import MoveState from './moveState.js';


const SHIFT_MOINS = -8;
const SHIFT_PLUS = 8;

export default class Paddle extends Mobile{
  constructor(x, y, deltaX=0, deltaY=8, moving){
    super(x, y, '/images/paddle.png', deltaX, deltaY);
    this.moving = moving;
  }
  get up(){
    this.deltaY = SHIFT_MOINS;
    return this.moving === MoveState.UP;
  }
  get down(){
    return this.moving === MoveState.DOWN;
  }
	stopMoving() {
    this.moving = MoveState.NONE;
	}

  move(){
    if (this.moving === MoveState.UP) {
      this.deltaY = SHIFT_MOINS;
    }
    else if (this.moving === MoveState.DOWN) {
      this.deltaY = SHIFT_PLUS;
    }
    else {
      this.deltaY = 0;
    }
    if (this.y + this.deltaY >= 0 && this.y +this.deltaY <= theGame.canvas.height - theGame.paddle1.image.height) {
      this.y += this.deltaY;
    }
  }

}
