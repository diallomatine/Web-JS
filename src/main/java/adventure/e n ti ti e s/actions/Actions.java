package adventure.entities.action;
import adventure.entities.*;
import adventure.AdventureGame;

public interface Actions{
  /**
  *@return true si une action peut etre effectué et false sinon
  */
  public boolean canPerform();
  /**
  *Effectue une action si celui-ci est possible à effectuer
  */
  public void perform();

  /**
  *Affiche juste le nom d'une action
  */
  public void print();
}
