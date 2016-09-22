Session.set("idtest",null)
	Meteor.subscribe('kanbanstest');



Template.table2.rendered =function(){
$("#btnExport").click(function (e) {
    window.open('data:application/vnd.ms-excel,' + $('#dvData').html());
    e.preventDefault();

   
});

}

Template.table2.helpers({
    kanbanstest: function(){
    	Meteor.subscribe('kanbanstest');
      
      /*
        Create a for loop that goes through ever Kanbantest partnumber and finds 
        out if it is in the upc database.  If it isn't then add it into an array.

        Use a server side function

      */

        var test =ReactiveMethod.call('missingPartnumber')
      console.log("this is the reactive test "+ test)
  
    
     return test
   
      //return Dataentries.find({})

    }      
                                                             
})
if (Meteor.isClient) {

Template.registerHelper('idtest',function(input){
  return Session.get("idtest")
});




}
