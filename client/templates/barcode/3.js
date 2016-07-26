var colortest=true
var good=null
var bag=0
var box=0
var test=0
var count=0
var temp=0
var temp1=0
var temp2=0
var temp3=0
var run=true
var record=0
var go="green"
var text=""


//I need to record if a bag, box, and kanban ticket have been scanned
//I need to send this into the 
//Add reactive dictionary variable for the pasted content
if (Meteor.isClient) {

Template.registerHelper('testnew',function(input){
  return Template.instance().state.get("counter")
});

Template.registerHelper('kanbancount',function(input){
  return Session.get("kanbancount");
});

Template.registerHelper('kanbanshow',function(input){
  return Template.instance().state.get("kanbanshow")
});

Template.registerHelper('colorshow',function(input){
  return Session.get("colorshow")

});

Template.registerHelper('descshow',function(input){
  return Session.get("descshow")

});

Template.registerHelper('color',function(input){
  return Template.instance().state.get("color")

});

Template.registerHelper('colorDescription',function(input){
  return Template.instance().state.get("colorDescription")

});



Template.registerHelper('partscan',function(input){
  return Template.instance().state.get("partscan")

});

Template.registerHelper('partscandesc',function(input){
  return Template.instance().state.get("partscandesc")

});

Template.registerHelper('colorDescription',function(input){
  return Template.instance().state.get("colorDescription")

});

Template.registerHelper('colorDescription',function(input){
  return Template.instance().state.get("colorDescription")

});
Template.registerHelper('test',function(input){
 
});
Template.registerHelper('input',function(input){
  return Session.get("input")

});


}

   Template.three.created = function () {
      
 


    this.state = new ReactiveDict();
  
   
//initialize or setup all of the time stamps here 
this.state.set('color', null);
this.state.set('colorshow', 0);
this.state.set('counter', 0);
this.state.set('kanban', false);
this.state.set('kanbancheck', false);
this.state.set('barcode', 0);
this.state.set('text', null);
this.state.set('bag', 0);
this.state.set('kanbanshow',false)
this.state.set('kanbangood',false)
this.state.set('colorDescription',null)
this.state.set('good',null)



this.state.set('partscan', null);
this.state.set('partscandesc',null)
this.state.set('partshould',null)
this.state.set('partshoulddesc',null)



Session.set('input',true)
Session.setPersistent("record", 0)
Session.setPersistent("override", 0)
Session.set("scan2",0)
Session.set("kanbancheck", false)
Session.set("joborder",false)
Session.set("temp", 0)
Session.set("temp1", 0)
Session.set("temp2", 0)
Session.set("kanbantag", 0)
Session.set("bagtag",0)
Session.set("boxtag",0)
 Session.set("kanbanquestion", false)
 Session.set("descshow",false)
 Session.set("result", null)
}  



    Template.three.rendered = function () {
 /*$( ".3" ).click(function() {
  alert( "Handler for .click() called." );
});
*/
/*
$('#initials').on('blur',function(){
   if (this.value.length < 4) $(this).focus();
});
*/
$("#initials").focus();
test=0
var typingTimer;                //timer identifier
var doneTypingInterval = 1000;
var $input=$("#initials")
   $input.on('keyup', function () {

    test=(this.value);
  console.log("this is a test" + test)
$("#initials").val()
console.log(" test 1 " +$("#initials").val())
test=$("#initials").val()
clearTimeout(typingTimer);
  typingTimer = setTimeout(doneTyping, doneTypingInterval);

  });
   $input.on('keydown', function () {
  clearTimeout(typingTimer);
});
     function doneTyping () {
  //do something
  run=true
  console.log("this is the temp session " + Session.get("temp"))

  if (test==Session.get("scan2")|| test==Session.get("temp")||test==Session.get("scan")||test==Session.get("bagtag")||test==Session.get("boxtag"))
  {
    //send an alert
    Materialize.toast('Please scan a new barcode', 3000,'blue')

    $('#initials').val('');
    //clear the input box
  }
  else
  {
   
    Session.set("scan2",test)
  }
 
  if (temp>0)
 {
  temp=0
 }

//Here I need to check if the test equals any of the other session variables
//and also if any of the session variables will equal each other if the test is stored inside it?
// ex: t1=30 t2=45 t3=0        test =45  then it will go into t3 if only check if test = session
// I need to keep t3 from becoming 45
// only store in t3 if t2 != test
 if ( temp==0 &&Session.get("temp")!=test)
  {
    Session.set("temp", test)
     temp=temp+1;
  }
  

//if Session.get("kanbangtag")===true
//At this point 







}

}


