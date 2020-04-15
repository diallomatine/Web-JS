import theGame from './game.js';

const restart = function(ball){
  theGame.ball.x = ball.x;
  theGame.ball.y = ball.y;
  theGame.ball.deltaX=ball.deltaX;
  theGame.ball.deltaY=ball.deltaY;
  theGame.reStartRightPaddle();
}
const setup = function() {
  const socket = io();
  theGame.socket = socket;
  theGame.moveAndDraw();

  socket.on("moveup", ()=> theGame.rightPaddleUp());
  socket.on("movedown", ()=> theGame.rightPaddleDown());
  socket.on('restart', ball => {
    theGame.ballRuning = true;
    restart(ball);
  });
  socket.on('sync', ball =>{
    theGame.ball.x = ball.x;
		theGame.ball.y = ball.y;
		theGame.ball.deltaX = ball.deltaX;
		theGame.ball.deltaY = ball.deltaY;
  });
  socket.on('stopmoving',paddle1Y =>{
    theGame.rightPaddleStopMoving(paddle1Y.y);
  });
  socket.on('fstplayer', () => {
		window.alert('Vous êtes le premier joueur');
		theGame.first = true;
	});

  // socket.on('but', ball=>{
  //   theGame.ball.x = ball.x;
  //   theGame.ball.y = ball.y;
  //   window.alert('vous avez gagné')
  // });


  window.addEventListener('keydown', theGame.keyActionHandler.bind(theGame));
  window.addEventListener("keyup", theGame.keyReleaseActionHandler.bind(theGame));

}
window.addEventListener("DOMContentLoaded",setup);
