package shatrunjay.common.jenga.session;

import java.util.List;
import javax.ejb.Stateless;
import shatrunjay.common.jenga.model.Player;
import shatrunjay.common.jenga.utils.Helper;
/**
 *
 * @author Shatrunjay
 */
@Stateless
public class PlayerSession {

    public List<Player> getAllPlayers() {
        return Helper.getAllPlayers();
    }

    public Player getPlayer(int playerId) {
        return Helper.getPlayer(playerId);
    }

    public Player createPlayer(Player player) {
        return Helper.createPlayer(player);
    }

    public void deletePlayer(int playerId) {
        Helper.deletePlayer(playerId);
    }

}
