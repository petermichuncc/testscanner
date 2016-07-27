Template.table.helpers({
    dataentries: function(){
    	Meteor.subscribe('dataentries');
      console.log("count dataentries "+ Dataentries.find().count())
     
     return Dataentries.find({},{sort: {timestamp: -1}, limit: 5})
   
      //return Dataentries.find({})

    }      
                                                             
})
