var http = require('http');
var app = require('./app');
var server = http.createServer(app);
var npid = require('./lib/pid');
var cfg = require('./cfg/cfg');

// Create a pidfile with the worker's ID and pid
try {
  npid.create(__dirname + '/worker-' + process.pid + '.pid', true);
} catch (err) {
  console.log(err);
  process.exit(1);
}

process.on('SIGTERM', exit);
process.on('SIGINT', exit);
// process.on('SIGKILL', exit); // This breaks in node v0.10.x

// This is for removing the pidfile when nodemon restarts due to changes
process.once('SIGUSR2', function() {
  npid.remove(__dirname + '/worker-' + process.pid + '.pid');
  process.nextTick(function() {
    process.kill(process.pid, 'SIGUSR2');
  });
});

function exit (code) {
  process.nextTick(function() {
    process.exit(code || 0);
  });
}

// Start server
server.listen(cfg.port, function () {
  console.log("Express server listening on port %d in %s mode"
            , server.address().port, app.settings.env);
});
