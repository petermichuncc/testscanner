import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
var countnew=0;
    Template.one.rendered = function () {
/*$('#initials').on('blur',function(){
   if (this.value.length < 4) $(this).focus();
});*/
Meteor.subscribe('scans');
$("#initials").focus();

 $('.input').keypress(function(e) {
        if(e.which == 13) {
            jQuery(this).blur();
            jQuery('#submit').focus().click();
        }
    });



}
   
//var nowsync=TimeSync.serverTime(null, 300000);
Template.one.helpers({
    parts: function () {

     
  }
  
});



 Template.one.events({
    // events go here

"submit .workcenterSelection": function(event){
 event.defaultPrevented;
 Session.setPersistent("tech", $( "#initials" ).val())

  Router.go('two')

return false;
},
'click .1': function(event, template){
 //Router.go('one')
 console.log("this is a test")   

}
})