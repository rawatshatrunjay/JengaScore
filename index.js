var logger = require('./lib/logger').getLogger('INDEX');
var server = require('./lib/restserver');

console.log('Starting server....');
server.startServer(function() {
  logger.info('Server is running.');
  console.log('Server is running.')
});

var shutdown = function() {
  server.stopServer(function() {
    logger.info('Server stopped. Exiting process');
    console.log('Server stopped.')
    process.exit();
  });

  setTimeout(function() {
    logger.error('Unable to stop server. Forcing shutdown.');
    process.exit();
  }, 3000);
};

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);
