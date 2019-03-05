const bunyan = require("bunyan");
const bunyanDebugStream = require("bunyan-debug-stream");

/* 'trace': TRACE,
'debug': DEBUG,
'info': INFO,
'warn': WARN,
'error': ERROR,
'fatal': FATAL
*/
const logger = bunyan.createLogger({
  name: "bastide",
  streams: [
    {
      level: "debug",
      type: "raw",
      stream: bunyanDebugStream({
        basepath: __dirname,
        forceColor: true
      })
    }
  ],
  serializers: bunyanDebugStream.serializers
});

module.exports = logger;
