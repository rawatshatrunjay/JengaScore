package shatrunjay.common.jenga.service.rest;

import java.util.List;
import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import shatrunjay.common.jenga.model.Player;
import shatrunjay.common.jenga.session.PlayerSession;
import shatrunjay.common.logger.LogManager;
import shatrunjay.common.logger.Logger;

/**
 * REST service exposing APIs for interacting with Players.
 * @author Shatrunjay
 */
@Path("/players")
@Stateless
public class PlayerService {
    
    private static final Logger logger = LogManager.getLogger(PlayerService.class);
    
    @EJB
    PlayerSession playerSession;
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Player> getAllPlayers() {
        logger.info("Listing All players.");
        return playerSession.getAllPlayers();
    }
    
    @GET
    @Path("/{playerId}")
    @Produces(MediaType.APPLICATION_JSON)
    public Player getPlayer(@PathParam("playerId") int playerId) {
        logger.info("Fetching Player with Id " + playerId);
        return playerSession.getPlayer(playerId);
    }
    
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Player createPlayer(Player player) {
        logger.info("Createing Player: " + player.toString());
        return playerSession.createPlayer(player);
    }
    
    @DELETE
    @Path("/{playerId}")
    public Response deletePlayer(@PathParam("playerId") int playerId) {
        logger.info("Deleting Player with Id: " + playerId);
        playerSession.deletePlayer(playerId);
        return Response.noContent().build();
    }
}
