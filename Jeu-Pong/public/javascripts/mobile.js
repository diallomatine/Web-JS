export default class Mobile{
  constructor(x, y, img, deltaX = 0, deltaY = 0){
    this._x = x;
    this._y = y;
    this.image = new Image();
    this.image.src = img;
    this._deltaX = deltaX;
    this._deltaY = deltaY;
  }

  isCollisionWith(mobile){
    return (this.x < mobile.x + mobile.image.width)&&
    (this.x + this.image.width > mobile.x)&&
    (this.y < mobile.y + mobile.image.height) &&
    (this.image.height + this.y > mobile.y);
  }

  //getters / setters
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

  draw(context){
    context.drawImage(this.image, this.x, this.y);
  }
  move(){
    this.x += this.deltaX;
    this.y += this.deltaY;
  }

}
