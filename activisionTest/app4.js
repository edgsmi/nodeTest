/**
 * Module dependencies.
 */
var express = require('express');
var bodyParser = require('body-parser');
//var swagger = require('swagger-node-express');
 
require('./response');


var app = express();
//app.use(express.bodyParser());

app.use(bodyParser);


// Couple the application to the Swagger module. 
//swagger.setAppHandler(app);


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