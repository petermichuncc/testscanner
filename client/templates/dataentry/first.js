import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
var showdd=null
var showtext=null
var count=0;
Session.set("count",0)
var people = [1, 2, 3, 4, 5, 6, 7]
if (Meteor.isClient) {

Template.registerHelper('showtext',function(input){
 return Session.get("showtext");
});

Template.registerHelper('showdd',function(input){
  return Session.get("showdd");
});

}

    Template.first.rendered = function () {
/*$('#initials').on('blur',function(){
   if (this.value.length < 4) $(this).focus();
});*/
 Meteor.subscribe('datacenters');
this.$('.datetimepicker').datetimepicker();

$("#initials").focus();

 $('.input').keypress(function(e) {
        if(e.which == 13) {
            jQuery(this).blur();
            jQuery('#submit').focus().click();
        }
    });



}
 
//var nowsync=TimeSync.serverTime(null, 300000);
Template.first.helpers({
    text: function () {
      //In this function I will return the text asking for the user to enter specific data
      if (Session.get("count")===1)
      {
        return "Please select the date: "
      }
      else if (Session.get("count")===2)
      {
        return "Please select a department: "
      }
       else if (Session.get("count")===3)
      {
        return "Please select a workcenter: "
      }
     
  },
  show: function(){

// I will create a boolean that will show true if the count is 2 or 3
if (Session.get("count")==2||Session.get("count")==3)
{

  Session.set("showdd",true)
}
else
{
 
  Session.set("showdd",false)
}

if (Session.get("count")>3)
{
  
  Session.set("showtext",true)
}
else
{
  
  Session.set("showtext", false)
}





  },
  workcenters: function()
  {
    //Here I will determine which array to send back
    //basically I need 9 different arrays
    var datacom=[1001,1020,1021]
    var packing=[1012,1013]
    var manual=[1058,1059]
    var scd=[1095,1096,1097]
    var manualBoxes=[1501,1502,1503,1504,1505,1506,1508,1511,1513,1514,1515,1516,1517,1518,1519,1520,2043]
    var metals=[2006,2018,2039,2060,2071,2091,2092]
    var raceway=[6020,6021,6105,6234,6304,6305,6308,6315,6316,6318,6319,6320,6341,6343,6345,6346,6355,6364,6370]
    var wiu=[3021]
    var autoBoxes=[5101,5102,5103,5104,5105,5300]





    

    return Datacenters.find()
  }
  
});



 Template.first.events({
    // events go here

"submit .workcenterSelection": function(event){
 event.defaultPrevented;
 

console.log("this is the count "+count)

return false;
},
'click .1': function(event, template){
 //Router.go('one')
//I need to store the user submitted date into a session variable

var test = $( "#date" ).val()
console.log("this is the test "+ test)
 count=count+1;
Session.set("count",count)

},
'click .2': function(event, template){
 //Router.go('one')
var test = $( "#name" ).val()
console.log("this is the test "+ test)
 count=count+1;
Session.set("count",count)

},
'click .3': function(event, template){
 //Router.go('one')
var test=$( "#s1" ).val();
console.log("this is the test "+ test);
 count=count+1;
Session.set("count",count)

},
'click .4': function(event, template){
 //Router.go('one')

 count=count+1;
Session.set("count",count)

}
})