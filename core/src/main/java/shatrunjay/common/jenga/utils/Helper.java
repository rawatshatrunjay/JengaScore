package shatrunjay.common.jenga.utils;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import shatrunjay.common.jenga.model.Game;
import shatrunjay.common.jenga.model.Player;

/**
 * Utilities that assist in work flow. Business logic can be implemented here.
 *
 * @author Shatrunjay
 */
public class Helper {

    private static final Map<Integer, Player> playerMemory;
    private static final Map<Integer, Game> gameMemory;
    private static int playerSequence;
    private static int gameSequence;

    static {
        playerMemory = new ConcurrentHashMap<>();
        gameMemory = new ConcurrentHashMap<>();
        playerSequence = 1;
        gameSequence = 1;
    }

    public static List<Player> getAllPlayers() {
        List<Player> players = new ArrayList<>();
        playerMemory.forEach((id, player) -> {
            players.add(player);
        });
        return players;
    }

    public static Player getPlayer(int playerId) {
        Player player;
        if (playerMemory.containsKey(playerId)) {
            player = playerMemory.get(playerId);
        } else {
            throw new IllegalArgumentException("Player not found: " + playerId);
        }
        return player;
    }

    public static Player createPlayer(Player player) {
        if(player == null || player.getName().isEmpty()) {
            throw new IllegalArgumentException("Invalid Player. Cannot Create.");
        }
        player.setId(playerSequence++);
        playerMemory.put(player.getId(), player);
        return player;
    }

    public static void deletePlayer(int playerId) {
        Player player = playerMemory.get(playerId);
        if(player == null) {
            throw new IllegalArgumentException("Player not found. Cannot Delete");
        }
        playerMemory.remove(playerId);
    }

}
