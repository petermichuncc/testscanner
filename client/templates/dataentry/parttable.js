Session.set("idtest",null)
	Meteor.subscribe('dataentries');


  Template.parttable.rendered = function () {


}

Template.parttable.helpers({
    dataentries: function(){
    	
     var test =ReactiveMethod.call('partTable')
     console.log("this is the typeof data server test "+ typeof ReactiveMethod.call('partTable'))
     //return Dataentries.find({},{sort: {timestamp: -1}, limit: 5})
   
      //return Dataentries.find({})

    }      
                                                             
})
if (Meteor.isClient) {

Template.registerHelper('idtest',function(input){
  return Session.get("idtest")
});




}
Template.parttable.events({
    'click .userRow':function(e, t){
    
//trigger a removal of this database entry when it is clicked






//
        
      
    }
});