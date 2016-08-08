var http = require('http');
var url = require("url");

var server = http.createServer(function(req, res) {

  

  var page = url.parse(req.url).pathname;

  console.log(page);


  //res.end('<p>Voici un paragraphe <strong>HTML</strong> !</p>');
  res.writeHead(200, {"Content-Type": "text/html"});

    res.write('<!DOCTYPE html>'+

'<html>'+

'    <head>'+

'        <meta charset="utf-8" />'+

'        <title>Ma page Node.js !</title>'+

'    </head>'+ 

'    <body>'+

'       <p>Voici un paragraphe <strong>HTML</strong> !</p>'+

'    </body>'+

'</html>');

    res.end();


});

server.listen(8080);