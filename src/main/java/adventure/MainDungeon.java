package adventure;
import adventure.entities.*;
import adventure.entities.action.*;
import adventure.entities.item.*;
import java.util.*;

/**
 * The Main Class
 *
 */
public class MainDungeon
{
    public static void main( String[] args )
    {
      Room r0 = new Room();
      Room r1 = new Room();
      Room r2 = new Room();
      Room r3 = new Room();
      r0.addRoomNeighbou(Direction.SOUTH, r1);
      r1.addRoomNeighbou(Direction.NORTH, r0);
      r0.addRoomNeighbou(Direction.WEST, r2);
      r2.addRoomNeighbou(Direction.WEST, r3);


      Monster m1 = new Monster(50,30,20);

      AdventureGame game = new AdventureGame(r1);
      game.addMonster(m1, r2);
      Player player = new Player(100,50,30, game);
      game.setPlayer(player);
      Actions a1 = new MooveAction(game);
      Actions a2 = new LookAction(game);
      Actions a3 = new BattleAction(game);
      Actions a4 = new UseAction(game);
      player.addAction(a1);
      player.addAction(a2);
      player.addAction(a3);
      player.addAction(a4);
      Item i1 = new LifeItem(game);
      game.addItem(r1,i1);

      System.out.println( "\nWelcome to Dungeon game !\n" );
      System.out.println("       -------------      \n");

      // player.act();
      game.play(player);
      // System.out.println(game.currentRoom().toString());
      //getRoomIndirection(Direction.NORTH)
    }
}
