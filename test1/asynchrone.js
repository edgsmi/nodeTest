
const async = require('async');
const fs = require('fs');

var fichiers = ['test1.txt', 'test2.txt', 'test3.txt'];

async.waterfall(
  [
    // Lecture des fichiers
    function(callback) { async.map(fichiers, fs.readFile, callback); },
    // Écriture du fichier final avec la concaténation des contenus
    function(contenus, callback) { fs.writeFile('fichierFinal', contenus.join(''), callback); },
    // Succès
    function() { console.log('OK'); }
  ],
  // Erreur
  function(err) { console.log('FAIL: ' + err.message); }
);