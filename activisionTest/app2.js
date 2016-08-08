
var connectionUtil = require('connectionUtil');

var plateformPaysListJson = connectionUtil.getPlateformPays();
//req.session.paysInteList.push(plateformPaysList.inte);
//console.log(plateformPaysList);

console.log(plateformPaysListJson.local);
console.log(plateformPaysListJson.local.pays);

var paysLocal = plateformPaysListJson.local.pays.split(";");
var paysInte = plateformPaysListJson.inte.pays.split(";");
var paysEc = plateformPaysListJson.ec.pays.split(";");
var paysPr = plateformPaysListJson.pr.pays.split(";");

for (var pays in paysLocal) { 
    console.log(paysLocal[pays]);
}

/*for (var pays in paysInte) { 
    console.log(paysInte[pays]);
}

for (var pays in paysEc) { 
    console.log(paysEc[pays]);
}

for (var pays in paysPr) { 
    console.log(paysPr[pays]);
}
*/

var connectionList = connectionUtil.getConnectionList();

console.log(connectionList.ecfr);


connectionUtil.initConnection(connectionList.ecfr.login, connectionList.ecfr.pwd, connectionList.ecfr.host, connectionList.ecfr.port, connectionList.ecfr.sid);