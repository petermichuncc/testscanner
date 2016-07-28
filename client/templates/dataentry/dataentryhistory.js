Template.table.helpers({
    dataentries: function(){
    	Meteor.subscribe('dataentries');
      console.log("count dataentries "+ Dataentries.find().count())
     
     return Dataentries.find({})
   
      //return Dataentries.find({})

    }      
                                                             
})
