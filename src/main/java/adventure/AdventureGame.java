package adventure;
import java.util.Scanner;
import adventure.entities.*;
import adventure.entities.item.*;

public class AdventureGame{
  protected Room currentRoom;
  protected Player player;

  public AdventureGame(Room StartingRom){
    this.currentRoom = StartingRom;
    this.player = null;
  }

  /**
  *un joueur joue une partie
  */
  public void play(Player player){
    while(!player.getGame().currentRoom().isExit()){
      player.act();
      Scanner in = new Scanner(System.in);
      String choice = in.nextLine();
      in.close();
      System.out.println(choice);
    }
  }

  /**
  *Ajoute un objet parmis la liste des objets dans une salle
  *@param ietm l'objet à ajouter
  */
  public void addItem(Room room, Item item){
    room.addItem(item);
    // this.theItems.add(item);
  }
  /**
  *Ajoute une monstre parmis la liste des Monstres present dans une salle
  *@param monster le monstre à ajouter
  */
  public void addMonster(Monster monster, Room room){
    room.addMonster(monster);
    // this.theMonsters.add(monster);
  }

  /**
  *Ajoute un joueur dans le jeu
  *@param player le joueur a ajouté
  */
  public void setPlayer(Player player){
    this.player = player;
  }
  /**
  *@return la cellule courante dans laquelle le joueur se trouve
  */
  public Room currentRoom(){
    return this.currentRoom;
  }
  /**
  *@return le joueur dans le jeu
  */
  public Player getPlayer(){
    return this.player;
  }
  /**
  *Le joueur se deplace dans une cellule voisine
  *@param direction la direction dans laquelle la cellule se trouve
  */
  public void playerMoveTo(Direction direction){
    this.setCurrentRoom(currentRoom().getRoomIndirection(direction));
  }
  /**
  *Affecte une cellule comme la cellule courante
  *@param room la nouvelle cellule courante
  */
  public void setCurrentRoom(Room room){
    this.currentRoom = room;
  }
}
