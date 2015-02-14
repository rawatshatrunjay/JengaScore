package shatrunjay.common.jenga.model;

/**
 * This models a player that plays a particular game. It only has a score for
 * one game.
 *
 * @author Shatrunjay
 */
public class GamePlayer {
    private final int id;
    private final int score;

    public GamePlayer(int id, int score) {
        this.id = id;
        this.score = score;
    }

    public int getId() {
        return id;
    }

    public int getScore() {
        return score;
    }

}
