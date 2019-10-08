package adventure.entities.item;
import adventure.entities.Player;

public interface Item{
  /**
  *un joueur utilise un objet de type Item
  *@param player le joueur utilisant l'objet
  */
  public void use();
  public  void use(Player player);
}
