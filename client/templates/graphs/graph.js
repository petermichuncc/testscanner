
Meteor.subscribe('dataentries');
 Meteor.subscribe('datacenters');
 var count=0;
Session.set("count",0)
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
'click .1': function(event, template){
  if (Session.get("count")>0)
  {
  count=count-1;
  }
 
Session.set("count",count)
 


},
'click .2': function(event, template){
  if (Session.get("count")==0)
  {
  var test = $( "#s1" ).val()
  value=$( "#s1" ).val()
  console.log("this is the department value " + value)
Session.set("department", test)
  department=$( "#s1" ).val()

}
else if (Session.get("count")==1)
{

 var test = $( "#s1" ).val()
  value=$( "#s1" ).val()
 
Session.set("choice", test)
console.log("this is the choice session " + Session.get("choice"))
count=count+1;
  
 
Session.set("count",count)
}

/*
Here I need to determine what to do with the s1 value based on the count


*/

},
'click .3': function(event, template){
  
count=count+1;
  
 
Session.set("count",count)


}

})


/*
count=count+1;
  
 
Session.set("count",count)


*/