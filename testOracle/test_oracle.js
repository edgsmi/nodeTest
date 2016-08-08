var oracledb = require('oracledb');

oracledb.getConnection(
  {
    user          : "ecfr",
    password      : "ecfr",
    connectString : "EPPDBI51.ntt.preprod.org/OXYNET50"
  },
  function(err, connection)
  {
    if (err) { console.error(err); return; }
    connection.execute(
      "select prop_key, value from general_property_attribute where prop_key like 'mydecathlon%';",
      function(err, result)
      {
        if (err) { console.error(err); return; }
        console.log(result.rows);
      });
  });