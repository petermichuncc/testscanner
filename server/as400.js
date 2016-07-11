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
