/*
use a session variable for 
the color of the 



*/


var count=-3
var colortest=true
var good=null
var bag=0
var box=0
var test=0


var run=true
var record=0
var go="green"
var text=""
  Session.set("kanbancount",0)
    Session.set("counter", -3)
    Session.set("start",1)
    Session.set("color", "white")
    Session.set("scan2",null)
Session.set("scan",null)
Session.set("bagtag",null)
Session.set("boxtag",null)

 Session.setPersistent("scannedOrdernumber", null)
//I need to record if a bag, box, and kanban ticket have been scanned
//I need to send this into the 
//Add reactive dictionary variable for the pasted content
if (Meteor.isClient) {

Template.registerHelper('testnew',function(input){
  return  Session.get("counter")
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




}

   Template.three.created = function () {
      
 


    this.state = new ReactiveDict();
  
   
//initialize or setup all of the time stamps here 
this.state.set('color', null);
this.state.set('colorshow', 0);
this.state.set('counter', -3);
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


Session.set("scannedPartnumber",null)

Session.setPersistent("record", 0)
Session.setPersistent("override", 0)

Session.set("kanbancheck", false)

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
 $('.input').keypress(function(e) {
        if(e.which == 13) {
            jQuery(this).blur();
            jQuery('#submit').focus().click();
        }
    });


 




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
  scan: function()
  {
console.log("this is the counter in scan "+ Session.get("counter"))
console.log("this is the run in scan" + run)
if (Session.get("counter")>-2 && run===true)
{
console.log("counter >-2")

$("#initials").focus();
test=null
var typingTimer;                //timer identifier
var doneTypingInterval = 1000;
var $input=$("#initials")
   $input.on('keyup', function () {
runnew=true
    test=(this.value);
  console.log("this is a test this.value" + test)

  


clearTimeout(typingTimer);
  typingTimer = setTimeout(doneTyping, doneTypingInterval);

  });
   $input.on('keydown', function () {
  clearTimeout(typingTimer);

});
     function doneTyping () {
  //do something
  run=true

   
console.log("this is finished test value "+ test)

console.log("this is test length "+ test.length)
if (test.length==0 &&test=="")
{
  test=Math.floor((Math.random() * 11) + 1);

}
console.log("this is test type "+ typeof test)
console.log(" this is test initials" +test)
/*
console.log("this is scan2 "+Session.get("scan2") )
console.log("this is scan "+Session.get("scan") )
console.log("this is bagtag "+Session.get("bagtag") )
console.log("this is boxtag "+Session.get("boxtag") )
*/
 /* if (runnew==true)
  {
    //send an alert
    Materialize.toast('Please scan a new barcode', 3000,'blue')
    runnew=false
console.log("please scan a new barcode")
   setTimeout(erase, 1000);
    //clear the input box
  }
  */
  if (runnew==true)
  {
   if (Session.get("counter")<0)
   {
    runnew=false
    Session.set("scan",test)

   }
   else
   {
    runnew=false
    Session.set("scan2",test)
  }
  }
 


  

}
//call function to erase
function erase() {
   $('#initials').val('');
}




}//end of if statement checking the count


  },
  kanbancomponent: function()
  {
    Template.instance().state.set("check",false)
    var contents=ReactiveMethod.call('kanbandb', Session.get("scan"))
    console.log("type of parts "+ typeof contents)
    console.log("is array parts "+ Array.isArray(contents))

 if (Array.isArray(contents))
 {    
  
 console.log("this is the last item  "+ contents[contents.length - 1])
      var count=contents.pop();
      console.log("this is the count "+ count)
      console.log("this is the last item  "+ contents[contents.length - 1])
if (typeof count==="number")
{
Template.instance().state.set("check",true)
  Session.setPersistent("kanbancount", count)
}
      


 
  
  }

  },  
 
  check: function()
  {
    console.log("this is the scan " + Session.get("scan"))

    var parts=ReactiveMethod.call('order', Session.get("scan"))
    console.log("type of parts "+ typeof parts)
    console.log("is array parts "+ Array.isArray(parts))
if (Array.isArray(parts)&& run===true && Template.instance().state.get("check")===true )
 {      console.log("test a")    
 $('#initials').val('');
run=false
     Materialize.toast('That was a correct job order', 8000,'light-blue accent-4 z-depth-2')
     count=count+1
   
      Session.set("counter", count)
   Session.setPersistent("scanned",parts[0])
   Session.setPersistent("scannedPartnumber", parts[0])
    Session.setPersistent("scannedDesc", parts[1])

  // scan1=Session.get("scan")

      Session.set("color", "green")
    //return "green"
  }
  /*else if(Session.get("scan")!=0 && run===true&& Array.isArray(parts)===false )
  { console.log("test b")   
    $('#initials').val('');
  
     
   
    Materialize.toast('That job order is not in the system', 8000,'orange darken-2 z-depth-2')
     Session.set("color", "red")
      run=false
  }*/
  else if (Session.get("scan")==0 && run==true )
  {console.log("test c")   
   
    //run=false
    $('#initials').val('');
  }

//return go

  },
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
    /*
      This function is going through and finding out if the scanned printed bag/box label
      or kanban was good or not.  If it was incorrect it lets the user know what the scanned
      item should have been. 

    */
Template.instance().state.set('partscan', null);
    
    Template.instance().state.set('partshould',null)
    Template.instance().state.set('partshoulddesc',null)
 Session.set("kanbantag", false)

  

   if (typeof ReactiveMethod.call('total', Session.get("scan2"))==="object" &&run===true)
 {
  /*
checks if box label/printed bag was scanned
  */

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
  else if (Array.isArray( ReactiveMethod.call('rawmaterial', Session.get("scan2")))&&run===true &&  Session.get("counter")>=2)
  {
     /*
      checks if kanban was scanned
  */
  var contents=ReactiveMethod.call('rawmaterial', Session.get("scan2"))
    Template.instance().state.set("kanban", true)
     //Template.instance().state.set("kanbangood", true)
     
     var scan2=contents[2]
     var scan2desc=contents[1]
     /*
        Need a description too.
     */
 /*
  scan2 is the item id,
  Session.get("scanned") is the partnumber

 */
 
  }

  console.log("this is scan2 " + scan2)
  console.log("this is typeof compare " + typeof ReactiveMethod.call('compare', scan2,Session.get("scanned")))
//This function is comparing the job order partnumber to the partnumber of the scanned item
// A more efficient thing to do would be to just check if the scanned item
//partnumber is within the job order?
/*
This logic is comparing the partnumber of the job order to that of the printed bag,box label, or kanban

*/
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
    console.log("This is the count in green before incr " + count)
    console.log("this is the react var count " +  Session.get("counter"))
    count= Session.get("counter")
    console.log("count after set equal to counter " + count)
    count = count+1
  console.log("this is the count after incr " + count)

      if (Template.instance().state.get("kanban")===true)
    {
  Template.instance().state.set("text", true)
    }
    


    
      Session.set("counter", count)
 run=false
   

   }
   
  if (result==="green")
  {

     
    
    $('#initials').val('');
   Session.set("color", "green")
    
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
  Session.set("color", "red")
   
    
  }
 
}
else
{
  $('#initials').val('');
}


  },
  text:function()
  {
   
//I need to determine if a bag was scanned 


var kanbancount=Number(Session.get("kanbancount"))
kanbancount=kanbancount+1

console.log("this is the "+test )
if(  Session.get("counter")==-2)
   {

    return "Please enter your initials"
    //Session.set("scan",0)
    
  }  
 if(  Session.get("counter")==-1)
   {

    return "Please scan the part number"
    //Session.set("scan",0)
    
  }  
 if(  Session.get("counter")==0)
   {
    Template.instance().state.set("check",false)
    return "Please scan the printed bag or box label"
    //Session.set("scan",0)
   
  }      
    
    else if ( Session.get("counter")==1  )
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
    else if ( Session.get("counter")===2 )
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
    else if ( Session.get("counter")>2 && kanbancount- Session.get("counter")>=0)
    {
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
      return "Please scan the next ekanban ticket part number"

    }
    else if (kanbancount- Session.get("counter")<0)

    {
      Session.set("kanbanquestion", false)
       Materialize.toast('<span class="toasttextbig center spantest"> Good job </span>', 999999000, 'light-blue lighten-2 cp z-depth-2')
Meteor.call('scansInsert',Session.get("tech") ,Session.get("scanned"),Session.get("record"),Session.get("override"))
     var x = document.getElementById("snackbar")
  console.log("This is the class name " + x.className)
  if (x.className != "show cp z-depth-2" && typeof Session.get("scannedPartnumber")=="string")
{
    x.className = "show cp z-depth-2";
    //setTimeout(function(){ x.className = x.className.replace("show", ""); }, 999999000);
}
console.log("test")
      //I need to have a session variable I setup next that triggers the final toast and snack bar to pop up
      Session.set("start", 3)
      run=true
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

if ( Template.instance().state.get("kanbangood")===true &&  Session.get("counter")>=2 &&Session.get("kanbanquestion")===true)
 
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
else if ( Session.get("counter")>=2 &&Session.get("kanbanquestion")===true)
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
var span1='<span class="toasttextbig center spantest">'
color=span1.concat(color)
var span2='</span>'
color=color.concat(span2)

 console.log("this is the color "+ color)
 //put this color into a reactive var and send it to spacebar
 Template.instance().state.set("colorDescription", color)
 var test2=color
   
   /*var colortest=' <button class="btn btn-default 6 #78909c blue z-depth-5 " id="test1" onclick="myFunction()" >Acknowledge</button>'
  var $toastContent = $(colortest);*/

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
kanbancount- Session.get("counter")
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
 piecesperbag: function () {




//So I need to take 1000 and divide it by the usage rate x 1000
console.log("this is scan " + Session.get("scan"))
var bag = ReactiveMethod.call('boxes', Session.get("scan"))
console.log("this is the type of bag " + typeof bag)
if (typeof bag!="boolean")
{
var bagusage=bag[1]
console.log("this is bag usagerate"+ bagusage)



var piecesPerBag=Number(1000)/(Number(1000)*bagusage)
Session.set("piecesPerBag",piecesPerBag)
console.log("this is the pieces per bag " + piecesPerBag)
      var output=piecesPerBag.toString()
      if (piecesPerBag===1)
      {
     output= output.concat(" piece per bag")
 }
 else
 {
  output= output.concat(" pieces per bag")
  }
    //make a new toast to increase the size of text or put it inside of a 
    //span element
    var span1='<span class="toasttextbig center spantest">'
output=span1.concat(output)
var span2='</span>'
output=output.concat(span2)
     Materialize.toast(output, 999999000, 'light-blue lighten-2 cp z-depth-2')
 }
  },
  bagsperbox: function () {


var box = ReactiveMethod.call('boxes', Session.get("scan"))
if (typeof box!="boolean")
{
var boxusage=box[0]
console.log("this is box usage "+ boxusage)

//So I need to take 1000 and divide it by the usage rate x 1000

var boxes= Number(1000)/(Number(1000)*boxusage)
console.log("this is the boxes " + boxes)

var bagsPerBox= boxes/Session.get("piecesPerBag")
//convert to string


/*
var span1='<span class="toasttextbig center spantest">'
color=span1.concat(color)
var span2='</span>'
color=color.concat(span2)
*/
//put the bagsper box inside a span

     console.log("this is the bags per box " + bagsPerBox)
     var output=bagsPerBox.toString()
     if (bagsPerBox==1)
      {
     output= output.concat(" bag per box")
 }
 else
 {
  output= output.concat(" bags per box")
  }
    
var span1='<span class="toasttextbig center spantest">'
output=span1.concat(output)
var span2='</span>'
output=output.concat(span2)
     Materialize.toast(output, 999999000, 'light-blue lighten-2 cp z-depth-2 toasttextbig')
  

  }

  },
partnumber: function()
{
//create a reactive method that I call here that returns the current partnumber
//or use a previously created partnumber
if (typeof Session.get("scannedPartnumber")=="string")
{
return Session.get("scannedPartnumber")
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
 Session.set("start",0)
  count=-1
    
      Session.set("counter", count)

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
'click .4': function(event, template){
 Router.go('one')

},
'click .6': function(event, template){

$( ".ch" ).hide();
  $( ".modal-dialog" ).hide();
 Session.set("descshow",false)
 

console.log("this is the input "+ Session.get("input"))
},
'click .8': function(event, template){
 //Router.go('one')

  var test = $( "#initials" ).val()
   Session.setPersistent("tech", test)
 console.log("these are the initials " + test)
 if (test.length==3)
 {
  count=count+1
   
      Session.set("counter", count)
 $('#initials').val('');
$("#initials").focus();

}
else
{
 Materialize.toast('Please enter 3 letter initials', 8000,'orange darken-2 z-depth-2')
 $('#initials').val('');
$("#initials").focus();
}





},
'click .9': function(event, template){
 //Router.go('one')

 Session.set("start",0)
  count=count+1

      Session.set("counter", count)
 
$("#initials").focus();








},
'click .10': function(event, template){
 //Router.go('one')
//Go to the scan job order
  Session.set("start",0)
 Session.set("color", "white")
    Session.set("scan2",null)
Session.set("scan",null)
Session.set("bagtag",null)
Session.set("boxtag",null)

Session.setPersistent("record", 0)
Session.setPersistent("override", 0)

Session.set("kanbancheck", false)

Session.set("kanbantag", 0)

 Session.set("kanbanquestion", false)
 Session.set("descshow",false)
 Session.set("result", null)
$( ".cp" ).hide();
 Session.setPersistent("scannedOrdernumber", null)
  var x = document.getElementById("snackbar")
   x.className = "cp z-depth-2";
    colortest=true
 good=null
 bag=0
 box=0
 test=0
 run=true
 record=0
  count=-2
    
      Session.set("counter", count)
      setTimeout(function(){
count=count+1

      Session.set("counter", count)

        }, 500);

 
$("#initials").focus();








},
'click .11': function(event, template){
 //Router.go('one')
//There is a new tech at this point
  Session.set("start",0)
 Session.set("color", "white")
    Session.set("scan2",null)
Session.set("scan",null)
Session.set("bagtag",null)
Session.set("boxtag",null)

Session.setPersistent("record", 0)
Session.setPersistent("override", 0)

Session.set("kanbancheck", false)

Session.set("kanbantag", 0)

 Session.set("kanbanquestion", false)
 Session.set("descshow",false)
 Session.set("result", null)
$( ".cp" ).hide();
 Session.setPersistent("scannedOrdernumber", null)
  var x = document.getElementById("snackbar")
   x.className = "cp z-depth-2";
    colortest=true
 good=null
 bag=0
 box=0
 test=0
 run=true
 record=0
  count=-2
    
      Session.set("counter", count)
 $("#initials").focus();









}
 });





/*
console.log("This is the count in green before incr " + count)
    console.log("this is the react var count " +  Session.get("counter"))
    count= Session.get("counter")
    console.log("count after set equal to counter " + count)
    count = count+1
  console.log("this is the count after incr " + count)

*/
