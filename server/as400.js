/*
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
    

    db.query("SELECT CCSDTACD.DMFMOMR.MFMOMR03 FROM CCSDTACD.DMFMOMR,CCSDTACD.DCSDIM,CCSDTACD.DMFMAPR  WHERE CCSDTACD.DMFMAPR.PLT LIKE '%CD%' AND CCSDTACD.DMFMAPR.ORDNO = CCSDTACD.DMFMOMR.MFMOMR02 AND CCSDTACD.DMFMOMR.MFMOMR01 LIKE '%CD%' AND CCSDTACD.DMFMAPR.ITMID = CCSDTACD.DCSDIM.ITMID GROUP BY CCSDTACD.DMFMOMR.MFMOMR03", function (err, rows, moreResultSets) {
        if (err) {
            return console.log(err);
        }
       

   setTimeout(function() { 

    done(null, rows);
    
  }, 1000);

   if (err) {
       return console.error(err);
   }
  // console.log("here are the rows " + rows)
  
        //if moreResultSets is truthy, then this callback function will be called 
        //again with the next set of rows. 

    });//end of db query

})

});//end of async response

var rows=response.result
Partnumbers.remove({ } )

rows.forEach( function (row){

      // console.log( row );
 for(var i in row){
               // console.log("test "+ row[i])
                  //test[i] is the partnumber
                  //so I need to insert it into the Parts database.
                    var part=row[i]
                    
                    Partnumbers.insert({
                      partnumber: part
                       
                        });


            }


   });
*/
//End of first query inserting items into part number db
console.log("start of second query ")

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
    


    db.query("SELECT CCSDTACD.DMFMAPR.ITMID, CCSDTACD.DMFMOMR.MFMOMR03 ,  CCSDTACD.DCSDIM.ITMDESC FROM CCSDTACD.DMFMOMR,  CCSDTACD.DCSDIM, CCSDTACD.DMFMAPR WHERE CCSDTACD.DMFMAPR.PLT LIKE '%CD%' AND CCSDTACD.DMFMAPR.ORDNO = CCSDTACD.DMFMOMR.MFMOMR02 AND CCSDTACD.DMFMOMR.MFMOMR01 LIKE '%CD%' AND CCSDTACD.DMFMAPR.ITMID = CCSDTACD.DCSDIM.ITMID  GROUP BY CCSDTACD.DMFMOMR.MFMOMR03, CCSDTACD.DCSDIM.ITMDESC, CCSDTACD.DMFMAPR.ITMID", function (err, rows, moreResultSets) {
        if (err) {

            return console.log(err);
        }
       

   setTimeout(function() { 

    done(null, rows);
    
  }, 1000);

   if (err) {
       return console.error(err);
   }
   //console.log("here are the rows " + rows)
  
        //if moreResultSets is truthy, then this callback function will be called 
        //again with the next set of rows. 

    });//end of db query

})

});//end of async response

var rows=response.result
//Partnumbers.remove({ } )

rows.forEach( function (row){

var itemid=row['ITMID']
var partnumber=row['MFMOMR03']
var description=row['ITMDESC']

itemid=itemid.trim()
partnumber=partnumber.trim()
description=description.trim()

  Orderstest.insert({
                itemid:itemid,
               partnumber: partnumber,
               desc: description
                       
                  });
               

   });
 console.log("completed all row")

//End of second query inserting items into part number db

