import MoveState from './moveState.js';
import Ball from './ball.js';
import Paddle from './paddle.js';
const paddleMidle = 44;
const paddleDelX = 0;
const paddleDelY = 8;
const ballDelX = 8;
const ballDelY = 0;
const startPaddle = 30;

class Game{
  constructor(canvas, paddle1, paddle2, ball){
    this._canvas = canvas;
    this._paddle1 = paddle1;
    this._paddle2 = paddle2;
    this._ball = ball;
    this._requestAnimation = undefined;
    this._ballRuning = false;
    this._first = false;
    this._socket = undefined;
  }
  //  getters/setters
  get socket(){return this._socket;}
  set socket(socket){this._socket = socket;}
  get first(){return this._first;}
  set first(f){this._first = f;}
  get ballRuning(){return this._ballRuning;}
  set ballRuning(ball){this._ballRuning = ball;}
  get ball(){return this._ball;}
  set ball(ball){this._ball = ball;}
  get paddle1(){return this._paddle1;}
  get paddle2(){return this._paddle2;}
  get requestAnimation(){return this._requestAnimation;}
  set requestAnimation(ref){this._requestAnimation = ref;}
  get canvas(){return this._canvas;}

	stop(){window.cancelAnimationFrame(this.requestAnimation);}
  moveAndDraw(){
    this.stop();//pour empecher que la balle ne soit trop rapide
    const context = this.canvas.getContext("2d");
    context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.paddle1.draw(context);
    this.paddle2.draw(context);
    if (this.ball.x < this.paddle1.x || this.ball.x > this.paddle2.x){
      this.ballRuning = false;
      this.ball.draw(context);
    }
    else {
      if (this.ball.isCollisionWith(this.paddle1)) {
        this.ball.setBallSpeed(this.paddle1);
        if (this.first) {
          this.sync()
          window.setTimeout(()=> this.sync(), 30);
        }
      }
      else if (this.ball.isCollisionWith(this.paddle2)){
        this.ball.setBallSpeed(this.paddle2);
        this.ball.changeBallDirection();
        if (this.first) {
          window.setTimeout(()=> this.sync(), 30);
        }
      }
    }
    if (this.ballRuning) {
      this.ball.move(this.canvas);
      this.ball.draw(context);
    }
    this.requestAnimation = window.requestAnimationFrame(this.moveAndDraw.bind(this));
  }
  sync(){
this.socket.emit('sync', {x: this.canvas.width-this.ball.x, y: this.ball.y, deltaX: (-1)*this.ball.deltaX, deltaY: this.ball.deltaY});
  }
  rightPaddleUp(){
    this.paddle2.moving = MoveState.UP;
    this.paddle2.move();
  }
  rightPaddleDown(){
    this.paddle2.moving = MoveState.DOWN;
    this.paddle2.move();
  }
  rightPaddleStopMoving(y){
    this.paddle2.y = y;
    this.paddle2.stopMoving();
  }
  reSartgame(){
    this.paddle1.y = (this.canvas.height/2)-(this.paddle1.image.height/2);
    this.paddle2.y = ((this.canvas.height/2)-(this.paddle1.image.height/2));
    this.ball.x = this.paddle1.x + (this.paddle1.image.width);
    this.ball.y = this.paddle1.y+ paddleMidle;
    this.ball.deltaX = ballDelX;
    this.ball.deltaY = ballDelY;
    this.moveAndDraw();
  }
  reStartRightPaddle(){
    this.paddle1.y = (this.canvas.height/2)-paddleMidle;
    this.paddle2.y = (this.canvas.height/2)-paddleMidle;
    this.moveAndDraw();
  }
  keyActionHandler(event){
    const context = this.canvas.getContext("2d");
   switch (event.key) {
       case "ArrowDown":
       case "Down":
        this.paddle1.moving = MoveState.DOWN;
        this.paddle1.move();
        this.socket.emit('movedown');
          break;
       case "ArrowUp":
       case "Up":
        this.paddle1.moving = MoveState.UP;
        this.paddle1.move();
        this.socket.emit('moveup');
          break;
      case " ":
        if (this.first && !(this.ballRuning)) {
          this.ballRuning = true;
          this.reSartgame();
          this.socket.emit('restart',{x: this.canvas.width-this.ball.x, y: this.ball.y, deltaX: (-1)*this.ball.deltaX, deltaY:this.ball.deltaY});
        }
           break;
       default: return;
     }
    event.preventDefault();
  }

  keyReleaseActionHandler(event) {
		switch (event.key) {
	        case "ArrowUp":
	        case "Up":
	        case "ArrowDown":
    			case "Down":
      				this.paddle1.moving = MoveState.NONE;
      				this.socket.emit('stopmoving', {y: this.paddle1.y});
      				break;
    	    default: return;
	    }
	    event.preventDefault();
	}
}
const theCanvas = document.getElementById("field");
const paddle1 = new Paddle(startPaddle, (theCanvas.height/2)-paddleMidle,paddleDelX,paddleDelY, MoveState.NONE);
const paddle2 = new Paddle(theCanvas.width-startPaddle, (theCanvas.height/2)-paddleMidle,paddleDelX,paddleDelY, MoveState.NONE);

const ball = new Ball(paddle1.x + (paddle1.image.width), paddle1.y+(paddle1.image.height/2));
const theGame = new Game(theCanvas, paddle1, paddle2 ,ball);
theGame.constructor = undefined;
Object.getPrototypeOf(theGame).constructor = undefined;
export default theGame;
