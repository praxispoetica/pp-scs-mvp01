var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');
var config = require('./config')

// web app middleware
var app = express();

app.use(cors());

// console logger for server
app.use(morgan('short'));

// for serving json api
app.use(bodyParser.urlencoded({
    extended : true
}));
app.use(bodyParser.json());

// all the back end server routing and controller things
app.use(require('./server/routes'));

var host = config.server.host;
var port = config.server.port;

app.set('port', port);

var server = app.listen(app.get('port'), host, function() {
    console.log('Static server listening on host %s port %s', host, server.address().port);
})