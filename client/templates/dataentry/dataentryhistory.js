  Template.history.rendered = function () {


Meteor.subscribe('dataentries');

}


Template.history.helpers({
    dataentries: function(){
    	Meteor.subscribe('dataentries');
      console.log("count dataentries "+ Dataentries.find().count())
     //create a meteor method that returns Dataentries.find() 
     
     return Dataentries.find({})
   
      //return Dataentries.find({})

    }      
                                                             
})
