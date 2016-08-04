
Meteor.subscribe('dataentries');
 Meteor.subscribe('datacenters');
Session.set("department", "datacom")
Template.graph.rendered = function(){
	 


};

Template.graph.helpers({
    tempaverage: function () {
//ReactiveMethod.call('tempaverage')
}

})

Template.graph.events({
    // events go here

"submit .workcenterSelection": function(event){
 event.defaultPrevented;
 

console.log("this is the count "+count)

return false;
},

'click .2': function(event, template){
  
  var test = $( "#s1" ).val()
  value=$( "#s1" ).val()
  console.log("this is the department value " + value)
Session.set("department", test)
  department=$( "#s1" ).val()


}

})
