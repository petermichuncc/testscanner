import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

    Template.zero.rendered = function () {
/*$('#initials').on('blur',function(){
   if (this.value.length < 4) $(this).focus();
});*/
Meteor.subscribe('scans');


}
   
//var nowsync=TimeSync.serverTime(null, 300000);
Template.zero.helpers({
    parts: function () {

     
  }
  
});



 Template.zero.events({
    // events go here

"submit .workcenterSelection": function(event){
 event.defaultPrevented;
 Session.setPersistent("tech", $( "#initials" ).val())

  Router.go('two')

return false;
}
})