
Meteor.subscribe('dataentries');
 Meteor.subscribe('datacenters');
 var count=-1;
Session.set("countnew",-1)
Session.set("department1", "datacom")
Session.set("choice", null)
Session.set("graphname", "Temp vs Permanent")

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
  if (Session.get("countnew")>-1)
  {
  count=count-1;
  }
 
Session.set("countnew",count)
 


},
'click .2': function(event, template){
  if (Session.get("countnew")==0)
  {
  	Session.set("graphname", "Temp vs Permanent")
  var test = $( "#s1" ).val()
  value=$( "#s1" ).val()
  console.log("this is the department value " + value)
Session.set("department1", test)
  department=$( "#s1" ).val()

}
else if (Session.get("countnew")==1)
{

 var test = $( "#s1" ).val()
  value=$( "#s1" ).val()
 
Session.set("choice", test)
console.log("this is the choice session " + Session.get("choice"))
count=count+1;
Session.set("countnew",count)
}
else if (Session.get("countnew")==2 && Session.get("choice")=="operator")
{
//Here I need to grab the name of the operator and use this to calculate average productivity by
//shift
name=$( "#name" ).val()
  value=$( "#name" ).val()
  console.log("THis is the input in if statement " +$( "#name" ).val())
  Session.set("operator",name)
count=count+1;
Session.set("countnew",count)

  //$('#name').val('');
  //$("#name").focus();


}
else if (Session.get("countnew")==2 && Session.get("choice")=="workcenter")
{
//Here I'll be selecting the option to see a comparison of 
var test = $( "#s1" ).val()
  value=$( "#s1" ).val()
 
Session.set("workcenterchoice", test)
console.log("this is the choice session " + Session.get("workcenterchoice"))
count=count+1;
Session.set("countnew",count)


}
else if (Session.get("countnew")==3 && Session.get("choice")=="workcenter")
{
//Here I need to grab the name of the operator and use this to calculate average productivity by
//shift
var test = $( "#workcenter" ).val()
  value=$( "#workcenter" ).val()
  console.log("this is the department value " + value)
  //put the work center name into this session variable

Session.set("workcenterName", test)



  //$('#name').val('');
  //$("#name").focus();


}
else if (Session.get("countnew")==3 && Session.get("choice")=="operator")
{
//Here I need to grab the name of the operator and use this to calculate average productivity by
//shift
var test = $( "#workcenter" ).val()
  value=$( "#workcenter" ).val()
  console.log("this is the department value " + value)
  //put the work center name into this session variable

//Session.set("workcenterName", test)



  //$('#name').val('');
  //$("#name").focus();


}

/*
Here I need to determine what to do with the s1 value based on the count


*/

},
'click .3': function(event, template){
  
count=count+1;
  
 
Session.set("countnew",count)


},
'click .4': function(event, template){
  
count=count+1;
 
 
Session.set("countnew",count)
console.log("this is the session count " + Session.get("countnew"))

},
'click .5': function(event, template){
  
count=count+2;
  
 
Session.set("countnew",count)


}

})


/*
count=count+1;
  
 
Session.set("count",count)


*/