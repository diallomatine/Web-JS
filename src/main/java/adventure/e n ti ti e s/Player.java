package adventure.entities;
import java.util.Scanner;
import adventure.AdventureGame;
import adventure.entities.action.*;
import java.util.*;


public class Player extends Character{
  protected AdventureGame game;
  protected List<Actions> listActions;

  /**
  *Construit un Joueur avec son nombre de points de vies, de pieces d'or
  * et de sa force
  *@param nbLifPoints le nombre de points de vies du Joueur
  *@param nbPieceOr le nombre de pieces d'or du Joueur
  *@param force le nombre de force du Joueur
  */
  public Player(int nbLifPoints, int nbPieceOr, int force, AdventureGame game){
    super(nbLifPoints, nbPieceOr, force);
    this.listActions = new ArrayList<Actions>();
    this.game = game;
  }
  /**
  *@return le plateau de jeu
  */
  public AdventureGame getGame(){
    return this.game;
  }
  /**
  *Affecte le plateau de jeu de player
  *@param game le plateau de jeu
  */
  public void setGame(AdventureGame game){
    this.game = game;
  }
  /**
  *Ajoute une action dans la liste des actions
  *@param action l'action à ajouter
  */
  public void addAction(Actions action){
    this.listActions.add(action);
  }

  /**
  *Les actions dont le joueur peut faire dans une salle lui sont
  *proposés et le joueur agis
  */
  public void act(){
    System.out.println("what do you want to do ?\n");
    
    for (Actions action : this.listActions) {
      if (action.canPerform()) {
        action.print();
      }
    }

  }


}
