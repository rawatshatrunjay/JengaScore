package shatrunjay.common.jenga.model.player;

/**
 * Player models a player that will play Jenga. It maintains an overall score.
 * For a model that models the player for a single game please see GamePlayer.
 * @author Shatrunjay
 */
public class Player {
   
    private String name;
    private int id;
    private int totalScore;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public int getTotalScore() {
        return totalScore;
    }

    @Override
    public int hashCode() {
        int hash = 5;
        hash = 71 * hash + this.id;
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final Player other = (Player) obj;
        return this.id == other.id;
    }
}
