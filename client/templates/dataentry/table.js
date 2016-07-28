Template.table.helpers({
    dataentries: function(){
    	Meteor.subscribe('dataentries');
      console.log("count dataentries "+ Dataentries.find().count())
     
     return Dataentries.find({},{sort: {timestamp: -1}, limit: 5})
   
      //return Dataentries.find({})

    }      
                                                             
})

Template.table.events({
    'click .userRow':function(e, t){
       
var name=this.name
var date=this.date
var employeestatus=this.employeestatus
var department=this.department
var workcenter=this.workcenter
var shift=this.shift
var planned=this.planned
var actual=this.actual
var productivity=this.productivity
console.log("You Select Client Row " + name);
     console.log("You Select Client Row " + date);
 console.log("You Select Client Row " + employeestatus);
 console.log("You Select Client Row " + department);
console.log("You Select Client Row " + workcenter);
console.log("You Select Client Row " + shift);
console.log("You Select Client Row " + planned);
console.log("You Select Client Row " + actual);
console.log("You Select Client Row " + productivity);

var count=Dataentries.find({name:name,date,date,employeestatus:employeestatus, department:department, workcenter:workcenter, shift:shift, planned:planned, actual:actual,productivity:productivity}).count()
console.log("this is the count "+ count)
//
        
      
    }
});