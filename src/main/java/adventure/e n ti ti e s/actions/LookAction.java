package adventure.entities.action;
import adventure.AdventureGame;
import adventure.entities.*;
import java.util.*;

public class LookAction implements Actions{
  protected AdventureGame game;
  public LookAction(AdventureGame game){
    this.game = game;
  }

  /**
  *@return true pour l'action regarder
  */
  public boolean canPerform(){
    return true;
  }
  public void perform(){
    System.out.println(this.game.currentRoom().toString());
  }

  /**
  *Affiche look
  */
  public void print(){
    System.out.println("--> look\n");
  }
}
