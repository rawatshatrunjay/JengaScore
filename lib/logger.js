var winston = require('winston');

var config = require('../config/config');

var _logger = new (winston.Logger)({
  transports: [
    new (winston.transports.File)({
      name: 'info-log',
      filename: config.logging.infoFile,
      json: false,
      colorize: false,
      level: 'info'
    }),
    new (winston.transports.File)({
      name: 'error-log',
      filename: config.logging.errorFile,
      level: 'error',
      humanReadableUnhandledException: true,
      json: false,
      colorize: false
    })
  ],
  exceptionHandlers: [
    new winston.transports.File({
      name: 'exception-log',
      filename: config.logging.exceptionFile,
      exitOnError: false,
      humanReadableUnhandledException: true,
      handleExceptions: true,
      json: false,
      colorize: false
    })
  ]
});

var Logger = function Logger(tag) {

  this.info = function info() {
    arguments[0] = tag + ' - ' + arguments[0];
    _logger.info.apply(_logger, arguments);
  };

  this.error = function error() {
    arguments[0] = tag + ' - ' + arguments[0];
    _logger.error.apply(_logger, arguments);
    if(arguments.length === 1) {
      _logger.error(new Error());
    }
  };

};

module.exports = {
  getLogger: function getLogger(tag) {
    return new Logger(tag);
  }
};
