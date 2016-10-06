/*Meteor.startup(function () {
  query.start();
});*/

var later = require('later');


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
/*console.log("start of second query ")

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
Orders.remove({ } )

rows.forEach( function (row){

var itemid=row['ITMID']
var partnumber=row['MFMOMR03']
var description=row['ITMDESC']

itemid=itemid.trim()
partnumber=partnumber.trim()
description=description.trim()

  Orders.insert({
                itemid:itemid,
               partnumber: partnumber,
               desc: description
                       
                  });
               

   });
 console.log("completed all row")
*/
//End of second query inserting items into part number db

//Third query to grab Kanban items
/*
console.log("start of third query ")

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
    


    db.query("SELECT CCSDTACD.DMFMAPR.ITMID, CCSDTACD.DCSDIM.ITMDESC,CCSDTACD.DMFPSMR.USGRAT,CCSDTACD.DCSDIM.MAJRTEID,CCSDTACD.DMFMOMR.MFMOMR03 FROM CCSDTACD.DMFPSMR, CCSDTACD.DCSDIM, CCSDTACD.DMFMAPR, CCSDTACD.DMFMOMR WHERE CCSDTACD.DMFMOMR.MFMOMR01 LIKE '%CD%' AND CCSDTACD.DMFMAPR.ORDNO = CCSDTACD.DMFMOMR.MFMOMR02  AND CCSDTACD.DCSDIM.MFGITMTYP LIKE '%K%' AND CCSDTACD.DCSDIM.ITMID = CCSDTACD.DMFMAPR.ITMID AND CCSDTACD.DCSDIM.PLT LIKE '%CD%'  AND CCSDTACD.DMFPSMR.ITMID = CCSDTACD.DMFMAPR.ITMID AND CCSDTACD.DMFPSMR.PLT LIKE '%CD%' AND CCSDTACD.DMFPSMR.PRTID  = CCSDTACD.DMFMAPR.PRTID GROUP BY CCSDTACD.DMFMAPR.ITMID, CCSDTACD.DCSDIM.ITMDESC, CCSDTACD.DMFPSMR.USGRAT, CCSDTACD.DCSDIM.MAJRTEID, CCSDTACD.DMFMOMR.MFMOMR03", function (err, rows, moreResultSets) {
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
Kanbans.remove({ } )

rows.forEach( function (row){

var itemid=row['ITMID']
var partnumber=row['MFMOMR03']
var description=row['ITMDESC']
var usagerate=row['USGRAT']
var majorid=row['MAJRTEID']



itemid=itemid.trim()
partnumber=partnumber.trim()
description=description.trim()
//usagerate=usagerate.trim()
majorid=majorid.trim()

 Kanbans.insert({
                itemid:itemid,
               partnumber: partnumber,
               desc: description,
               usagerate: usagerate,
               majrid:majorid
                       
                  });
               

   });
 console.log("completed all row")
*/
//End of second query inserting items into part number db


var schedule = later.parse.recur().on(13).hour(); // on fifth minute of every hour, every day
//var hourlyEmailer = new ScheduledTask(schedule, sendHourlyEmails);

var task = new ScheduledTask(schedule, function () {
  console.log("Scheduled task was run.");
});
task.start();