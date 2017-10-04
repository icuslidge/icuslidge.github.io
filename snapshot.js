#!/usr/bin/env node

// credit: https://github.com/alexmingoia/express-snapshot/
// v1.0.1

var Promise = require('bluebird');
var Progress = require('progress');
var join = require('path').join;
var http = require('http-promise');
var mkdirp = Promise.promisify(require('mkdirp'));
var write = Promise.promisify(require('fs').writeFile);
var fetch = Promise.promisify(require('request'));
var getport = require('getport');

var app = require('./app');

function snapshot(app) {
  var date = new Date();
  var outputDir = 'snapshot-' + date.toISOString();
  var server = http.createServerAsync(app);
  var stack = routes(app);
  var progress = new Progress('[:bar] :status', {
    width: 24,
    total: (stack.length * 2) + 1
  });

  getport(function(err, port) {
    if (err) { return console.error(err); }

    server
      .listen(port)
      .return(stack)
      .each(function (route) {
        progress.tick(1, { status: 'fetching ' + route.path });
        var url = 'http://localhost:' + port + route.path;

        return mkdirp(folderpath(route, outputDir))
          .then(fetchHtml(url))
          .then(returnResponse)
          .tap(function () {
            progress.tick(1, { status: 'writing ' + filepath(route, outputDir) });
          })
          .then(writeHtml(filepath(route, outputDir)));
      })
      .then(function () {
        progress.tick(1, { status: 'finished' });
        server.close();
      })
      .catch(console.error);
  });
};

function routes(app) {
  return app.routes.get.filter(function (route) {
    if (~route.path.indexOf(':') || ~route.path.indexOf('*')) {
      console.log('skipping', route.path);
    } else {
      return route;
    }
  });
}

function filepath(route, outputDir) {
  if (route.path.match(/\.[^\.]+$/)) return outputDir + route.path;
  return outputDir + route.path.split('/').concat(['index.']).join('/');
}

function folderpath(route, outputDir) {
  if (route.path.match(/\.[^\.]+$/)) {
    return outputDir + route.path.split('/').slice(0, -1).join('/');
  }
  return outputDir + route.path;
}

function fetchHtml(url) {
  return function () {
    return fetch(url);
  }
}

function returnResponse(res) {
  return res[0];
}

function writeHtml(filepath) {
  return function (response) {
    var contentType = response.headers['content-type'];
    var ext = contentType.split(';')[0].split(/\/|\+/).pop() || 'html';
    return write(filepath + ext, response.body);
  };
}

snapshot(app);
