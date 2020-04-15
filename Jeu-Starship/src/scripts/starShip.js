import theGame from './game.js';
import Mobile from './mobile.js';
import MoveState from './moveState.js';
import img from '../images/vaisseau-ballon-petit.png';

const SHIFT_MOINS = -8;
const SHIFT_PLUS = 8;

export default class StarShip extends Mobile{
  constructor(x, y, deltaX=0, deltaY=8, moving){
    super(x, y, img, deltaX, deltaY);
    this.moving = moving;
  }
  get up(){
    if (this.y + this.deltaY >= 0) {
      this.deltaY = SHIFT_MOINS;
      return true;
    }
    return false;
  }
  get down(){
    if (this.y + this.deltaY <= theGame.height-this.image.width){
      this.deltaY = SHIFT_PLUS;
      return  true;
    }
    return false;
  }
  //arrête le deplacement lorsque la touche est relachée
	stopMoving() {
    	this.moving = MoveState.NONE;
	}
  move(){
    this.y += this.deltaY;
  }
}
