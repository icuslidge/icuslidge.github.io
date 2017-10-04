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

// Asset Management

var assetManager = require('connect-assetmanager')({
  js: {
    route: /\/js\/all-[a-z0-9]+\.js/
  , path: __dirname + '/public/js/'
  , dataType: 'javascript'
  , debug: process.env.NODE_ENV === 'development'
  // , preManipulate: {
  //     '^': [
  //         function(src, path, index, isLast, callback) {
  //           callback(src.replace(/#socketIoPort#/g, env.port));
  //         }
  //       , function(src, path, index, isLast, callback) {
  //           if (/\.coffee$/.test(path)) {
  //             callback(coffee.compile(src));
  //           } else {
  //             callback(src);
  //           }
  //         }
  //     ]
  //   }
  , files: [ // order matters here
      'lib/modernizr.js'
    , 'custom.js'
    , 'app.js'
    , 'lib/isotope.js'
    , 'lib/jquery.colorbox.js'
    , 'lib/jquery.cookie.js'
    // , '*'
    ]
  },
  css: {
    route: /\/css\/all-[a-z0-9]+\.css/
  , path: __dirname + '/public/css/'
  , dataType: 'css'
  , debug: process.env.NODE_ENV === 'development'
    // preManipulate: {
    //   '^': [
    //     function(src, path, index, isLast, callback) {
    //       if (/\.styl$/.test(path)) {
    //         stylus(src)
    //           .set('compress', false)
    //           .set('filename', path)
    //           .set('paths', [ __dirname, app.paths.public ])
    //           .render(function(err, css) {
    //             callback(err || css);
    //           });
    //       } else {
    //         callback(src);
    //       }
    //     }
    //   ]
    // },
  , files: [ // order matters here
    //   'bootstrap.css'
    // , 'bootstrap-responsive.css'
    // , 'colorbox.css'
    // , 'style.css'
    // , 'style-bgd-maze-white.css'
    // , 'style-color-orange.css'
    ]
  }
});
app.use(assetManager);
app.locals.assetManager = assetManager;
app.use(express.staticCache());

if (app.get('env') === 'development') {
  app.use(express.static(__dirname + '/public'));
} else {
  app.use(express.static(__dirname + '/public', {maxAge: 24 * 60 * 60 * 1000}));
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
app.get('/map/:name', function (req, res, next) {
  var map = maps[req.params.name];
  if (!map) {
    res.send(404);
  } else {
    res.render('partials/map', {
      map: map
    });
  }
});
app.get('/partials/:name', function (req, res) {
  res.render('partials/' + req.params.name);
});
app.get('*', function (req, res) {
  res.render('index');
});
