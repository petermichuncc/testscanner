import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

function myFunction() {
    var x = Math.floor((Math.random() * 5) + 1);

if (x==1)
{
 return 'Nice work'
}
else if (x==2)
{
   return 'Good job'
}
else if (x==3)
{
  return'Congratz'
}
else if (x==4)
{
  return 'Great'
}
else if (x==5)
{
  return 'Keep it up'
}

}

function myFunctionColor() {
    var x = Math.floor((Math.random() * 5) + 1);

if (x==1)
{
 return 'green'
}
else if (x==2)
{
   return 'blue'
}
else if (x==3)
{
  return'green accent-3'
}
else if (x==4)
{
  return 'cyan accent-2'
}
else if (x==5)
{
  return 'deep-purple darken-4'
}

}







var showdd=null
var showtext=null
var count=0;
Session.set("count",0)
Session.set("textgo",false)
Session.set("name", null)
var name=null
var date=null
var planned=null
var actual=null
var ss=null
var shift=null
var status=null
var department=null
var workcenter=null
if (Meteor.isClient) {

Template.registerHelper('showtext',function(input){
 return Session.get("showtext");
});

Template.registerHelper('showdd',function(input){
  return Session.get("showdd");
});

}

    Template.first.rendered = function () {
/*$('#initials').on('blur',function(){
   if (this.value.length < 4) $(this).focus();
});*/
$(document).keypress(function(event){

    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        $('#test').click();   
    }

});







 Meteor.subscribe('datacenters');
Meteor.subscribe('dataentries');
this.$('.datetimepicker').datetimepicker();

$("#initials").focus();

 $('.input').keypress(function(e) {
        if(e.which == 13) {
            jQuery(this).blur();
            jQuery('#submit').focus().click();
        }
    });



}
 
//var nowsync=TimeSync.serverTime(null, 300000);
Template.first.helpers({
    text: function () {
      //In this function I will return the text asking for the user to enter specific data
      console.log("this is the session count in text " + Session.get("count"))
      if (Session.get("count")===1)
      {
        return "Please enter employee name: "
      }
      /*
        add a new string to return
      */
      else if (Session.get("count")===2)
      {
        return "Please select a date: "
      }
      else if (Session.get("count")===3)
      {
        return "Please select employee status: " 
      }
       else if (Session.get("count")===4)
      {
        return "Please select the department: "
        
      }
      else if (Session.get("count")===5)
      { return "Please select the workcenter: "
       
      }
     else if (Session.get("count")===6)
      {
       
      return "Please select the shift: "
      }
      else if (Session.get("count")===7)
      {
        return "Please enter the planned (units): "
      }
      else if (Session.get("count")===8)
      {
        return "Please enter the actual (units): "
        
      }
      
  },
  show: function(){

// I will create a boolean that will show true if the count is 2 or 3
if (Session.get("count")>=1 && Session.get("count")<9)
{
  
  Session.set("showtext",true)
}
else
{
  
  Session.set("showtext", false)
}




if (Session.get("count")>=3 && Session.get("count")<7)
{

  Session.set("showdd",true)
}
else
{
 
  Session.set("showdd",false)
}






  },
  workcenters: function()
  {
    //I will grab a session variable that has the 
    var department =Session.get("department")
    console.log("this is the department "+ department)


    return Datacenters.find({department:department})
  }
  
});



 Template.first.events({
    // events go here

"submit .workcenterSelection": function(event){
 event.defaultPrevented;
 

console.log("this is the count "+count)

return false;
},
'click .0': function(event, template){
 //Router.go('one')
//I need to store the user submitted date into a session variable

 count=count+1;
Session.set("count",count)

},
'click .1': function(event, template){
 //Router.go('one')
//I need to store the user submitted date into a session variable

var value=''
if (count===1)
{
  name=$( "#name" ).val()
  value=$( "#name" ).val()
  console.log("THis is the input in if statement" +$( "#name" ).val())
  Session.set("name",name)
  $('#name').val('');
  $("#name").focus();
}
else if (count===2)
{
  date=$( "#date" ).val()
  value=$( "#date" ).val()
  date=moment(date).format("YYYY-MM-DD")
  $('#date').val('');
  $("#date").focus();
  $("#name").focus();
}
else if (count===7)
{

  planned=$( "#name" ).val()
   value=$( "#name" ).val()
  $('#name').val('');
  $("#name").focus();
}
else if (count===8)
{
  actual=$( "#name" ).val()
  value=$( "#name" ).val()
  $('#name').val('');
  $("#name").focus();
}


 if(value == ''){
     
var color=myFunctionColor()

Materialize.toast("Input can't be left empty", 4000, color)
   }
   else
   {
    count=count+1;
   }
 
Session.set("count",count)
if (count>=7)
{
  Session.set("textgo",1)
}
else
{
  Session.set("textgo",0)
}
console.log("this is the count " + count + "This is the session " + Session.get("count"))
//setup if statements that set session variables based on
//the current count 
 if (count===9)
 {
  console.log("name date planned actual status shift department workcenter " +name+ " "+ date+" "+ planned+" "+ actual+" "+ status+" "+ shift+" "+  department +" "+ workcenter )
//Here I will insert the data into dataentries
var productivity=Number(actual)/Number(planned)
var productivity=productivity * Number(100)
var productivity=productivity.toFixed(2);
console.log("this is the productivity to fixed 2 " + productivity )
productivity=Number(productivity)
console.log("this is the productivity converted to number" + productivity )
Meteor.call('datasInsert',name,date,status,department,workcenter,shift,planned,actual,productivity )

var word=myFunction()
var color=myFunctionColor()
console.log("this is myFunction "+ word)
Materialize.toast(word, 4000, color)

 
 
 }

console.log("this is the date "+ date)
console.log("this is the planned"+ planned)

},
'click .2': function(event, template){
 //Router.go('one')
console.log("this is the count in click 2 " + count)
var value=''
if (count===3)
{
  var test = $( "#s1" ).val()
  value=$( "#s1" ).val()

  status=$( "#s1" ).val()
  
 }
if (count===4)
{
  var test = $( "#s1" ).val()
  value=$( "#s1" ).val()
Session.set("department", test)
  department=$( "#s1" ).val()
  
 }
else if (count===5)
{
    workcenter=$( "#s1" ).val()
    value=$( "#s1" ).val()
 }
 else if (count===6)
{
shift=$( "#s1" ).val()
  value=$( "#s1" ).val()
 }




  if(value == ''){
     
var color=myFunctionColor()

Materialize.toast("Input can't be left empty", 4000, color)
   }
   else
   {
    count=count+1;
   }
 
 Session.set("count",count)
if (count>=7)
{
  Session.set("textgo",1)
}
else
{
  Session.set("textgo",0)
}



},
'click .3': function(event, template){
 //Router.go('one')
 var color=myFunctionColor()
 Materialize.toast('Have a good day', 4000, color)
count=0
Session.set("count",count)
},
'click .4': function(event, template){
 //Router.go('one')

 count=1
Session.set("count",count)

},
'click .5': function(event, template){
 //Router.go('one')
if (count>=2)
{
  count=count-1;
  Session.set("count",count)
}
if (count>=7)
{
  Session.set("textgo",1)
}
else
{
  Session.set("textgo",0)
}


},
})