package adventure.entities.action;
import adventure.AdventureGame;
import adventure.entities.*;
import java.util.*;

public class MooveAction implements Actions{
  protected AdventureGame game;
  public MooveAction(AdventureGame game){
    this.game = game;
  }
  /**
  *@return true si l'action de se deplacer peut etre effectué et false sinon
  *@param game le plateau de jeu
  */
  public boolean canPerform(){
    if (this.game.currentRoom().getTheMonsters().size() > 0) {
      for (Monster monstre: this.game.currentRoom().getTheMonsters()) {
        if (monstre.isALive()) {
          return false;
        }
      }
    }
    return true;
  }
  /**
  *Le joueur se deplace dans une aure salle si et seulement si cela est possible
  *@param game le plateau de jeu
  */
  public void perform(){
    int n = this.chooseDirection();
    game.playerMoveTo(this.game.currentRoom().getTheRoomNeighboursDirection().get(n));
  }

  /**
  *Renvoi l'indice d'une direction à choisir
  *@param game
  */
  public int chooseDirection(){
    // new ListChoser<Direction>().choose(list des directions parmi lesquelles choisir)  
    System.out.println("\nVeuillez choisir une direction\n");
    List<Direction> currentRoomNeighbours = this.game.currentRoom().getTheRoomNeighboursDirection();
    for (int i = 0; i < currentRoomNeighbours.size() ;i++) {
      System.out.println("type " + i + " to go to " + currentRoomNeighbours.get(i) + "\n");
    }
    ScannerInt sc = new ScannerInt();
    int direcChoisi = sc.readInt(currentRoomNeighbours.size());
    return direcChoisi;
  }

  /**
  *Affiche moove
  */
  public void print(){
    System.out.println("--> moove\n");
  }
}
