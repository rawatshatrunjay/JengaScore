package shatrunjay.common.jenga.model;

import java.util.Date;
import java.util.List;

/**
 * Model for a Game.
 * 
 * @author Shatrunjay
 */
public class Game {
    private final int id;
    private final Date playDate;
    private List<Player> players;

    public Game(int id, Date playDate) {
        this.id = id;
        this.playDate = playDate;
    }

    public int getId() {
        return id;
    }

    public Date getPlayDate() {
        return playDate;
    }

    public List<Player> getPlayers() {
        return players;
    }

    public void setPlayers(List<Player> players) {
        this.players = players;
    }
    
    public void addPlayer(Player player) {
        this.players.add(player);
    }
}
