



Template.final.rendered =function(){

Materialize.toast('Good job', 999000, 'light-blue lighten-2 cp z-depth-2')
//Add code to save the person and partnumber of job to a database
console.log("tech " + Session.get("tech")+ " partnumber " + Session.get("scanned")+ "mismatch scans "+Session.get("record")+"override" + Session.get("override"))

Meteor.call('scansInsert',Session.get("tech") ,Session.get("scanned"),Session.get("record"),Session.get("override"))
console.log("just called scans insert")

};

Template.final.events({
'click .1': function(event, template){

$( ".cp" ).hide();
 

 


}
});



Template.final.helpers({
    output: function () {
/*
So here I will need to  call a server side function
that will calculate the pieces/bag and bags/box.
Then I will create a toast that will show this data.
*/

     

  }
  
});
