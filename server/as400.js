/*
const IBMi = require('ibmi');
 

 let opts = {
  
  userId: 'CDATWATER',
  password: 'BabyGirl42',
  hostName: '10.87.15.251'
};


let ibmi = new IBMi(opts);

ibmi.signon().then((res) => {
  console.log(res);
}).catch((err) => {
  console.log('Error! %s', err);
});


import ibmdb from 'ibm_db';
//var ibmdb = require('ibm_db');
 
ibmdb.open("DRIVER={DB2};DATABASE=<GCOVE>;HOSTNAME=<10.87.15.251>;UID=CDATWATER;PWD=BabyGirl42;PORT=<23>;PROTOCOL=TCPIP", function (err,conn) {
  if (err) return console.log(err);
  
  conn.query('select 1 from sysibm.sysdummy1', function (err, data) {
    if (err) console.log(err);
    else console.log(data);
 
    conn.close(function () {
      console.log('done');
    });
  });
});
*/
/*

var connString = "DRIVER={DB2};DATABASE=GCOVE;HOSTNAME=10.87.15.251;UID=CDATWATER;PWD=BabyGirl42;PORT=23;PROTOCOL=TCPIP";

if (Meteor.isServer) {
  Meteor.methods({
    getUserCount: function() {
    
    var callDB = Meteor.wrapAsync(function(callback) {
        IBMDB.open(connString, function(err, conn) {
          if (err) return callback(err, null);
          
          conn.query("select count(*) as COUNT from user", function(err, rows) {
            if (err) return callback(err, null);
            callback(null, rows[0]["COUNT"]);
          });
        });
      });

      var count = -1;
      try {
    count = callDB();
    } catch(e) {
        console.log(e);
      }

      return count;
    }
  });
}*/

//almost works
/*
console.log("test")
var db = require("odbc")()
  , cn = "DRIVER={Client Access ODBC Driver (32-bit)};SERVERNAME=10.87.15.251;PORT=23;UID=CDATWATER;PWD=BabyGirl42;DATABASE=GCOVE"
  ;
 
db.open(cn, function (err) {
  if (err) {
    return console.log(err);
  }
 
  //we now have an open connection to the database 
  //so lets get some data 
  db.query("select top 10 * from customers", function (err, rows, moreResultSets) {
    if (err) {
      return console.log(err);
    }
    
    console.log(rows);
 
    //if moreResultSets is truthy, then this callback function will be called 
    //again with the next set of rows. 
  });
});
*/
/*
var Database = require('jt400');
var database = new Database();
console.log("this is dir name " + __dirname)
var config = {
  libpath:'/public/jt400.jar',
  drivername: 'com.ibm.as400.access.AS400JDBCDriver',
  url: 'jdbc:as400://10.87.15.251/GCOVE;user=CDATWATER;password=BabyGirl43'
};

database.initialize(config);

// SELECT statements must be run with execute()
database.execute('SELECT * FROM foo');

database.on('execute', function(error, results) {
  if (error) {
    console.log(error);
  }
  else {
    console.log(results);
  }
});

//INSERT and UPDATE statements must be run with executeUpdate()
database.executeUpdate('INSERT INTO foo (bar) VALUES ("bar")');

database.on('executeUpdate', function(error, rowCount) {
  if (error) {
    console.log(error);
  }
  else {
    console.log(rowCount);
  }
});

*/

//var pool = require('node-jt400').pool({host: '10.87.15.251', user: 'CDATWATER', password: 'BabyGirl43'});









/*
console.log("test")
var db = require("odbc")()
  , cn = "DRIVER={Client Access ODBC Driver (32-bit)};SERVERNAME=10.87.15.251;PORT=23;UID=CDATWATER;PWD=BabyGirl42;DATABASE=GCOVE"
  ;
 
db.open(cn, function (err) {
  if (err) {
    return console.log(err);
  }
 
  //we now have an open connection to the database 
  //so lets get some data 
  db.query("select top 10 * from customers", function (err, rows, moreResultSets) {
    if (err) {
      return console.log(err);
    }
    
    console.log(rows);
 
    //if moreResultSets is truthy, then this callback function will be called 
    //again with the next set of rows. 
  });
});

*/
 var response = Async.runSync(function(done) {
var db = require("odbc")()
    , cn = "DRIVER={Client Access ODBC Driver (32-bit)};SERVER=10.87.15.251;UID=CDATWATER;PWD=BabyGirl43;DATABASE=GCOVE; System=10.87.15.251;"
    ;
 
db.open(cn, function (err) {
    if (err) {
        return console.log(err);
    }
 
    //we now have an open connection to the database 
    //so lets get some data 
    

    db.query("SELECT MFMOMR03 FROM CCSDTACD.DMFMOMR GROUP BY MFMOMR03", function (err, rows, moreResultSets) {
        if (err) {
            return console.log(err);
        }
       

   setTimeout(function() { 

    done(null, rows);
    
  }, 1000);

   if (err) {
       return console.error(err);
   }
   console.log("here are the rows " + rows)
   /*rows.forEach( function (row){
       console.log( row );
   });
*/



     




        //if moreResultSets is truthy, then this callback function will be called 
        //again with the next set of rows. 




    });//end of db query

})




});//end of async response

var rows=response.result

rows.forEach( function (row){

      // console.log( row );
 for(var i in row){
                console.log("test "+ row[i])
                  //test[i] is the partnumber
                  //so I need to insert it into the Parts database.
                    var part=row[i]
                    
                    Partnumbers.insert({
                      partnumber: part
                       
                        });


            }


   });


/*
for(var i in foo){
            console.log(i); // alerts key
            var test= foo[i]

            for(var i in test){
                console.log("test "+ test[i])
                  //test[i] is the partnumber
                  //so I need to insert it into the Parts database.
                    var part=test[i]
                    
                    Partnumbers.insert({
                      partnumber: part
                       
                        });


            }
           
           
          }
*/