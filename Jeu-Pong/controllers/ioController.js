class IoController {
  constructor() {
     this._nbPlayers = 0;
  }
  get nbPlayers() {return this._nbPlayers;}
  set nbPlayers(v) {
    this._nbPlayers = v;
  }

  registerSocket( socket ) {
    if (this.nbPlayers < 2) {
      this.nbPlayers += 1;
      console.log(this.nbPlayers);
      if (this.nbPlayers == 1){socket.emit('fstplayer');}
      socket.on('moveup', () => socket.broadcast.emit('moveup'));
      socket.on('movedown', () => socket.broadcast.emit('movedown'));
      socket.on('stopmoving', ball => socket.broadcast.emit('stopmoving', ball));
      socket.on('ball', ball => socket.broadcast.emit('ball', ball));
      socket.on('restart',  ball => socket.broadcast.emit('restart', ball));
      socket.on('sync', ball => socket.broadcast.emit('sync', ball));
      socket.on('disconnect', () => this.decrementeNbPlayers());
      socket.on('but', ball => socket.broadcast.emit('but', ball));
    }
    else {
      socket.disconnect(true);
    }

  }
  decrementeNbPlayers(){
    this.nbPlayers--;
  }
//socket.emit('ball', {x: this.canvas.width -30, y: (this.canvas.height/2)-40});


 }
 module.exports = new IoController();
