Template.table.helpers({
    dataentries: function(){
    	Meteor.subscribe('dataentries');
      console.log("count dataentries "+ Dataentries.find().count())
     
     return Dataentries.find({},{sort: {_id: -1}, limit: 4})
   
      //return Dataentries.find({})

    }      
                                                             
})
