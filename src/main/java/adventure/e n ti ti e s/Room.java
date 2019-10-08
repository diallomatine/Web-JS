package adventure.entities;
import java.util.*;
import adventure.entities.item.*;

// import Actions.Actions;

public class Room{
  protected List<Monster> theMonsters;
  protected List<Item> theItems;
  protected Map<Direction, Room> theNeighbours;
  protected boolean exit;
  protected Player player;

  /**
  *Construit une salle vide qui ne contient ni monstre ni joueur
  */
  public Room(){
    this.theMonsters = new ArrayList<Monster>();
    this.theItems = new ArrayList<Item>();
    this.theNeighbours = new HashMap<Direction, Room>();
    // this.player = null;
    this.exit = false;
  }

  /**
  *Renvoie la salle voisine se trouvant à la direction passé en parametre
  *@param direction la direction à laquelle la cellule se trouve
  *
  */
  public Room getRoomIndirection(Direction direction){
    return this.theNeighbours.get(direction);
  }

  /**
  *@return Renvoit une Collection des clés des rooms voisins d'une room
  */
  public List<Direction> getTheRoomNeighboursDirection(){
    List<Direction> direction = new ArrayList<Direction>();
    for (Map.Entry d: this.theNeighbours.entrySet()) {
      direction.add((Direction)d.getKey());
    }
    return direction;
  }

  /**
  *Ajoute une room comme voisin d'une autre suivant la direction, passé en parametre
  *@param direction la direction dans laquelle mettre la cellule
  *@param room la salle voisine à indiquer
  */
  public void addRoomNeighbou(Direction direction, Room room){
    this.theNeighbours.put(direction, room);
  }

  // /**
  // *Ajoute le joueur dans une room
  // *@param player le joueur à ajouté dans la salle
  // */
  // public void addPlayer(Player player){
  //   this.player = player;
  // }

  /**
  *@return la liste des objets disponnibles dans une salle
  */
  public List<Item> getItems() {
	   return this.theItems;
  }

  /**
  *@return la liste des monstres disponnibles dans une salle
  */
  public List<Monster> getTheMonsters() {
	   return theMonsters;
  }
  /**
  *Ajoute un objet parmis la liste des objets dans une salle
  *@param ietm l'objet à ajouter
  */
  public void addItem(Item item){
    this.theItems.add(item);
  }
  /**
  *Ajoute une monstre parmis la liste des Monstres present dans une salle
  *@param monster le monstre à ajouter
  */
  public void addMonster(Monster monster){
    this.theMonsters.add(monster);
  }
  /**
  *@return true si c'est la salle de sortie et false sinon
  */
  public boolean isExit(){
    return this.exit;
  }
  /**
  *Fait d'une salle donnée du donjon la sortie
  */
  public void makeRoomExit(){
    this.exit = true;
  }
  public String toString(){
    String res = "you have " + this.getTheMonsters().size() +" monster(s)";
    res += " and " +this.getItems().size() + " item(s)";
    return res;
  }
}
