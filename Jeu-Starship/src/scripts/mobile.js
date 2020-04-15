export default class Mobile{
  constructor(x, y, img, deltaX = 0, deltaY = 0){
    this._x = x;
    this._y = y;
    this.image = new Image();
    this.image.src = img;
    this._deltaX = deltaX;
    this._deltaY = deltaY;
  }

  get x(){
    return this._x;
  }
  set x(x){
    this._x = x;
  }
  get y(){
    return this._y;
  }
  set y(y){
    this._y = y;
  }
  get deltaX(){
    return this._deltaX;
  }
  set deltaX(deltaX){
    this._deltaX = deltaX
  }
  get deltaY(){
    return this._deltaY;
  }
  set deltaY(deltaY){
    this._deltaY = deltaY;
  }
  //dessine le mobile avec le context passé en paramètre
  draw(context){
    context.clearRect(this.x, this.y, this.image.width+3, this.image.height+3);
    context.drawImage(this.image, this.x, this.y);
  }
  //gestion des déplacements des objets "Mobile"
  move(){
    this.x += this.deltaX;
    this.y += this.deltaY;
  }

}
