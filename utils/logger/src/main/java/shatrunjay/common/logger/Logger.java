package shatrunjay.common.logger;

/**
 * Wrapper for all the Logging in the application.
 *
 * @author Shatrunjay
 */
public class Logger {
    
    private final org.apache.log4j.Logger logger;
    
    Logger(Class loggerRequester) {
        logger = org.apache.log4j.Logger.getLogger(loggerRequester);
    }
    
    public void error(String msg, Throwable cause) {
        logger.error(msg, cause);
    }
    
    public void error(String msg) {
        logger.error(msg);
    }
    
    public void info(String msg, Throwable cause) {
        logger.info(msg, cause);
    }
    
    public void info(String msg) {
        logger.info(msg);
    }
    
    public void debug(String msg, Throwable cause) {
        logger.debug(msg, cause);
    }
    
     public void debug(String msg) {
        logger.debug(msg);
    }
}
