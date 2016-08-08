var express = require('express');

var app = express();

app.get('/', function(req, res) {

    res.setHeader('Content-Type', 'text/plain');

    res.end('Vous êtes à l\'accueil');

});

app.get('/sous-sol', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Vous êtes au sous-sol');
});

app.get('/etage/:etagenum/chambre', function(req, res) {
    //res.setHeader('Content-Type', 'text/plain');
    //res.end('Vous êtes à la chambre de l\'étage n°' + req.params.etagenum);
    res.render('chambre.ejs', {etage: req.params.etagenum});
});

app.get('/compter/:nombre', function(req, res) {
    var noms = ['Robert', 'Jacques', 'David'];
    res.render('compteur.ejs', {compteur: req.params.nombre, noms: noms});
});

app.use(function(req, res, next){
	res.setHeader('Content-Type', 'text/plain');
    //res.send(404, 'Page introuvable !');
    res.status(404).send('Page introuvable !');

	//res.writeHead(404, {"Content-Type": "text/plain"});
    //res.write('Erreur, page non connue!');
});


app.listen(8080);
