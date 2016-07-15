var test=0
var count=true
var scan1=0
var scan=0
var run=true
var go=null
Session.set("scan",0)
//Add reactive dictionary variable for the pasted content
   Template.two.created = function () {

 
//Session.set("kanbancount", 0)
    this.state = new ReactiveDict();
    
    Session.set("kanbancount",0)
//initialize or setup all of the time stamps here 
this.state.set('check', false);
this.state.set('section1', false);
this.state.set('section2', false);
this.state.set('scan1', 0);

}  
    Template.two.rendered = function () {
/*

$('#initials').on('blur',function(){
   if (this.value.length < 4) $(this).focus();
});
*/

      
$("#initials").focus();
test=0
var typingTimer;                //timer identifier
var doneTypingInterval = 2000;
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
 Session.setPersistent("scan",test)
scan=test
$('#initials').val('');
}
   /*setTimeout(function(){

  Session.set("scan",test)

},6000);
*/
   


}
   
//var nowsync=TimeSync.serverTime(null, 300000);
Template.two.helpers({
   kanbancomponent: function()
  {
    Template.instance().state.set("check",false)
    console.log("this is the typeof kanbandb " + typeof ReactiveMethod.call('kanbandb', Session.get("scan")) )
 if (typeof ReactiveMethod.call('kanbandb', Session.get("scan"))==="number")
 {    
  
  console.log("inside the kanbandb method")
      var count=ReactiveMethod.call('kanbandb', Session.get("scan"))
console.log("here is the count " + count)
if (typeof count==="number")
{
Template.instance().state.set("check",true)
  Session.setPersistent("kanbancount", count)
}
      


     
     

  // scan1=Session.get("scan")
  

  
  
  }

  },  
  check: function()
  {

if (typeof ReactiveMethod.call('orderdesc', Session.get("scan"))==="object"&& run===true&& Template.instance().state.get("check")===true)
{
   var object=ReactiveMethod.call('orderdesc', Session.get("scan"))
   //I can return an object and grab the partnumber here too
   var desc=object.desc
   var partnumber=object.partnumber
  Session.setPersistent("scannedDesc", desc)
  Session.setPersistent("scannedPartnumber", partnumber)
}
if (typeof ReactiveMethod.call('order', Session.get("scan"))==="string"&& run===true && Template.instance().state.get("check")===true )
 {          
run=false
     Materialize.toast('That was a correct job order', 8000,'light-blue accent-4 z-depth-2')
     
   Session.setPersistent("scanned",ReactiveMethod.call('order', Session.get("scan")))
  
 console.log("this is the desc "+ Session.get("scannedDesc") )
  // scan1=Session.get("scan")
  Router.go('three')
      go="green"
    return "green"
  }
  else if(Session.get("scan")!=0 && run===true&& ReactiveMethod.call('order', Session.get("scan"))===false)
  { console.log(" false test")
    $('#initials').val('');
  
     
   
    Materialize.toast('That was not a correct job order', 8000,'orange darken-2 z-depth-2')
     go="red"
      run=false
  }

return go

  }


 

});


Template.two.events({
    // events go here
'click .1': function(event, template){
 Router.go('one')
 console.log("this is a test")   

}
})