Template.three.events({
    // events go here
'click .1': function(event, template){
 Router.go('scan')
 console.log("this is a test")   

}
})
//var nowsync=TimeSync.serverTime(null, 300000);
Template.three.helpers({
    part: function () {
    /* if (typeof ReactiveMethod.call('part', Session.get("scan2"))==="string" &&run===true)
 {
    
     
     var scan2=ReactiveMethod.call('part', Session.get("scan2"))
  }
  return scan2
  */

  },
  desc: function()
  {
//call a meteor method that sends the description and takes in a upc from the client
/*if (typeof ReactiveMethod.call('part', Session.get("scan2"))==="string" &&run===true)
 {
     
     
     var scan2=ReactiveMethod.call('desc', Session.get("scan2"))
  }
  return scan2

*/

  },
  
  
  good: function()
   {
    //basically this will return a boolean for whether the background should turn green or not and go to the next page
    //put this comparison on the server side
    //
 Session.set("kanbantag", false)

      if (typeof ReactiveMethod.call('rawmaterial', Session.get("scan2"))==="string"&&run===true && Template.instance().state.get("counter")<2)
  {
    //This checks if it is a raw material that was
    Session.set("kanbantag", Session.get("scan2"))
     
  }






   if (typeof ReactiveMethod.call('total', Session.get("scan2"))==="object" &&run===true)
 {

    if (Session.get("scan2").charAt(0)==7||Session.get("scan2").charAt(0)==8)
    {
      Template.instance().state.set("bag", true)
      Session.set("bagtag",Session.get("scan2"))
    }
    else
    {
      Session.set("boxtag",Session.get("scan2"))
    }
     console.log("this is bag template " + Template.instance().state.get("bag"))
     var scan2=ReactiveMethod.call('total', Session.get("scan2"))
     var scan2desc=scan2.desc
     scan2=scan2.partnumber
  }
  else if (typeof ReactiveMethod.call('rawmaterial', Session.get("scan2"),Session.get("scannedOrdernumber"))==="string"&&run===true && Template.instance().state.get("counter")>=2)
  {
    //This checks if it is a raw material that was
    Template.instance().state.set("kanban", true)
     //Template.instance().state.set("kanbangood", true)
     
     var scan2=ReactiveMethod.call('rawmaterial', Session.get("scan2"),Session.get("scannedOrdernumber"))
     
 if (typeof ReactiveMethod.call('kanbanpart', Session.get("scan2"),Session.get("scannedOrdernumber"))==="string")
  {
    //This checks if it is a raw material that was
    var scan2desc=ReactiveMethod.call('kanbanpart', Session.get("scan2"),Session.get("scannedOrdernumber"))
    
  }
  else
  {
    scan2desc=null
  }



  }
  console.log("this is scan2 " + scan2)
  console.log("this is typeof compare " + typeof ReactiveMethod.call('compare', scan2,Session.get("scanned")))
if (typeof ReactiveMethod.call('compare', scan2,Session.get("scanned"))==="string" )
{

     var result=ReactiveMethod.call('compare', scan2,Session.get("scanned"))
     Session.set("result",result)
     console.log("this is the result "+ result)

 if(result==="red" && run===true)
      {
        if (Template.instance().state.get("kanban")===true)
    {
      Template.instance().state.set("kanbangood",true)
      Template.instance().state.set("text", false)
  
    }
 Session.set("descshow",true)
  var test3="The partnumber you scanned was: "
       test3=test3.concat(scan2)
//don't show description if it was ekanban
Materialize.toast(test3, 999000,'blue ch z-depth-2')
        if (typeof scan2desc=="string")
        {
       var test4="Description: "
         test4=test4.concat(scan2desc)
        Materialize.toast(test4, 999000,'blue ch z-depth-2')
        Template.instance().state.set('partscandesc',test4)
      }
     var test2="The partnumber should have been: "
   
    test2=test2.concat(Session.get("scanned"))
     var test5="Description: "
   
    test5=test5.concat(Session.get("scannedDesc"))
 
  Materialize.toast(test2, 999000,'orange ch z-depth-2')
    Materialize.toast(test5, 999000,'orange ch z-depth-2')
//I also need to show a toast with a button that in it
//
var colortest=' <button class="btn btn-default 6 #78909c blue z-depth-5 " id="test1" onclick="myFunction()" >Acknowledge</button>'
  var $toastContent = $(colortest);
  Materialize.toast1($toastContent, 999000, 'ch');
$('#test1').mouseup(function() { this.blur() })


    Template.instance().state.set('partscan', test3);
    
    Template.instance().state.set('partshould',test2)
    Template.instance().state.set('partshoulddesc',test5)

  
     run=false
   }
   else if(result==="green" && run===true)
   {
    Session.set("descshow",false)
    Materialize.toast('Match', 4000,'light-blue lighten-2 z-depth-2')
    //count shouldn't go up after the bag and box are scanned and
    //the scanned item was ekanban
    count=count+1

      if (Template.instance().state.get("kanban")===true)
    {
  Template.instance().state.set("text", true)
    }
    


    Template.instance().state.set("counter", count)

 run=false
   

   }
   
  if (result==="green")
  {

     
    
    $('#initials').val('');
    go="green"
    
  }
  else if (result==="red")
  {

    if (Template.instance().state.get("kanban")===true)
    {
     

    }
    record=record+1

    Session.setPersistent("record", record)
    //Tell what partnumber should have been
    
    
    $('#initials').val('');
  
    go="red"
    
  }
 
}
else
{
  $('#initials').val('');
}

return go
  },
  text:function()
  {
   
//I need to determine if a bag was scanned 


var kanbancount=Number(Session.get("kanbancount"))
kanbancount=kanbancount+1

console.log("this is the "+test )

 if( Template.instance().state.get("counter")==0)
   {

    return "Please scan the printed bag or box label"
    //Session.set("scan",0)
    
  }      
    
    else if (Template.instance().state.get("counter")==1  )
    {//Here I should show a toast that indicates what the user just scanned
      
   


if (Template.instance().state.get("bag")===true)
{
 return "Please scan the box label: "

}
else
{
  return "Please scan the printed bag: "
}
      
    
    //Materialize.toast(test3, 15000,'blue')
    }
    else if (Template.instance().state.get("counter")===2 )
    {
      
      /*
        if TC==2 then "Please scan the ekanban"

        if TC>2 && KC-TC>=0 then "Please scan the next ekanban"
    

      */
      
   
       function test()
  {
         if (Session.get("kanbanquestion")===false)
{
    
 Session.set("kanbanquestion", true)
}
}
    //Template.instance().state.set("kanbancheck",true)
   
    setTimeout(test, 20000);
 
      Template.instance().state.set("kanbanshow", true)
    
      return "Please scan the eKanban ticket part number: "
     
    }
    else if (Template.instance().state.get("counter")>2 && kanbancount-Template.instance().state.get("counter")>=0)
    {
      return "Please scan the next ekanban ticket part number"

    }
    else if (kanbancount-Template.instance().state.get("counter")<0)

    {
      //test
      Router.go('final');
    }
    
      
    
           

       
   
    },
  kanbancheck: function()
  {
  
//I'll use this function to check if there was a ticket entry or not
//If there wasn't I can send out a toast that asks the user if they want to override
//and finish the job
//I'll need a handle bar setup that only shows a button if this returns true
//basically return true if the counter is equal to 2 and a condition
//has been met that proves the person has no kanban ticket

//create a specific condition for the template instance confirming the user doesn't have an
//ekanban ticket

if ( Template.instance().state.get("kanbangood")===true && Template.instance().state.get("counter")>=2 &&Session.get("kanbanquestion")===true)
 
{ 
console.log("inside the kanbancheck")

  //function test()
  //{
   
    Materialize.toast("Do you have a Kanban ticket?", 4000,'light-blue lighten-2')
  good=true
  
  
    //Template.instance().state.set("kanbancheck",true)
    
    //I should return good even when a bad kanban ticket is scanned 
    //currently this isn't running if a kanban is scanned 

  
  //}
Session.set("kanbanquestion", false)
  // setTimeout(test, 5000);


   

}
else if (Template.instance().state.get("counter")>=2 &&Session.get("kanbanquestion")===true)
{

Materialize.toast("Do you have a Kanban ticket?", 4000,'light-blue lighten-2 z-depth-2')
  good=true
  
    
Session.set("kanbanquestion", false)
}
return good
 },
 colorFxn: function()
 {
//here I will 
//basically I am showing the scanned color in this function.
//I need to have two different functions based on if the scanned item 
// was good or not
 
//only do this if the job scanned was green
var kanbancount=Number(Session.get("kanbancount"))
kanbancount=kanbancount+1

 if (typeof ReactiveMethod.call('color', Session.get("scan2"))==="object"&&Template.instance().state.get("kanban")===true &&Session.get("result")==="green")
  {

   
 



Session.set("colorshow", true)

    //This checks if it is a raw material that was
 var object= ReactiveMethod.call('color', Session.get("scan2"))
 color=object.Description
 //put this color into a reactive var and send it to spacebar
 Template.instance().state.set("colorDescription", color)
 var test2="The scanned color is "
    test2=test2.concat(color)
   
   // create a div that holds the text of test 2
 /*var  colorText='<div class="mytextnew"> '
colorText=colorText.concat(test2)
colorText=colorText.concat(' </div>')
console.log("this is the color text "+ colorText)
var $toastContent1 = $(colorText);*/




     //I can return the location of the image of the color
//I need to set a template variable to true here and then set it to false
//after 5 seconds
//That template variable will show set a template helper to true or false
//basically take "colors/" and concatenate the suffix from the colors db to it
//then add .jpg to the end
var suffix=object.Suffix

var colorLocation="colors/"
 colorLocation=colorLocation.concat(suffix);
 colorLocation=colorLocation.concat(".jpg")
 console.log("this is the color location "+ colorLocation)


colorshow=true



Template.instance().state.set("color", colorLocation)


var colortest='<div class="mytextnew"> <img class="img-responsive z-depth-2 " height="150px" width="150px" src="colors/'
colortest=colortest.concat(suffix)
colortest=colortest.concat(".jpg\"")
colortest=colortest.concat(" /> </div>")
console.log("this is the colortest "+ colortest)
  
  var $toastContent = $(colortest);

  //so here I need to determine if the scan was
  //red or green
  //Then based on that determine how long I should show
  //the color for
//Template.instance().state.set("text", true)  if this is true then it was a green scan

//console.log("this is the text " +Template.instance().state.get("text"))
/*
kanbancount-Template.instance().state.get("counter")

*/


if (Template.instance().state.get("text")===false)
{
   Materialize.toast2(test2, 10000, 'light-blue lighten-2 z-depth-2 toasttextbig');
    Materialize.toast2($toastContent, 10000, '');
}
 else if (Template.instance().state.get("text")===true)
{

   Materialize.toast2(test2, 999999000, 'light-blue lighten-2 cp z-depth-2 toasttextbig');
 
    Materialize.toast2($toastContent, 999999000, 'cp');
}



function x() {
   var promise = new Promise(function(resolve, reject) {
     setTimeout(function() {
      
       resolve(false);
     }, 10000);
   });
   return promise;
}

x().then(function(done) {
  
  Session.set("colorshow", done)
  console.log(done); // --> 'done!'
});






  }












 },
 kanbanamount: function()
 {
  //basically I need to find the total kanban
  //this will be in Session.get("kanbancount")
  //
  var kanbancount=Session.get("kanbancount")

  //I also need to retrieve an array from the server that has
  // all of the partnumbers associated with the order
  //basically I will loop through the kanban db and store
  //all of the partnumbers 

  //Then I will
  return



 }
 


});


 Template.three.events({
 'click .1': function(event, template){
 Router.go('two')
  

},
'click .2': function(event, template){

   Session.setPersistent("override",true)
   Session.set("descshow",false)
Router.go('final')
},
'click .3': function(event, template){

$( ".ch" ).hide();
  $( ".modal-dialog" ).hide();
 Session.set("descshow",false)
},
'click .6': function(event, template){

$( ".ch" ).hide();
  $( ".modal-dialog" ).hide();
 Session.set("descshow",false)
 

console.log("this is the input "+ Session.get("input"))
}
 });






