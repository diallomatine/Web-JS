package adventure.entities.item;
import adventure.AdventureGame;
import adventure.entities.Player;

public class ForceItem implements Item{
  private final static int FORCE = 20;
  protected AdventureGame game;

  public ForceItem(AdventureGame game){
    this.game = game;
  }

  public  void use(Player player){
    player.increaseForce(FORCE);
  }

  public void use(){
    this.game.getPlayer().increaseForce(FORCE);
  }
}
