package adventure.entities;

public class Monster extends Character{
  // protected int nbLifPoints;
  // protected int nbPieceOr;
  // protected int force;


  /**
  *Construit un monstre avec son nombre de points de vies, de pieces d'or
  * et de sa force
  *@param nbLifPoints le nombre de points de vies du monstre
  *@param nbPieceOr le nombre de pieces d'or du monstre
  *@param force le nombre de force du monstre
  */
  public Monster(int nbLifPoints, int nbPieceOr, int force){
    super(nbLifPoints, nbPieceOr, force);
    this.alive = true;
  }


   /**
   *Le monstre qui meurt laisse tomber sur le sol de la salle les pices d'or qu'il contient
   */
   public void leavePieceOrInRoom(){

   }


}
