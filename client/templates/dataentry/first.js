import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
var count=0;
Session.set("count",0)
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

      if (Session.get("count")===2)
      {
        return "Please enter your name: "
      }
     
  }
  
});



 Template.first.events({
    // events go here

"submit .workcenterSelection": function(event){
 event.defaultPrevented;
 
count=count+1;
Session.set("count",count)
console.log("this is the count "+count)

return false;
},
'click .1': function(event, template){
 //Router.go('one')
 count=count+1;
Session.set("count",count)

}
})