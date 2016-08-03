  Template.history.rendered = function () {


Meteor.subscribe('dataentries');

}


Template.history.helpers({
    dataentries: function(){
    	Meteor.subscribe('dataentries');
      console.log("count dataentries "+ Dataentries.find().count())
     //create a meteor method that returns Dataentries.find() 
     

      var start=moment().format("YYYY-MM-DD 05:00:00.000")
   
      return Dataentries.find({timestamp: {$gte: start}})

    }      
                                                             
})
