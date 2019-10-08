package adventure.entities.item;
import adventure.AdventureGame;
import adventure.entities.Player;

public class GoldItem implements Item{
  private final static int OR = 10;

  protected AdventureGame game;
  public GoldItem(AdventureGame game){
    this.game = game;
  }

  public  void use(Player player){
    player.increasePieceOr(OR);
  }

  public void use(){
    this.game.getPlayer().increasePieceOr(OR);
  }
}
