package shatrunjay.common.jenga.service.rest;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import shatrunjay.common.jenga.model.ItemList;
import shatrunjay.common.jenga.model.player.Player;

/**
 * REST service exposing APIs for interacting with Players.
 * @author Shatrunjay
 */
@Path("/players")
public class PlayerService {
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public ItemList<Player> getAllPlayers() {
        
    }
}
