package adventure.entities;

public abstract class Character{
  protected int nbLifPoints;
  protected int nbPieceOr;
  protected int force;
  protected boolean alive;

  /**
  *Construit un personnage avec son nombre de points de vies, de pieces d'or
  * et de sa force
  *@param nbLifPoints le nombre de points de vies du personnage
  *@param nbPieceOr le nombre de pieces d'or du personnage
  *@param force le nombre de force du personnage
  */
  public Character(int nbLifPoints, int nbPieceOr, int force) {
    this.nbLifPoints = nbLifPoints;
    this.nbPieceOr = nbPieceOr;
    this.force = force;
    this.alive = true;

  }
  /**
  *@return true si le personnage est en vie et false sinon
  */
  public boolean isALive(){
    return this.nbLifPoints > 0;
  }
  /**
  *Renvoie le nombre de force du personnage
  *@return le nombre de force du personnages
  */
  public int getForce() {
	   return this.force;
  }

  /**
  *Renvoie le nombre de pieces d'or du personnage
  *@return le nombre de pieces d'or du  personnages
  */
  public int getNbPieceOr() {
	   return this.nbPieceOr;
  }

  /**
  *Renvoie le nombre de points de vies du personnage
  *@return le nombre de points de vies personnages
  */
  public int getNbLifPoints() {
	   return this.nbLifPoints;
  }

  /**
  *diminue de le nombre de vies d'un personnage et tue le personnage s'il n'a
  *pas le nombre de points de vies necessaires
  *@param nbPointsToRemove le nombre de points à diminuer
  */
  public void removeLifePoints(int nbPointsToRemove){
    if (this.getNbLifPoints() > nbPointsToRemove) {
      this.nbLifPoints -= nbPointsToRemove;
    }
    else{
      this.die();
    }
  }
  /**
  *Tue un personnage
  */
  public void die(){
    this.nbLifPoints = 0;
    this.alive = false;
  }

  /**
  *Augmente le nombre de points de vies d'un joueur
  *@param n le nombre de points à augmenter
  */
  public void increaseLifePoints(int n){
    this.nbLifPoints += n;
  }

  /**
  *Augmente le nombre de points de vies d'un joueur
  *@param n le nombre de points à augmenter
  */
  public void increaseForce(int n){
    this.force += n;
  }

  /**
  *Augmente le nombre de points de vies d'un joueur
  *@param n le nombre de points à augmenter
  */
  public void increasePieceOr(int n){
    this.nbPieceOr += n;
  }

  /**
  *Un personnage attaque un autre
  *@param character le personnage attaqué
  */
  public void attaque(Character character){
    character.removeLifePoints(this.getForce());
  }
  /**
  *2 personnages se battent jusqu'à ce que l'un d'entre eux meurt
  *@param character le deuxieme personnage
  */
  public void toFight(Character character){
    while(this.isALive()&&character.isALive()){
      character.removeLifePoints(this.getForce());
      if (character.isALive()) {
        this.removeLifePoints(character.getForce());
      }
    }
  }
}
