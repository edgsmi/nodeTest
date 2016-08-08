/**
 * Module dependencies.
 */
var express = require('express');
var bodyParser = require('body-parser');
 
require('./response');


var app = express();
//app.use(express.bodyParser());

app.use(bodyParser);





if (module.parent === null) {
  //app.listen(3000);
  //console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);

	var server = app.listen(3456, function () {
	    var host = server.address().address;
	    var port = server.address().port;
	    console.log('running at http://' + host + ':' + port)
	    console.log("Express server listening on port %d in %s mode", port, app.settings.env);
	});

}