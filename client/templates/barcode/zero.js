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
    piecesperbag: function () {

    	/*
			if the item id has 
			31: box
			37: label
			33: 

   	*/
			/*
					If there is a 31 in the front then it is a box

		*/

		/*
			So I need to grab an object from the server that contains the 


		*/

     
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