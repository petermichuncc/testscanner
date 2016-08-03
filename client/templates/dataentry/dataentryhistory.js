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
Template.history.events({
    'click tr':function(e, t){
       
var name=this.name
var date=this.date
var employeestatus=this.employeestatus
var department=this.department
var workcenter=this.workcenter
var shift=this.shift
var planned=this.planned
var actual=this.actual
var productivity=this.productivity
var id=this._id
console.log("You Select Client Row " + name);
     console.log("You Select Client Row " + date);
 console.log("You Select Client Row " + employeestatus);
 console.log("You Select Client Row " + department);
console.log("You Select Client Row " + workcenter);
console.log("You Select Client Row " + shift);
console.log("You Select Client Row " + planned);
console.log("You Select Client Row " + actual);
console.log("You Select Client Row " + productivity);
console.log("You Select Client Row " + id);
Session.set("idtest",id)
//trigger a removal of this database entry when it is clicked

Meteor.call('alertremoval', name,date,productivity,id)




//
        
      
    }
});