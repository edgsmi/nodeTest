    // app.js  
      
    var oracledb = require('oracledb');  
      
    oracledb.getConnection({  
         user: "ecfr",  
         password: "ecfr",  
         connectString: "eppdbd01.neptune.dkcorp.net:1530/oxynet01.neptune.dkcorp.net"  

         //user: "ecfr",  
         //password: "ecfr",  
         //connectString: "EPPDBI51.ntt.preprod.org:1530/OXYNET50"  

          //user: "hr",  
          //password: "welcome",  
          //connectString: "localhost/xe"
    }, function(err, connection) {  
         if (err) {  
              console.error(err.message);  
              return;  
         }  
         //connection.execute( "SELECT department_id, department_name FROM departments WHERE department_id = 180",  
         connection.execute( "select prop_key, value from GENERAL_PROPERTY_ATTRIBUTE where prop_key = 'mydecathlon.fo.enable'",  
         [],  
         function(err, result) {  
              if (err) {  
                   console.error(err.message);  
                   doRelease(connection);  
                   return;  
              }  
              console.log(result.metaData);  
              console.log(result.rows);  
              doRelease(connection);  
         });  
    });  
      
    function doRelease(connection) {  
         connection.release(  
              function(err) {  
                   if (err) {console.error(err.message);}  
              }  
         );  
    }  