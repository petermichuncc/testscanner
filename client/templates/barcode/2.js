var test=0
var count=true
var scan1=0
var scan=0
var run=true
var go=null
Session.setPersistent("scan",0)
    Session.set("kanbancount",0)
//initialize or setup all of the time stamps here 

//Add reactive dictionary variable for the pasted content
   Template.two.created = function () {

 
//Session.set("kanbancount", 0)
    this.state = new ReactiveDict();
    
}  
    Template.two.rendered = function () {
/*

$('#initials').on('blur',function(){
   if (this.value.length < 4) $(this).focus();
});
*/
Session.setPersistent("scan",0)
    Session.set("kanbancount",0)
//initialize or setup all of the time stamps here 
this.state.set('check', false);

this.state.set('scan1', 0);

      
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
    
 if (typeof ReactiveMethod.call('kanbandb', Session.get("scan"))==="number")
 {    
  
 
      var count=ReactiveMethod.call('kanbandb', Session.get("scan"))
      console.log("this is the count "+ count)
if (typeof count==="number")
{
Template.instance().state.set("check",true)
  Session.setPersistent("kanbancount", count)
}
      


 
  
  }

  },  
 
  check: function()
  {
 console.log("this is scan " + Session.get("scan"))
  console.log("this is the run " + run)
if (typeof ReactiveMethod.call('orderdesc', Session.get("scan"))==="object"&& run===true&& Template.instance().state.get("check")===true)
{
   var object=ReactiveMethod.call('orderdesc', Session.get("scan"))
   //I can return an object and grab the partnumber here too
   var desc=object.desc
   var partnumber=object.partnumber
     var ordernumber=object.ordernumber
  Session.setPersistent("scannedDesc", desc)
  Session.setPersistent("scannedPartnumber", partnumber)
    Session.setPersistent("scannedOrdernumber", Session.get("scan"))
}
if (typeof ReactiveMethod.call('order', Session.get("scan"))==="string"&& run===true && Template.instance().state.get("check")===true )
 {      console.log("test a")    
run=false
     Materialize.toast('That was a correct job order', 8000,'light-blue accent-4 z-depth-2')
     
   Session.setPersistent("scanned",ReactiveMethod.call('order', Session.get("scan")))
  
 console.log("this is the desc "+ Session.get("scannedDesc") )
 console.log("this is the order "+ Session.get("scannedOrdernumber") )
  // scan1=Session.get("scan")
Router.go('three')
      go="green"
    return "green"
  }
  else if(Session.get("scan")!=0 && run===true&& ReactiveMethod.call('order', Session.get("scan"))===false)
  { console.log("test b")   
    $('#initials').val('');
  
     
   
    Materialize.toast('That was not a correct job order', 8000,'orange darken-2 z-depth-2')
     go="red"
      run=false
  }
  else if (Session.get("scan")==0 && run==true )
  {console.log("test c")   
    go=null
    run=false
  }

return go

  }
   

});


Template.two.events({
    // events go here
'click .1': function(event, template){
  Session.setPersistent("scan",0)
 $('#initials').focus()
 console.log("this is a test")   
 console.log("this is scan " + Session.get("scan"))
 run=true

},
'click .4': function(event, template){
 Router.go('one')

}
})