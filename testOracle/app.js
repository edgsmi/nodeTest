var express = require('express');
var session = require('cookie-session'); // Charge le middleware de sessions
var bodyParser = require('body-parser'); // Charge le middleware de gestion des paramètres
var urlencodedParser = bodyParser.urlencoded({ extended: false });


var connectionUtil = require('connectionUtil');


var app = express();



/* On utilise les sessions */
app.use(session({secret: 'todotopsecret'}))


/* S'il n'y a pas de paysInteList dans la session,
on en crée une vide sous forme d'array avant la suite */
.use(function(req, res, next){
    if (typeof(req.session.paysInteList) == 'undefined') {
        req.session.paysInteList = [];        
    }

    var plateformPaysList = connectionUtil.getPlateformPays();
    req.session.paysInteList.push(plateformPaysList.inte);
    console.log(plateformPaysList.inte);
    
    next();
})


/* On affiche la todolist et le formulaire */
.get('/home', function(req, res) { 
    res.render('home.ejs', {paysInteList: req.session.paysInteList});
})


/* On ajoute un élément à la todolist */
.post('/pays/ajouter/', urlencodedParser, function(req, res) {
    if (req.body.newPays != '') {
        req.session.paysInteList.push(req.body.newPays);
    }
    res.redirect('/home');
})


/* Supprime un élément de la todolist */
.get('/pays/supprimer/:id', function(req, res) {
    if (req.params.id != '') {
        req.session.todolist.splice(req.params.id, 1);
    }
    res.redirect('/home');
})


/* On redirige vers la home si la page demandée n'est pas trouvée */
.use(function(req, res, next){
    res.redirect('/home');
})


.listen(8080);