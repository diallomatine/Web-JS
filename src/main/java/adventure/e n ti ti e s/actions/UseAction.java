package adventure.entities.action;
import adventure.AdventureGame;
import adventure.entities.*;
import adventure.entities.item.*;
import java.util.*;

public class UseAction implements Actions{

  protected AdventureGame game;
  public UseAction(AdventureGame game){
    this.game = game;
  }

  /**
  *@return  true s'il y'a au moins un objet dans la salle et false sinon
  *
  */
  public boolean canPerform(){
    if (this.game.currentRoom().getItems().size() > 0) {
      return true;
    }
    return false;
  }
  /**
  *Le joueur utilise un objet qui est dans la salle
  *@param game le plateau de jeu
  */
  public void perform(){
    int n = this.chooseItemToUse();
    Item i = this.game.currentRoom().getItems().get(n);
    i.use(this.game.getPlayer());
  }
  /**
  *Renvoi l'indice d'un objet present dans la room courant à utiliser
  *@param game le plateau de jeu
  *@return l'indice d'un objet à utiliser
  */
  public int chooseItemToUse(){
    List<Item> currentRoomItems = this.game.currentRoom().getItems();
    for (int i = 0; i < currentRoomItems.size() ;i++ ) {
      System.out.println("Taper " + i + " pour utiliser l'objet n° " + i + "\n");
    }
    ScannerInt sc = new ScannerInt();
    int objetChoisi = sc.readInt(currentRoomItems.size());
    return objetChoisi;
  }

  /**
  *Affiche use
  */
  public void print(){
    System.out.println("--> use\n");
  }
}
