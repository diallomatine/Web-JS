package adventure.entities.action;
import adventure.AdventureGame;
import adventure.entities.*;
import java.util.*;


public class BattleAction implements Actions{
  protected AdventureGame game;
  public BattleAction(AdventureGame game){
    this.game = game;
  }

  /**
  *@return true s'il y'a au moins un monstre vivant dans la salle et false sinon
  *@param game le plateau de jeu
  */
  public boolean canPerform(){
    if (this.game.currentRoom().getTheMonsters().size() > 0) {
      for (Monster monstre: this.game.currentRoom().getTheMonsters()) {
        if (monstre.isALive()) {
          return true;
        }
      }
    }
    return false;
  }

  /**
  *Le joueur attaque un autre joueur ssi cela est possible
  */
  public void perform(){
    int n = this.chooseMonsterToAttaque();
    this.game.getPlayer().attaque(this.game.currentRoom().getTheMonsters().get(n));
  }

  /**
  *Renvoi l'indice d'un monstre present dans la room courant à attaquer
  *@param game le plateau de jeu
  *@return l'indice d'un monstre à attaquer
  */
  public int chooseMonsterToAttaque(){
    List<Monster> currentRoomMonsters = this.game.currentRoom().getTheMonsters();
    for (int i = 0; i < currentRoomMonsters.size() ;i++ ) {
      System.out.println("Type " + i + "to attack the monster n° " + i + "\n");
    }
    ScannerInt sc = new ScannerInt();
    int monstreChoisi = sc.readInt(currentRoomMonsters.size());
    return monstreChoisi;
  }

  /**
  *Affiche fight
  */
  public void print(){
    System.out.println("--> fight\n");
  }



}
