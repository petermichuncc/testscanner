import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
var count=0;
Session.set("count",0)
    Template.start.rendered = function () {
/*$('#initials').on('blur',function(){
   if (this.value.length < 4) $(this).focus();
});*/

this.$('.datetimepicker').datetimepicker();
 //$('select').material_select();

$("#initials").focus();

 $('.input').keypress(function(e) {
        if(e.which == 13) {
            jQuery(this).blur();
            jQuery('#submit').focus().click();
        }
    });



}
   
 Template.start.events({
    // events go here

'click .1': function(event, template){
 Router.go('first')



}
})




