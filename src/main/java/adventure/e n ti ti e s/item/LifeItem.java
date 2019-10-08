package adventure.entities.item;
import adventure.AdventureGame;
import adventure.entities.Player;

public class LifeItem implements Item{
  private final static int LIFE = 20;

  protected AdventureGame game;
  public LifeItem(AdventureGame game){
    this.game = game;
  }

  public  void use(Player player){
    player.increaseLifePoints(LIFE);
  }

  public void use(){
    this.game.getPlayer().increaseLifePoints(LIFE);
  }
}
