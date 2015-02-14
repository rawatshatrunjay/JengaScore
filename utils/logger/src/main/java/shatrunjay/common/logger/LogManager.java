package shatrunjay.common.logger;

/**
 * Manages a Logger.
 * 
 * @author Shatrunjay
 */
public class LogManager {
   
    public static Logger getLogger(Class loggerRequester) {
        return new Logger(loggerRequester);
    }
}
