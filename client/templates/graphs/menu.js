

Template.menu.rendered = function(){
	 


};

Template.menu.helpers({
    tempaverage: function () {
//ReactiveMethod.call('tempaverage')
}

})

Template.menu.events({
    // events go here

"submit .workcenterSelection": function(event){
 event.defaultPrevented;
 

console.log("this is the count "+count)

return false;
},
'click .1': function(event, template){
  
 

 


},
'click .2': function(event, template){
  if (Session.get("count")==0)
  {
  	Session.set("graphname", "Temp vs Permanent")
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
else if (Session.get("count")==2 && Session.get("choice")=="operator")
{
//Here I need to grab the name of the operator and use this to calculate average productivity by
//shift
name=$( "#name" ).val()
  value=$( "#name" ).val()
  console.log("THis is the input in if statement " +$( "#name" ).val())
  Session.set("operator",name)
count=count+1;
Session.set("count",count)

  //$('#name').val('');
  //$("#name").focus();


}
else if (Session.get("count")==2 && Session.get("choice")=="workcenter")
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