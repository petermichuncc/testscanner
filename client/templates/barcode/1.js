import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

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
}
})