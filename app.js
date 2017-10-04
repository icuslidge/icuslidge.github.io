var express = require('express');
var app = module.exports = express();

/**
 * Express Configuration
 */

app.enable('trust proxy');
app.use(express.limit('200kb'));
// app.use(express.favicon(__dirname + '/public/img/favicon.png'
//                       , { maxAge: 14 * 24 * 60 * 60 * 1000 } ));

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set('view options', {
  layout: false
});
app.use(express.bodyParser());
app.use(express.methodOverride());

app.use(express.staticCache());

if (app.get('env') === 'development') {
  app.use('/public', express.static(__dirname + '/public'));
} else {
  app.use('/public', express.static(__dirname + '/public', {maxAge: 24 * 60 * 60 * 1000}));
}

app.use(app.router);

if (app.get('env') === 'development') {
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
} else {
  // Error handler
  app.use(function(err, req, res, next) {
    res.set('Content-Type', 'text/plain');
    res.send(500, "Something went wrong, sorry!" );
  });
}


// Stuff
var maps = app.locals.maps = require('./maps.js');

// Routes
app.get('/', function (req, res) {
  res.render('index');
});
app.get('/dummy', function (req, res) {
  res.render('dummy');
});

// in order to snapshot all the paths, explicitly list them instead of relying on :params
// app.get('/partials/:name', renderPartial);
['home', 'bio', 'portfolio'].forEach(function (partial) {
  app.get('/partials/' + partial, function (req, res) {
    res.render('partials/' + partial);
  });

  app.get('/' + partial, function (req, res) {
    res.render('index');
  });
});

// app.get('/map/:name', renderMap);
Object.keys(maps).forEach(function (mapName) {
  app.get('/map/' + mapName, function (req, res) {
    res.render('partials/map', { map: maps[mapName] });
  });

  app.get('/portfolio/' + mapName, function (req, res) {
    res.render('index');
  });
});

app.get('*', function (req, res) {
  res.render('index');
});
