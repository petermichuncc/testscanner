Session.set("idtest",null)
	Meteor.subscribe('dataentries');


  Template.table.rendered = function () {

$("#myBtn").click(function(){
        $("#myModal").modal();
    });


}

Template.table.helpers({
    dataentries: function(){
    	Meteor.subscribe('dataentries');
      console.log("count dataentries "+ Dataentries.find().count())
     
     return Dataentries.find({},{sort: {timestamp: -1}, limit: 5})
   
      //return Dataentries.find({})

    }      
                                                             
})
if (Meteor.isClient) {

Template.registerHelper('idtest',function(input){
  return Session.get("idtest")
});




}
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