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
  workcenter: function()
  {
    //Here I will determine which array to send back
    //basically I need 9 different arrays
    
    var people = [1, 2, 3, 4, 5, 6, 7]

    return people
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