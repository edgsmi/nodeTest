// Instanciation des modules
var fs      = require('fs')
var Promise = require('promise')
 
/* Conversion des fonctions utilisant un callback en fonctions renvoyant
une promesse */
var pReadFile  = Promise.denodeify(fs.readFile)
var pWriteFile = Promise.denodeify(fs.writeFile)
var pChmod     = Promise.denodeify(fs.chmod)
var pChown     = Promise.denodeify(fs.chown)
var pStat      = Promise.denodeify(fs.stat)
 
// Lecture du fichier
var p1 = pReadFile("mon_fichier");
 
// Ecriture du fichier s'il n'existe pas
var p2 = p1.then(function pReadFileFulfilled(data) {
    throw new Error('FILE_EXISTS');
}, function pReadFileRejected(err) {
    // Le fichier n'existe pas, créons-le !
    if (err.code === "ENOENT")
        return pWriteFile("mon_fichier", "123");
    else throw err;
});
 
// Changement des droits d'accès fu fichier
var p3 = p2.then(function pWriteFileFulfilled() {
    return pChmod("mon_fichier", "755");
}, function pWriteFileRejected(err) {
    throw err;
});
 
// Changement du propriétaire du fichier
var p4 = p3.then(function pChmodFulfilled() {
    return pChown("mon_fichier", 501, 20);
}, function pChmodRejected(err) {
    throw err;
});
 
// Récupération des stats du fichier
var p5 = p4.then(function pChownFulfilled() {
    return pStat("mon_fichier");
}, function pChownRejected(err) {
 
    /* Dans le cas ou la promesse a été rejetée avec comme message d'erreur
     FILE_EXISTS. Nous pouvons appelée pStat pour quand même récupérer
     les stats du fichiers */
 
    if (err.message === "FILE_EXISTS")
        return pStat("mon_fichier");
    else throw err;
});
 
p5.done(function pStatFulfilled(stats) {
    // Faire quelque chose avec "stats"
    console.log("stats", stats);
}, function pStatRejected(err) {
    // Les erreurs seront remontées jusqu'à la fonction finale "promise.done()"
    console.log("err", err);
});